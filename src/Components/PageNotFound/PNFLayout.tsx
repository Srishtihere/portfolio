import Footer from "../Footer";
import Sidebar from "../Sidebar";
import PNFpage from "./PNFpage";

const PNFLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <PNFpage />
        <Footer />
      </div>
    </>
  );
};

export default PNFLayout;
