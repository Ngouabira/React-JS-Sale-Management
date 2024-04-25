import { useEffect } from 'react'
import { useJwt } from 'react-jwt';
import { getToken } from '../../utils/helper';
import AuthResponse from '../../core/models/auth.response';

function DashBboard() {
  const token = getToken();
  const { decodedToken, isExpired } = useJwt<AuthResponse>(token);

  useEffect(()=>{
    console.log(token);
    console.log(decodedToken?.role);
  },[])
  

  return (
    <div>{isExpired}</div>
  )
}

export default DashBboard