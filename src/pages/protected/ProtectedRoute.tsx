import  { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper'
import { useJwt } from 'react-jwt';
import AuthResponse from '../../core/models/auth.response';
import NavBar from '../../components/NavBar';
import Sidebar from '../../components/Sidebar';

type protectedRouteprops = PropsWithChildren & {isAdmin?:boolean} ;

function ProtectedRoute({ children, isAdmin=false }: protectedRouteprops) {
    const token = getToken();
    const { decodedToken, isExpired } = useJwt<AuthResponse>(token);
    const role = decodedToken?.role;

    const ui = <div className="wrapper">
    <NavBar/>
    <Sidebar/>
    <div className="content-wrapper">
    {children}
    </div>; 
    </div>
    
    if (token == null || token == "" || isExpired) {
        return <Navigate to="/login" replace />;
    }

    if (isAdmin && role=="admin") {
        return ui; 
    }

    if (token!='' && token!=null && !isAdmin) {
        return ui; 
    }

}

export default ProtectedRoute