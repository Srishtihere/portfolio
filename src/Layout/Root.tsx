import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
