import { PropsWithChildren } from 'react'
import { getToken } from '../../utils/helper'
import { Navigate } from 'react-router-dom';

function UnAUthRoute({children}:PropsWithChildren) {
    const token = getToken();

    if (token!=null) {  
        return <Navigate to="/" replace/>
    }

  return children;
}

export default UnAUthRoute