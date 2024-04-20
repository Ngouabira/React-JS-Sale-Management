import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LoginRequest from '../../core/models/request/login.request';
import { login } from '../../core/store/authSlice';
import { AppDispatch } from '../../core/store/store';
import { toast } from '../../utils/sweetalert';

function Login() {

  const dispatch = useDispatch<AppDispatch>();

  const data: LoginRequest = {
    "email": "zsmith@example.net",
    "password": "1234"
  }

  useEffect(() => {
    dispatch(login(data))
  }, [])

  return (
    <div>Login</div>
  )
}

export default Login