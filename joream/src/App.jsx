import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Pics from "./components/Pics";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div style={{ display: "flex" }}>
          <Pics style={{ flex: 1 }} />
          <ProductDetail style={{ flex: 1 }} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
