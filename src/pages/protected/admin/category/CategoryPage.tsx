import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { API_URL, HEADER } from "@utils/const";
import Category from "@models/category.model";
import FilterRequest from "@models/filter.request";
import Pagination from "@models/pagination.model";
import { alert, confirm } from "@utils/sweetalert";
import { numberToArray } from "@utils/helper";

function CategoryPage() {

  // const [data, setData] = useState({});
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0
  });
  const [categories, setCategories] = useState<Category[]>([]);

  const [filter, setFilter] = useState<FilterRequest>({ param: " ", size: 10, page: 0 })


  const [errors, setErrors] = useState({});

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    handleData(filter);
  }, [filter])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value })

  }

  const handleData = async (filter: FilterRequest) => {
    setIsloading(true);
    
    try {
      const request = await fetch(`${API_URL}/category?param=${filter.param}&page=${filter.page}&size=${filter.size}`, {
        headers: {
          ...HEADER
        },
        method: 'GET',
      })

      const response = await request.json();
      setCategories(response[0].data);
      setPagination(response[0].pagination);
      
    } catch (error: any) {
      setErrors(error);
    }
    finally {
      setIsloading(false);
    }

  }

  const  deleteItem = async (id:number) =>  {
    setIsloading(true);
    const request = await fetch(`${API_URL}/category/${id}`, {
      headers: {
        ...HEADER
      },
      method: 'DELETE',
    })

    try {

      const response = await request.json();
      if (response.item) {
        alert('Deleted', response.message);
        handleData({ param: " ", size: 10, page: 0 } as FilterRequest)
      } else {
        alert('Deleted', 'Something wrong happened!', 'danger')
      }
    } catch (error: any) {
      setErrors(error);
    }
    finally {
      setIsloading(false);
    }
  }

  function handelDelte(id: number): void {
    
    confirm('Confirmation', 'Do you really want to delete this item?', () => deleteItem(id))
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
                  {categories.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td className="p-2">
                      <Link className="btn btn-primary" to={'/category/edit/'+item.id}>Edit</Link> &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => handelDelte(item.id)}>Delete</button></td>
                  </tr>)}
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

export default CategoryPage