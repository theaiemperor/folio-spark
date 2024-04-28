import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
