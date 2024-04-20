import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/public/LoginPage";
import PageNotFound from "./pages/public/PageNotFound";
import store from "./core/store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./pages/protected/ProtectedRoute";
import UnAuthRoute from "./pages/public/UnAuthRoute";
import CategoryPage from "./pages/protected/admin/category/CategoryPage";
import DashBoardPage from "./pages/protected/DashBoardPage";
import UserPage from "./pages/protected/admin/user/UserPage";
import ProductPage from "./pages/protected/admin/product/ProductPage";
import AddSalePage from "./pages/protected/sale/AddSalePage";
import EditSalePage from "./pages/protected/sale/EditSalePage";
import SalePage from "./pages/protected/sale/SalePage";
import SaleDetailPage from "./pages/protected/sale/SaleDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
  },
  {
    path: "/login",
    element: (
      <UnAuthRoute>
        <Login />
      </UnAuthRoute>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute isAdmin={true}>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sale",
    element: <SalePage />,
  },
  {
    path: "/sale/:saleId",
    element: <SaleDetailPage />,
  },
  {
    path: "/sale/add",
    element: <AddSalePage />,
  },
  {
    path: "/sale/:saleId/edit",
    element: <EditSalePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
