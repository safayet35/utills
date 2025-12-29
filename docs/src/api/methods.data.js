// wee add here are all available methods
// add your method information like this pattern

const methods = [
    {
        name: "randomId",
        description: "Generate a cryptographically secure random ID.",
        params: [
            {
                name: "options",
                type: "object",
                optional: true,
                default: "{}",
                description: "Optional configuration object"
            },
            {
                name: "options.length",
                type: "number",
                optional: true,
                default: 16,
                description: "Length of the generated ID"
            },
            {
                name: "options.charset",
                type: "string",
                optional: true,
                default: "a-zA-Z0-9",
                description: "Custom characters set to generate the ID"
            },
            {
                name: "options.safe",
                type: "boolean",
                optional: true,
                default: false,
                description:
                    "Removes visually confusing characters (0, O, l, I)"
            }
        ],
        returns: "string",
        example: `import { randomId } from "utills";

const id1 = randomId();
const id2 = randomId({ length: 10 });
const id3 = randomId({ safe: true });`
    },

    {
        name: "timeAgo",
        description: "Convert a date to human-readable time.",
        params: [
            {
                name: "date",
                type: "Date",
                optional: false,
                description: "Input date"
            }
        ],
        returns: "string",
        example: `import { timeAgo } from "utills"

timeAgo(new Date());`
    },

     {
        name: "generateSecret",
        description:
            "Generate a cryptographically secure random secret string using a predefined alphanumeric character set. Works in both browser and Node.js environments.",
        params: [
            {
                name: "length",
                type: "number",
                optional: true,
                default: 32,
                description:
                    "Length of the generated secret. Must be greater than 0."
            }
        ],
        returns: "string",

        example: `import { generateSecret } from "utills"

const secret1 = generateSecret()
const secret2 = generateSecret(32)
const secret3 = generateSecret(64)`
    },
     {
        name: "timePeriod",
        description:
            "Automatically returns the current period of the day based on time. Useful for greetings, themes, and time-based UI logic.",
        params: [
            {
                name: "date",
                type: "Date",
                optional: true,
                default: "current date & time",
                description:
                    "Optional date object. Defaults to current date & time."
            }
        ],
        returns: `"morning" | "afternoon" | "evening" | "night"`,
        example: `import { timePeriod } from "utills"

timePeriod()
timePeriod(new Date("2025-01-01T18:30:00"))`
    },
    
     {
  name: "readTime",
  description: "Estimates how long it will take to read a piece of text.",
  params: [
    {
      name: "input",
      type: "string | string[]",
      optional: false,
      description: "The text content to calculate reading time for"
    },
    {
      name: "options",
      type: "{ wordsPerMinute?: number }",
      optional: true,
      description: "Optional configuration such as reading speed"
    }
  ],
  returns: "{ words: number; minutes: number; text: string }",
  example: `import { readTime } from "utills"

readTime("My blog post content");`
},

{
  name: "fuzzySearch",
  description: "Performs an advanced fuzzy search on arrays with support for multiple and nested keys.",
  params: [
  {
    name: "list",
    type: "Array<object>",
    optional: false,
    description: "The array of objects to perform search on"
  },
  {
    name: "query",
    type: "string",
    optional: false,
    description: "The search text used to find matching items"
  },
  {
    name: "options",
    type: "object",
    optional: true,
    default: "{}",
    description: "Optional configuration object for advanced search control"
  },
  {
    name: "options.keys",
    type: "string[]",
    optional: true,
    default: "undefined",
    description:
      "List of keys to search on. Supports multiple keys and nested keys using dot notation (e.g. 'author.name')"
  },
  {
    name: "options.caseSensitive",
    type: "boolean",
    optional: true,
    default: "false",
    description:
      "If true, search will be case-sensitive. If false, search ignores letter casing"
  },
  {
    name: "options.threshold",
    type: "number",
    optional: true,
    default: 0.4,
    description:
      "Controls how strict the fuzzy matching is. Value must be between 0 and 1 (lower is stricter, higher is looser)"
  }
],
  returns: "Array<object>",
  example: `import { fuzzySearch } from "utills"

fuzzySearch(users, "john", { keys: ["profile.username", "email"] });`
},
 {
  name: "paginate",
  description: "Generates frontend pagination data from an array.",
  params: [
    {
      name: "list",
      type: "Array<any>",
      optional: false,
      description: "The full list of items to paginate"
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Optional pagination configuration"
    },
    {
      name: "options.page",
      type: "number",
      optional: true,
      default: 1,
      description: "Current page number (1-based index)"
    },
    {
      name: "options.pageSize",
      type: "number",
      optional: true,
      default: 10,
      description: "Number of items per page"
    }
  ],
  returns: "{ data: any[]; page: number; pageSize: number; totalItems: number; totalPages: number; hasNext: boolean; hasPrev: boolean }",
  example: `import { paginate } from "utills"

paginate(items, { page: 1, pageSize: 10 });`
},
 {
  name: "debounce",
  description: "Creates a debounced function that delays execution until after a wait time.",
  params: [
    {
      name: "fn",
      type: "Function",
      optional: false,
      description: "The function to debounce"
    },
    {
      name: "delay",
      type: "number",
      optional: false,
      description: "Delay in milliseconds before invoking the function"
    }
  ],
  returns: "Function & { cancel(): void; flush(): void }",
  example: `import { debounce } from "utills";

// Step 1: Debounce a function
const debouncedSearch = debounce((value: string) => {
  console.log("Search query:", value);
}, 300);

// debouncedSearch is now a function, but it also has two extra methods:
// 1. cancel() → cancels any pending execution
// 2. flush() → immediately executes the function


// Step 2: Use the debounced function (simulate typing)
debouncedSearch("react");    // won't call immediately
debouncedSearch("react j");  // previous timer canceled, new timer starts
debouncedSearch("react js"); // timer reset again

// After 300ms, it will log:
/// Search query: react js

// Step 3: Flush to execute immediately
debouncedSearch.flush(); 
/// Search query: react js (if 300ms hasn't passed yet)

// Step 4: Cancel to prevent execution
debouncedSearch.cancel(); 
/// Function execution canceled, nothing will be printed`
},
{
  name: "throttle",
  description: "Creates a throttled function that only invokes the provided function at most once per every specified wait period.",
  params: [
    {
      name: "func",
      type: "function",
      optional: false,
      description: "The function to throttle"
    },
    {
      name: "wait",
      type: "number",
      optional: false,
      description: "The number of milliseconds to throttle invocations to"
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Optional configuration object"
    },
    {
      name: "options.leading",
      type: "boolean",
      optional: true,
      default: "true",
      description: "Specify invoking on the leading edge of the timeout"
    },
    {
      name: "options.trailing",
      type: "boolean",
      optional: true,
      default: "true",
      description: "Specify invoking on the trailing edge of the timeout"
    }
  ],
  returns: "Function",
  example: `import { throttle } from "utills";

// 1. Standard: UI Updates (Runs on start & end)
const onResize = throttle((w: number) => { /* expensive layout update */ }, 1000);

onResize(500); // => Executed immediately (Leading)
onResize(550); // ... ignored ...
onResize(600); // => Executed after 1000ms (Trailing with 600)

// 2. Leading Only: Prevent Button Spam (Runs on start only)
const onPay = throttle(() => { /* process payment */ }, 2000, { trailing: false });

onPay(); // => Executed immediately
onPay(); // ... ignored ...
onPay(); // ... ignored ...

// 3. Trailing Only: Analytics/Search (Runs on end only)
const trackMouse = throttle((x: number) => { /* save position */ }, 1000, { leading: false });

trackMouse(10); // ... waits ...
trackMouse(20); // => Executed after 1000ms with (20)

// 4. Cancellation: Component Cleanup
const heavyTask = throttle(() => { /* heavy operation */ }, 5000);

heavyTask();          // Leading execution
heavyTask();          // Schedules trailing execution...
heavyTask.cancel();   // Pending trailing execution is cleared and never runs`
},
{
  name: "truncate",
  description: "Truncates a string to a specific length, optionally preserving word boundaries and adding a custom omission suffix.",
  params: [
    {
      name: "str",
      type: "string",
      optional: false,
      description: "The input string to truncate."
    },
    {
      name: "length",
      type: "number",
      optional: false,
      description: "The maximum length of the resulting string."
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Configuration options."
    },
    {
      name: "options.omission",
      type: "string",
      optional: true,
      default: '"..."',
      description: "The string to append to the truncated text."
    },
    {
      name: "options.separator",
      type: "string | RegExp",
      optional: true,
      default: "undefined",
      description: "A pattern (string or RegExp) to truncate at natural breaks (like spaces)."
    }
  ],
  returns: "string",
  example: `import { truncate } from "utills";
// Basic usage
truncate("Hello World", 8); 
// => "Hello..."

// With custom omission
truncate("Long text here", 10, { omission: ".." }); 
// => "Long tex.."

// Preserving words
truncate("This is a sentence", 12, { separator: " " }); 
// => "This is..."`
},
{
  name: "slugify",
  description: "Converts a string into a URL-friendly slug by removing special characters, handling accents, and replacing whitespace.",
  params: [
    {
      name: "str",
      type: "string",
      optional: false,
      description: "The string to convert."
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Configuration options."
    },
    {
      name: "options.separator",
      type: "string",
      optional: true,
      default: '"-"',
      description: "The character to separate words."
    },
    {
      name: "options.lowercase",
      type: "boolean",
      optional: true,
      default: "true",
      description: "Whether to convert the string to lowercase."
    }
  ],
  returns: "string",
  example: `import { slugify } from "utills";

// Standard usage
slugify("Hello World!"); // "hello-world"

// Custom separator
slugify("React & Vue", { separator: "_" }); // "react_vue"`
},
{
  name: "sortBy",
  description: "Sorts an array of primitives or objects based on a property, dot-notation path, or custom getter function. Does not mutate the original array.",
  params: [
    {
      name: "array",
      type: "Array",
      optional: false,
      description: "The array to sort."
    },
    {
      name: "iteratee",
      type: "string | Function | null",
      optional: true,
      default: "null",
      description: "The property to sort by. Can be a string key, a dot path (e.g., 'a.b'), or a function. Use null for primitives."
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Configuration options."
    },
    {
      name: "options.order",
      type: "'asc' | 'desc'",
      optional: true,
      default: "'asc'",
      description: "The sort direction."
    }
  ],
  returns: "Array",
  example: `import { sortBy } from "utills";

const products = [
  { name: "Laptop", price: 1000, meta: { rating: 4.5 } },
  { name: "Mouse", price: 20, meta: { rating: 4.8 } },
  { name: "Keyboard", price: 50, meta: { rating: 4.2 } }
];

// 1. Sort by Nested Property + Descending Order
const bestRated = sortBy(products, "meta.rating", { order: "desc" });
// => Mouse (4.8), Laptop (4.5), Keyboard (4.2)

// 2. Sort by Custom Getter (Computed Value) + Ascending
const cheapest = sortBy(products, (item) => item.price, { order: "asc" });
// => Mouse (20), Keyboard (50), Laptop (1000)

// 3. Sort Primitives + Descending
const nums = sortBy([3, 1, 4, 2], null, { order: "desc" });
// => [4, 3, 2, 1]`
},
{
  name: "randomNumber",
  description: "Generates a random number between a minimum and maximum value, with support for integers (inclusive) and floating-point numbers.",
  params: [
    {
      name: "min",
      type: "number",
      optional: false,
      description: "The minimum value (inclusive)."
    },
    {
      name: "max",
      type: "number",
      optional: false,
      description: "The maximum value."
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Configuration options."
    },
    {
      name: "options.float",
      type: "boolean",
      optional: true,
      default: "false",
      description: "If true, returns a floating-point number. If false, returns an integer."
    }
  ],
  returns: "number",
  example: `import { randomNumber } from "utills";

// Generate a random integer between 1 and 100
const id = random(1, 100);

// Generate a random float for coordinates
const opacity = random(0, 1, { float: true });`
},
{
  name: "copyToClipboard",
  description: "Copies text to the clipboard using the modern Clipboard API, gracefully falling back to legacy methods for wider browser compatibility.",
  params: [
    {
      name: "text",
      type: "string",
      optional: false,
      description: "The string to copy to the clipboard."
    }
  ],
  returns: "Promise<boolean>",
  example: `import { copyToClipboard } from "utills";

const handleCopy = async () => {
  const success = await copyToClipboard("API_KEY_12345");
  if (success) {
    alert("Copied successfully!");
  } else {
    alert("Failed to copy.");
  }
};`
},

{
  name: "formatDate",
  description: "Formats dates using custom patterns, standard locale styles, or human-readable relative time strings.",
  params: [
    {
      name: "date",
      type: "Date | string | number",
      optional: false,
      description: "The input date."
    },
    {
      name: "format",
      type: "string",
      optional: true,
      default: '"medium"',
      description: "Pattern ('YYYY-MM-DD'), Style ('full', 'medium', 'short'), or 'relative'."
    },
    {
      name: "locale",
      type: "string",
      optional: true,
      default: '"en-US"',
      description: "BCP 47 language tag (e.g., 'en-US', 'bn-BD')."
    }
  ],
  returns: "string",
  example: `import { formatDate } from "utills";

const now = new Date();

// 1. Custom Pattern with Locale
formatDate(now, "DD MMMM, YYYY", "bn-BD");
// => "২৫ অক্টোবর, ২০২৩" (Output depends on locale)

// 2. Human Readable (Relative)
formatDate(Date.now() - 3600000, "relative");
// => "1 hour ago"

formatDate(Date.now() - 3600000, "relative", "es-ES");
// => "hace 1 hora"

// 3. Standard Styles
formatDate(now, "full", "en-US");
// => "Wednesday, October 25, 2023"`
}
    
    
]

export default methods;
