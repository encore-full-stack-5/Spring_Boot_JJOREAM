import { Outlet } from "react-router-dom";
import ColorSchemesExample from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <header>
        <ColorSchemesExample />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
