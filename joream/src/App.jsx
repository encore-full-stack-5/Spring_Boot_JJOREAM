import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Login from "./pages/Login";
// import { Button, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Login />
    </>
  );
}

export default App;

{
  /* <Button>Boot strap</Button> */
}
