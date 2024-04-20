import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../core/store/store';

type protectedRouteProps = PropsWithChildren & { isAdmin?: boolean };

function ProtectedRoute ({children, isAdmin=false }:protectedRouteProps)  {
    const isAuthenticated = useSelector((state:AppState) => state.auth.isAuthenticated);
    const role = useSelector((state:AppState) => state.auth.user?.role);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return isAdmin && role=="admin" ? (isAuthenticated ? children : <Navigate to="/dashboard" replace />) : children;
};

export default  ProtectedRoute;