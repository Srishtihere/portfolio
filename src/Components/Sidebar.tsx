import { useNavigate } from "react-router-dom";
import SidebarNavs from "../assets/Data/SidebarData";
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    document.body.style.overflow = "";
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
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* <aside id="defaultSidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 transform-none" aria-label="Sidebar" aria-modal="true" role="dialog"> */}

      {/* transform-none aria-modal="true" role="dialog" body oerflow hidden*/}

      <aside
        id="defaultSidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center ps-2.5 mb-5"
            >
              <span className="self-center hover:text-green-400 text-xl font-semibold whitespace-nowrap dark:text-white">
                Srishti Majumder
              </span>
            </a>
            <IoCloseCircleSharp
              onClick={closeSidebar}
              size={30}
              className="text-green-400 hover:text-green-700 sm:hidden"
            />
          </div>

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
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
