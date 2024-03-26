import { useNavigate } from "react-router-dom";
import SidebarNavs from "../assets/Data/SidebarData";
import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import logo from "../assets/logo.png";

import { FaDownload } from "react-icons/fa6";
import ThemeToggler from "./ThemeToggler";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const closeSidebar = () => {
    document.body.style.overflow = "";
    document.body.classList.remove("overflow-hidden");
    const sidebar = document.getElementById("defaultSidebar");
    sidebar?.removeAttribute("aria-modal");
    sidebar?.removeAttribute("role");
    sidebar?.classList.remove("transform-none");
    sidebar?.setAttribute("aria-hidden", "true");
  };

  const openSidebar = () => {
    document.body.style.overflow = "hidden";
    const sidebar = document.getElementById("defaultSidebar");
    sidebar?.setAttribute("aria-modal", "true");
    sidebar?.setAttribute("role", "dialog");
    sidebar?.classList.add("transform-none");
    sidebar?.removeAttribute("aria-hidden");
  };
  return (
    <>
      <button
        onClick={openSidebar}
        data-drawer-target="defaultSidebar"
        data-drawer-toggle="defaultSidebar"
        aria-controls="defaultSidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="defaultSidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex h-auto justify-between align-middle items-center rounded-lg ">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="flex flex-col items-center ps-2.5 mb-5"
            >
              <img src={logo} className="w-20 h-20 rounded-full" />
              <span className="self-center hover:text-green-400 text-xl font-semibold whitespace-nowrap dark:text-white dark:hover:text-green-400">
                Srishti Majumder
              </span>
            </a>
            <LuPanelLeftClose
              onClick={closeSidebar}
              size={30}
              className="text-slate-400 hover:text-slate-950 sm:hidden"
            />
          </div>

          <div className="flex h-[77%] flex-col justify-between">
            <ul className="space-y-2 font-medium">
              {SidebarNavs.length &&
                SidebarNavs.map((item) => (
                  <li
                    onClick={() => {
                      navigate(`/${item.destination}`);
                    }}
                    key={item.id}
                  >
                    <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group group-hover:text-green-400">
                      <div
                        className="text-gray-900 rounded-lg dark:text-white hover:text-green-400 dark:hover:bg-gray-700 group-hover:text-green-400"
                        dangerouslySetInnerHTML={{ __html: item.svg }}
                      />
                      <span className="ms-3 group-hover:text-green-400">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>

            <div className="flex flex-col justify-center align-middle">
              <ThemeToggler />

              <a
                type="button"
                className="flex mt-2 justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                href="https://drive.google.com/file/d/1iqodeYs49Zycth3-XE1oTvraS1PaEktU/view?usp=sharing"
                target="_blank"
                download
              >
                Download Resume{" "}
                <FaDownload
                  size={20}
                  className="mx-3 flex justify-center align-middle"
                />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
