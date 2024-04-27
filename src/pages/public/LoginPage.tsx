import  { useState } from 'react'
import { API_URL, DEFAULT_HEADER } from '../../utils/const';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../utils/helper';

function LoginPage() {

    const [form, setForm] = useState({email:'', password:''});

    const [errors, setErrors] = useState({error:''});

    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e:any) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value})
        
    }

    const handleLogin = async (e:any) =>{
        e.preventDefault();
        setIsloading(true);
        const request = await fetch(`${API_URL}/auth/login`,{
          headers:{
              ...DEFAULT_HEADER
          },
          method:'POST',
          body:JSON.stringify(form)
      })
      
        try {
           
            const response = await request.json()
           if (response.access_token) {
            saveToken(response.access_token);
            navigate('/');
           }
           setErrors(response);
            
        } catch (error:any) {
            setErrors(error);
        }
        finally{
          setIsloading(false);
        }
         
    }

  return (
    <>

  <div style={{minHeight: 464}} className="login-page">

        {/* {isLoading && <span>Loading ...</span>} */}
   
      <div className="login-box">
      {/* /.login-logo */}
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="../../index2.html" className="h1"><b>Sale</b>Management</a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Login</p>
          {errors.error!='' && <span style={{ 'color':'red' }}>{errors.error}</span>}
          <form onSubmit={handleLogin}>
            <div className="input-group mb-3">
              <input type="email" required className="form-control" name='email' onChange={handleChange} placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" required className="form-control" name='password' placeholder="Password" onChange={handleChange} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>{!isLoading?'Login':'Loading...'}</button>
          </form>
          {/* /.social-auth-links */}
          <p className="mb-1">
            <a href="forgot-password.html">I forgot my password ? </a>
          </p>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
      </div>
    </div>


    </>


  )
}

export default LoginPage