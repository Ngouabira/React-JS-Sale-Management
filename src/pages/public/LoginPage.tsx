import  { useState } from 'react'
import { API_URL, DEFAULT_HEADER } from '../../utils/const';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../utils/helper';

function LoginPage() {

    const [form, setForm] = useState({email:'', password:''});

    const [errors, setErrors] = useState({error:''});

    const navigate = useNavigate();

    const handleChange = (e:any) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value})
        
    }

    const handleLogin = async (e:any) =>{
        e.preventDefault();
        try {
            const request = await fetch(`${API_URL}/auth/login`,{
                headers:{
                    ...DEFAULT_HEADER
                },
                method:'POST',
                body:JSON.stringify(form)
            })
            const response = await request.json()
           if (response.access_token) {
            saveToken(response.access_token);
            navigate('/');
           }
           setErrors(response);
            
        } catch (error:any) {
            setErrors(error);
        }
         
    }

  return (
    <div className="row mt-3">
        <div className="col-8 offset-2 mb-3">
            {errors.error!='' && <span>{errors.error}</span>}
            <form className="mt-3" onSubmit={handleLogin}>
              <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={handleChange} className="form-control" name='password' id="exampleInputPassword1"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage