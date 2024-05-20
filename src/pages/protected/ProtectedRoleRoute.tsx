import  { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@utils/helper'
import { useJwt } from 'react-jwt';
import AuthResponse from '@core/models/auth.response';
import NavBar from '@components/NavBar';
import Sidebar from '@components/Sidebar';

type protectedRouteprops = PropsWithChildren & {isAdmin?:boolean} ;

function ProtectedRoute({ children, isAdmin=false }: protectedRouteprops) {
    const token = getToken();
    const { decodedToken, isExpired } = useJwt<AuthResponse>(token);
    const role = decodedToken?.role;

    const navigate = useNavigate();

    const ui = <div className="wrapper">
    <NavBar/>
    <Sidebar/>
    <div className="content-wrapper">
    {children}
    </div>; 
    </div>

useEffect(() => {

    if(token=='' || isExpired==true){
        navigate('/login')
    }

     if (isAdmin==true && role!="ADMIN") {
        navigate('/')
    }
    
  }, [token, isAdmin, isExpired, role]);

  return ui;
    
    // if (token!='' && !isAdmin && isExpired==false) {
    //     return ui; 
    // }

    // else if (isAdmin==true && role=="ADMIN") {
    //     return ui; 
    // }
    // else if (isAdmin==true && role!="ADMIN") {
    //     return <Navigate to="/" replace />;
    // }
    // else{
    //     return <Navigate to="/login" replace />;
    // }


}

export default ProtectedRoute