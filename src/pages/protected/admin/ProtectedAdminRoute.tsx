import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { getToken } from '../../../utils/helper';
import AuthResponse from '../../../core/models/auth.response';
import NavBar from '../../../components/NavBar';
import Sidebar from '../../../components/Sidebar';


function ProtectedAdminRoute({ children }: PropsWithChildren) {
    const token = getToken();
    const { decodedToken, isExpired } = useJwt<AuthResponse>(token);
    const role = decodedToken?.role;

    const navigate = useNavigate();

    useEffect(() => {

        if ((token == '' || isExpired == true) && role != "ADMIN") {
            navigate('/')
        }

    }, [token, isExpired, role]);

    return (<div className="wrapper">
        <NavBar />
        <Sidebar />
        <div className="content-wrapper">
            {children}
        </div>
    </div>)



}

export default ProtectedAdminRoute;