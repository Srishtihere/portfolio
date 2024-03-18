interface SidebarType {
  id: number;
  name: string;
  svg: string;
  destination: string;
}

const SidebarNavs: SidebarType[] = [
  {
    id: 1,
    name: "Dashboard",
    destination: "",
    svg: `<svg
  width="30px"
  height="30px"
  fill="currentColor"
  viewBox="0 0 24 24"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  id="dashboard"
  className="icon glyph flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-white"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    <rect x="2" y="2" width="9" height="11" rx="2"></rect>
    <rect x="13" y="2" width="9" height="7" rx="2"></rect>
    <rect x="2" y="15" width="9" height="7" rx="2"></rect>
    <rect x="13" y="11" width="9" height="11" rx="2"></rect>
  </g>
</svg>`,
  },
  {
    id: 2,
    name: "Experience",
    svg: `<svg
        viewBox="-0.5 0 33 33"
        version="1.1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        fill="currentColor"
        className="icon glyph flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-white"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>user</title> <desc>Created with Sketch.</desc>{" "}
          <g
            id="icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g
              id="ui-gambling-website-lined-icnos-casinoshunter"
              transform="translate(-2554.000000, -285.000000)"
              fill="currentColor"
              fill-rule="nonzero"
            >
              {" "}
              <g id="1" transform="translate(1350.000000, 120.000000)">
                {" "}
                <path
                  d="M1220.5,165 C1225.74671,165 1230,169.253295 1230,174.5 C1230,178.085671 1228.01348,181.207366 1225.08096,182.824556 C1231.42682,184.947265 1236,190.939571 1236,198 L1236,198 L1204,198 C1204,190.700268 1208.88843,184.542291 1215.57023,182.621136 C1212.83014,180.95584 1211,177.941646 1211,174.5 C1211,169.253295 1215.25329,165 1220.5,165 Z"
                  id="user"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>`,
    destination: "Experience",
  },
  {
    id: 3,
    name: "Projects",
    svg: ` <svg
        width="30px"
        height="30px"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="icon glyph flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-white"
        version="1.1"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>code</title>{" "}
          <path d="M12 24h4v4h-12v-4h4v-4h4v4zM28 24v-4h-4v4h4zM4 16v4h4v-4h-4zM20 28h4v-4h-4v4zM24 12v4h4v-12h-4v4h-4v4h4zM20 16v-4h-4v-4h4v-4h-12v4h-4v4h4v4h4v4h4v4h4v-4h4v-4h-4z"></path>{" "}
        </g>
      </svg>`,
    destination: "Projects",
  },
  {
    id: 4,
    name: "Community",
    svg: `<svg
        viewBox="0 0 64 64"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        fill="currentColor"
        aria-hidden="true"
        className="icon glyph flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-white"
        version="1.1"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title></title>
          <path d="M36,22.74V21.10193a3.09593,3.09593,0,0,0-1.99084-2.88806,3,3,0,1,0-4.01832,0A3.09593,3.09593,0,0,0,28,21.10193V22.74a6.97916,6.97916,0,0,0,8,0Z"></path>
          <path d="M34.00916,50.21387a3,3,0,1,0-4.01832,0A3.09593,3.09593,0,0,0,28,53.10193V54.74a6.97916,6.97916,0,0,0,8,0V53.10193A3.09593,3.09593,0,0,0,34.00916,50.21387Z"></path>
          <path d="M20,38.74V37.10193a3.09593,3.09593,0,0,0-1.99084-2.88806,3,3,0,1,0-4.01832,0A3.09593,3.09593,0,0,0,12,37.10193V38.74a6.97916,6.97916,0,0,0,8,0Z"></path>
          <path d="M52,38.74V37.10193a3.09593,3.09593,0,0,0-1.99084-2.88806,3,3,0,1,0-4.01832,0A3.09593,3.09593,0,0,0,44,37.10193V38.74a6.97916,6.97916,0,0,0,8,0Z"></path>
          <path d="M32,63A30,30,0,1,0,2,33,30,30,0,0,0,32,63Zm0-6a9,9,0,1,1,9-9A9,9,0,0,1,32,57ZM48,23a9,9,0,1,1-9,9A9,9,0,0,1,48,23ZM32,7a9,9,0,1,1-9,9A9,9,0,0,1,32,7ZM7,32a9,9,0,1,1,9,9A9,9,0,0,1,7,32Z"></path>
        </g>
      </svg>`,
    destination: "Community",
  },
  {
    id: 5,
    name: "Blogs",
    svg: `<svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 452.986 452.986"
        width="30px"
        height="30px"
        fill="currentColor"
        aria-hidden="true"
        className="icon glyph flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-white"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <rect
                x="353.89"
                y="112.146"
                width="99.096"
                height="264.221"
              ></rect>{" "}
              <rect
                x="122.695"
                y="112.146"
                width="207.576"
                height="264.221"
              ></rect>{" "}
              <rect width="452.986" height="88.526"></rect>{" "}
              <rect y="399.965" width="452.986" height="53.021"></rect>{" "}
              <rect y="112.146" width="99.118" height="264.221"></rect>{" "}
            </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g>{" "}
          </g>{" "}
        </g>
      </svg>`,
    destination: "Blogs",
  },
];

export default SidebarNavs;
