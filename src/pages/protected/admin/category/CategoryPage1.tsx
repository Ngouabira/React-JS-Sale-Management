import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import FilterRequest from "@models/filter.request";
import { alert, confirm } from "@utils/sweetalert";
import { numberToArray } from "@utils/helper";
import { useFetchData } from "@hooks/useFetchData";
import Category from "@models/category.model";

function CategoryPage1() {

  const [filter, setFilter] = useState<FilterRequest>({ param: " ", size: 10, page: 0 });
  const { data, pagination, errors, isLoading } = useFetchData<Category>('category',filter);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value })

  }

  return (
    <>

      <div className="row p-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-10 mt-2">
                  <h3 className="card-title">Categories</h3>
                </div>
                <div className="col-2">
                  <Link type="button" className="btn float-right btn-primary" to="/category/add"> <i className="fa fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="card-body">

              <div className="d-flex justify-content-between p-2">
                <div>
                  <select name="size" className="form-control" onChange={handleChange}>
                    <option value={1}>1</option>
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
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  {data.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td className="p-2">
                     </td></tr>)}
                </tbody>
              </table>
              <ul className="pagination float-right p-2">
                {
                  numberToArray(pagination.total_pages).map((page, index)=> <li key={index}>
                    <button type="button" onClick={()=>{ setFilter({...filter, page:page})}} className="nav-link btn btn-default">{page+1}</button>
                    </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CategoryPage1