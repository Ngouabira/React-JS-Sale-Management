import  { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API_URL, HEADER } from '@utils/const';
import { toast } from '@utils/sweetalert';

function EditCategory() {

  const {id} = useParams();

    const [form, setForm] = useState({ name: '', description: '' });

    const [errors, setErrors] = useState({ error: '' });

    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      handleData(id);
    }, [id])

    const handleData = async (id: string|undefined) => {
      setIsloading(true);
      const request = await fetch(`${API_URL}/category/${id}`, {
        headers: {
          ...HEADER
        },
        method: 'GET',
      })
  
      try {
  
        const response = await request.json();
        setForm(response.item);        
  
      } catch (error: any) {
        setErrors(error);
      }
      finally {
        setIsloading(false);
      }
  
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log(value);
        
        setForm({ ...form, [name]: value })

    }

    const handelSubmit = async (e: any) => {
        e.preventDefault();
        setIsloading(true);
        const request = await fetch(`${API_URL}/category/${id}`, {
            headers: {
                ...HEADER
            },
            method: 'PUT',
            body: JSON.stringify(form)
        })

        try {

            const response = await request.json();
            // console.log(response);
            toast(response.message);
            setForm({ name: ' ', description: ' ' });
            navigate('/category');


        } catch (error: any) {
            setErrors(error);
        }
        finally {
            setIsloading(false);
        }

    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <div className="row p-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="float-left">
                                    <div className="btn-group">
                                        <Link to="/category" className="btn btn-sm btn-block btn-secondary"><i className="fas fa-arrow-left"></i>
                                        </Link>
                                    </div>
                                </div>
                                <span className="card-title pl-2">Create category</span>

                                <div className="row float-right">
                                    <div className="btn-group">
                                        <button type="submit" className="btn btn-success mr-2" id="form-btn" disabled={isLoading}><i className="fas fa-save"></i>{!isLoading?'':'  Loading...'}</button>
                                        <Link type="button" className="btn btn-danger" to="/category"><i className="fas fa-times"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                {errors.error != '' && <span style={{ 'color': 'red' }}>{errors.error}</span>}

                                <div className="input-group mb-3">
                                    {/* <label htmlFor="name" className="col-form-label">Name</label> */}
                                    <input value={form.name} type="text" required className="form-control" name='name' onChange={handleChange} placeholder="Name" />
                                </div>

                                <div className="input-group mb-3">
                                {/* <label className="col-form-label" htmlFor="description">Description</label> */}
                                    <input value={form.description} type="text" required className="form-control" name='description' onChange={handleChange} placeholder="Description" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default EditCategory