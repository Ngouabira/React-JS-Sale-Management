import { readItems } from "@api/api.crud";
import FilterRequest from "@models/filter.request";
import Pagination from "@models/pagination.model";
import { useEffect, useState } from "react";

export const useFetchData = <T>(urlPart: string, filter: FilterRequest) => {

    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        per_page: 0,
        current_page: 0,
        total_pages: 0
    });

    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await readItems(urlPart, filter);

                if (!response.ok) {
                    throw new Error(`Error : ${response.statusText}`)
                }

                const responseData = await response.json();
                setData(responseData.data);
                setPagination(responseData.pagination);


            } catch (error) {
                setErrors(error);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchData();

    }, [filter])

    return { data, pagination, isLoading, errors, setErrors, setIsLoading };
}