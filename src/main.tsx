import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBboard from '@pages/protected/DashBoard';
import LoginPage from '@pages/public/LoginPage';
import CategoryPage from '@pages/protected/admin/category/CategoryPage';
import ProductPage from '@pages/protected/admin/product/ProductPage';
import SalePage from '@pages/protected/sale/SalePage';
import PageNotFound from '@pages/public/PageNotFound';
import UnAUthRoute from '@pages/public/UnAUthRoute';
import ProtectedRoute from '@pages/protected/ProtectedRoute';
import UserPage from '@pages/protected/admin/user/UserPage';
import ProtectedAdminRoute from '@pages/protected/admin/ProtectedAdminRoute';
import AddCategory from '@pages/protected/admin/category/AddCategory';
import EditCategory from '@pages/protected/admin/category/EditCategory';

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
    element: <ProtectedAdminRoute> <CategoryPage/></ProtectedAdminRoute>,
  },
  {
    path: "/category/add",
    element: <ProtectedAdminRoute> <AddCategory/></ProtectedAdminRoute>,
  },
  {
    path: "/category/edit/:id",
    element: <ProtectedAdminRoute> <EditCategory/></ProtectedAdminRoute>,
  },
  {
    path: "/product",
    element: <ProtectedAdminRoute><ProductPage/></ProtectedAdminRoute>,
  },
  {
    path: "/user",
    element: <ProtectedAdminRoute><UserPage/></ProtectedAdminRoute>,
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
