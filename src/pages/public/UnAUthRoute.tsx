import { PropsWithChildren, useEffect } from "react";
import { getToken } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

function UnAUthRoute({ children }: PropsWithChildren) {
  const token = getToken();
  const { isExpired } = useJwt(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token != "") {
      navigate("/");
    }
  }, [token]);

  return children;
}

export default UnAUthRoute;
