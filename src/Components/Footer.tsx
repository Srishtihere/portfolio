import { useNavigate } from "react-router-dom";
import SidebarNavs from "../assets/Data/SidebarData";
import logo from "../assets/logo.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-950 rounded-lg shadow  mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.linkedin.com/in/srishti-majumder/"
            className="flex text-white items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="w-20 h-20 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              Srishti Majumder
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {SidebarNavs.length &&
              SidebarNavs.map((item) => (
                <li key={item.id}>
                  <a
                    href=""
                    onClick={() => navigate(`/${item.destination}`)}
                    className="hover:underline text-white me-4 md:me-6"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-green-300 sm:text-center dark:text-green-400">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/srishti-majumder/"
            className="hover:underline"
          >
            Srishti Majumder™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
