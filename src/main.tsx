import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBboard from './pages/protected/DashBboard';
import LoginPage from './pages/public/LoginPage';
import CategoryPage from './pages/protected/admin/category/CategoryPage';
import ProductPage from './pages/protected/admin/product/ProductPage';
import SalePage from './pages/protected/sale/SalePage';
import PageNotFound from './pages/public/PageNotFound';
import UnAUthRoute from './pages/public/UnAUthRoute';
import ProtectedRoute from './pages/protected/ProtectedRoute';
import UserPage from './pages/protected/admin/user/UserPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><DashBboard/></ProtectedRoute>,
    errorElement:<PageNotFound/>
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><DashBboard/></ProtectedRoute>,
  },
  {
    path: "/home",
    element: <ProtectedRoute><DashBboard/></ProtectedRoute>,
  },
  {
    path: "/login",
    element: <UnAUthRoute><LoginPage/></UnAUthRoute>,
  },
  {
    path: "/category",
    element: <ProtectedRoute isAdmin={true}> <CategoryPage/></ProtectedRoute>,
  },
  {
    path: "/product",
    element: <ProtectedRoute isAdmin={true}><ProductPage/></ProtectedRoute>,
  },
  {
    path: "/user",
    element: <ProtectedRoute isAdmin={true}><UserPage/></ProtectedRoute>,
  },
  {
    path: "/sale",
      element: <ProtectedRoute><SalePage/></ProtectedRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
