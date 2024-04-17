export interface SateModel<T> {
    isLoading: boolean,
    data: T[],
    totalElements: number,
    totalPages: number,
    size: number
}