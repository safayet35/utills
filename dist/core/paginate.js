/**
 * Create frontend-friendly pagination data from a list.
 *
 * @example
 * paginate(items, { page: 1, pageSize: 10 });
 */
export function paginate(list, options) {
    if (!Array.isArray(list)) {
        throw new TypeError("paginate: list must be an array");
    }
    const page = options?.page ?? 1;
    const pageSize = options?.pageSize ?? 10;
    if (!Number.isInteger(page) || page <= 0) {
        throw new TypeError("paginate: page must be a positive integer");
    }
    if (!Number.isInteger(pageSize) || pageSize <= 0) {
        throw new TypeError("paginate: pageSize must be a positive integer");
    }
    const totalItems = list.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return {
        data: list.slice(start, end),
        page: currentPage,
        pageSize,
        totalItems,
        totalPages,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1,
    };
}
//# sourceMappingURL=paginate.js.map