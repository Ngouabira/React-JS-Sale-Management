import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken, getUserRoleFromToken, isTokenExpired } from '../../../utils/helper';
import NavBar from '@components/NavBar';
import Sidebar from '@components/Sidebar';


function ProtectedAdminRoute({ children }: PropsWithChildren) {
    const token = getToken();
    const isExpired = isTokenExpired();
    const role = getUserRoleFromToken();

    if ((token == '' || isExpired == true) || role != "ADMIN") {
        return <Navigate to={'/'} replace />
    }
    else {
        return (<div className="wrapper">
            <NavBar />
            <Sidebar />
            <div className="content-wrapper">
                {children}
            </div>
        </div>)
    }

}

export default ProtectedAdminRoute;