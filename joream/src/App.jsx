import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Wishlist from "./pages/wishlist";
// import { Button, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Wishlist />
    </>
  );
}

export default App;

{
  /* <Button>Boot strap</Button> */
}
