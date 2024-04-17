export default interface DataResponse<T> {

    data: T[];
    totalPage: number;
    totalItem: number;
}