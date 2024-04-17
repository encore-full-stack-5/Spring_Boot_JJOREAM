import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
// import { Button, Navbar } from "react-bootstrap";

function App() {
  return <ProductList />;
  // return <NavBar />;
}

export default App;
