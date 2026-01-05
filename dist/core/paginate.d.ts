/**
 * Create frontend-friendly pagination data from a list.
 *
 * @example
 * paginate(items, { page: 1, pageSize: 10 });
 */
export declare function paginate<T>(list: T[], options?: {
    page?: number;
    pageSize?: number;
}): {
    data: T[];
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
};
//# sourceMappingURL=paginate.d.ts.map