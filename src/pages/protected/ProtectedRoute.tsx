import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/helper";
import { useJwt } from "react-jwt";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

function ProtectedRoute({ children }: PropsWithChildren) {
  const token = getToken();
  const { isExpired } = useJwt(token);
  const navigate = useNavigate();

  useEffect(() => {
    // if (token == "" || isExpired==true) {
    //   navigate("/login");
    // }
    console.log(isExpired);
    
  }, [isExpired]);

  return (
    <div className="wrapper">
      <NavBar />
      <Sidebar />
      <div className="content-wrapper">{children}</div>
    </div>
  );
}

export default ProtectedRoute;
