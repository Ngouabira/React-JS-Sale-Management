import { PropsWithChildren } from "react";
import { getToken, isTokenExpired } from "../../utils/helper";
import { Navigate } from "react-router-dom";

function UnAUthRoute({ children }: PropsWithChildren) {

  const token = getToken();
  const isExpired = isTokenExpired();

    if (token != "" && isExpired==false) {
      return <Navigate to={'/'} replace />
    }
    else{
      return children;
    }

}

export default UnAUthRoute;
