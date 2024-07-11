import { useState } from "react"
import { Link } from "react-router-dom";
import FilterRequest from "@models/filter.request";
import { alert, confirm } from "@utils/sweetalert";
import { listToAssociativeArrayList, numberToArray } from "@utils/helper";
import { useFetchData } from "@hooks/useFetchData";
import { deleteItem } from "@api/api.crud";

interface DataGridProps {
    title: string;
    url: string;
    columns: string[]
}

function DataGrid<T>({ title, url, columns }: DataGridProps) {

    const [filter, setFilter] = useState<FilterRequest>({ param: " ", size: 5, page: 1 })
    const { data, pagination, isLoading, errors, setErrors, setIsLoading } = useFetchData<T>(url, filter);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value })

    }

    const removeItem = async (id: number) => {
        setIsLoading(true);
        const request = await deleteItem(url, id);
        try {

            const response = await request.json();
            if (response.item) {
                alert('Deleted', response.message);
                setFilter({ param: " ", size: 10, page: 1 })
            } else {
                alert('Deleted', 'Something wrong happened!', 'danger')
            }
        } catch (error: any) {
            setErrors(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    function handelDelte(id: number): void {

        confirm('Confirmation', 'Do you really want to delete this item?', () => removeItem(id))
    }

    return (
        <>

            <div className="row p-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10 mt-2">
                                    <h3 className="card-title">{title}</h3>
                                </div>
                                <div className="col-2">
                                    <Link type="button" className="btn float-right btn-primary" to={`/${url}/add`}> <i className="fa fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">

                            {isLoading && <p>Loading...</p>}

                            <div className="d-flex justify-content-between p-2">
                                <div>
                                    <select name="size" className="form-control" onChange={handleChange}>
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" name="param" id="param" onChange={handleChange} className="form-control col-12 float-right" placeholder="Search..." />
                                </div>
                            </div>


                            <table className="table table-bordered table-striped">
                                <thead>
                                    {columns.map(column => <th key={column}>{column}</th>)}
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    {listToAssociativeArrayList(data).map(item => <tr key={item['id']}>
                                        {columns.map(column => <td>{item[column]}</td>)}
                                        <td className="p-2">
                                            <Link className="btn btn-primary" to={"/" + url + '/edit/' + item.id}>Edit</Link> &nbsp;
                                            <button type="button" className="btn btn-danger" onClick={() => handelDelte(item.id)}>Delete</button></td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <ul className="pagination float-right p-2">
                                {filter.page > 1 &&
                                    <button type="button" onClick={() => { setFilter({ ...filter, page: filter.page - 1 }) }} className="btn btn-default"> {"<< "}Previous</button>
                                }

                                {(pagination.total_pages <= 11 && pagination.total_pages >1)  &&
                                    numberToArray(pagination.total_pages).map((page) => <li key={page}>
                                        <button type="button" onClick={() => { setFilter({ ...filter, page: page }) }} className={page == filter.page ? "nav-link btn btn-primary text-white disabled" : "nav-link btn btn-default"}>{page}</button>
                                    </li>)
                                }

                                {pagination.total_pages > 11 &&
                                    numberToArray(pagination.total_pages).map((page) => {
                                        if (page==1 || page == pagination.total_pages || (page>filter.page-5 && page<=filter.page+5)) {
                                            return (
                                                <li key={page}>
                                        <button type="button" onClick={() => { setFilter({ ...filter, page: page }) }} className={page == filter.page ? "nav-link btn btn-primary text-white disabled" : "nav-link btn btn-default"}>{page}</button>
                                    </li>
                                            );
                                        }
                                        return null;
                                    })
                                }

                                {pagination.total_pages > 1 && filter.page < pagination.total_pages &&
                                    <button type="button" onClick={() => { setFilter({ ...filter, page: filter.page + 1 }) }} className="btn btn-default">Next {" >>"}</button>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DataGrid