import { readData } from "@api/api.crud";
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
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(filter);
    
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await readData(urlPart, filter);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const responseData = await response.json();
        setData(responseData[0].data);
        setPagination(responseData[0].pagination);
      } catch (error: any) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter, urlPart]);

  return { data, pagination, errors, isLoading, setErrors, setIsLoading };
};
