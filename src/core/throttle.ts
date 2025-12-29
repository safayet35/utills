/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations.
 *
 * @template T
 * @param {T} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to throttle invocations to.
 * @param {object} [options={}] - The options object.
 * @param {boolean} [options.leading=true] - Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] - Specify invoking on the trailing edge of the timeout.
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void }} Returns the new throttled function.
 * @throws {TypeError} If `func` is not a function.
 *
 * @example
 * const updatePosition = (x, y) => console.log(x, y);
 * const throttledUpdate = throttle(updatePosition, 100);
 *
 * // Invoke repeatedly
 * throttledUpdate(1, 2);
 * throttledUpdate(3, 4);
 * // => Logs "1, 2" immediately (leading edge)
 * // => Logs "3, 4" after 100ms (trailing edge)
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any = null;
  let lastCallTime: number = 0;
  
  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  const invokeFunc = (time: number) => {
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
    }
    lastCallTime = time;
    lastArgs = null;
    lastThis = null;
    timeoutId = null;
  };

  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        invokeFunc(Date.now());
      }, remaining);
    }
  };

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = null;
    lastCallTime = 0;
    lastArgs = null;
    lastThis = null;
  };

  return throttled;
}