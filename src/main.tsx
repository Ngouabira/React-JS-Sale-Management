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

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBboard/>,
    errorElement:<PageNotFound/>
  },
  {
    path: "/dashboard",
    element: <DashBboard/>,
  },
  {
    path: "/home",
    element: <DashBboard/>,
  },
  {
    path: "/login",
    element: <UnAUthRoute><LoginPage/></UnAUthRoute>,
  },
  {
    path: "/category",
    element: <CategoryPage/>,
  },
  {
    path: "/product",
    element: <ProductPage/>,
  },
  {
    path: "/sale",
    element: <SalePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
