import React from "react";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

const ProjBtn: React.FC<{ github: string; website: string }> = ({
  github,
  website,
}) => {
  return (
    <div className="flex">
      <a
        href={`${github}`}
        target="_blank"
        type="button"
        className="flex m-2 justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Github{" "}
        <IoArrowRedoCircleSharp
          size={20}
          className="ms-1 flex justify-center align-middle"
        />
      </a>
      <a
        href={`${website}`}
        type="button"
        target="_blank"
        className="flex m-2 justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Website{" "}
        <IoArrowRedoCircleSharp
          size={20}
          className="ms-1 flex justify-center align-middle"
        />
      </a>
    </div>
  );
};

export default ProjBtn;
