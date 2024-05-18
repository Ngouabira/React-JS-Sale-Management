import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "@components/NavBar";
import Sidebar from "@components/Sidebar";
import { getToken, isTokenExpired } from "@utils/helper";

function ProtectedRoute({ children }: PropsWithChildren) {

  const token = getToken();
  const isExpired = isTokenExpired();

    if (token == "" || isExpired==true) {
      return <Navigate to={'/login'} replace />
    }  
  
    else{
      return (
        <div className="wrapper">
          <NavBar />
          <Sidebar />
          <div className="content-wrapper">{children}</div>
        </div>
      );
    }

  
}

export default ProtectedRoute;
