import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';

type unAuthRouteProps = PropsWithChildren;

function UnAuthRoute ({children }:unAuthRouteProps)  {
    const token = getToken();

    if (token!='') {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default  UnAuthRoute;