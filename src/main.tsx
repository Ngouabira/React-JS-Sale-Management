import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/public/Login";
import DashBoard from "./pages/protected/DashBoard";
import Sale from "./pages/protected/sale/Sale";
import User from "./pages/protected/admin/user/User";
import Category from "./pages/protected/admin/category/Category";
import Product from "./pages/protected/admin/product/Product";
import PageNotFound from "./pages/public/PageNotFound";
import EditSale from "./pages/protected/sale/EditSale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/sale",
    element: <Sale />,
    children:[
      {
        path: "/sale/:saleId",
        element: <Sale />,
      },
      {
        path: "/sale/:saleId/edit",
        element: <EditSale />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
