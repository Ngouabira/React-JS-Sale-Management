import Pagination from "./pagination.model";

export default interface Data<T> {

    data: T[];
    pagination: Pagination;
}