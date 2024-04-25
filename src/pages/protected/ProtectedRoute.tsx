import  { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper'
import { useJwt } from 'react-jwt';
import AuthResponse from '../../core/models/auth.response';

type protectedRouteprops = PropsWithChildren & {isAdmin?:boolean} ;

function ProtectedRoute({ children, isAdmin=false }: protectedRouteprops) {
    const token = getToken();
    const { decodedToken, isExpired } = useJwt<AuthResponse>(token);
    const role = decodedToken?.role;
    
    if (token == null || token == "" || isExpired==false) {
        return <Navigate to="/login" replace />;
    }

    return isAdmin && role=="admin" ? (!isExpired ? children : <Navigate to="/dashboard" replace />) : children;
}

export default ProtectedRoute