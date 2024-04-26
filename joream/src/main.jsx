import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ProductList from "./pages/ProductList.jsx";
import Layout from "./pages/Layout.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import BuyList from "./pages/BuyList.jsx";
import SellList from "./pages/SellList.jsx";
import Signin from "./pages/Signin.jsx";
import Login from "./pages/Login.jsx";
import MyPage from "./pages/MyPage.jsx";
import Point from "./pages/Point.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/shop", element: <ProductList /> },
      { path: "/detail/:id", element: <ProductDetail /> },
      { path: "/like", element: <Wishlist /> },
      { path: "/buylist", element: <BuyList /> },
      { path: "/selllist", element: <SellList /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signin /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/point", element: <Point /> },
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
