import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ProductList from "./pages/ProductList.jsx";
import Layout from "./pages/Layout.jsx";
import Signin from "./pages/Signin.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Shop", element: <ProductList /> },
      { path: "/Shop", element: <ProductList /> },
      { path: "/Shop", element: <ProductList /> },
      { path: "/Login", element: <Login /> },
      { path: "/Signin", element: <Signin /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RecoilRoot>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </RecoilRoot>
);
