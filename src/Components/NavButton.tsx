import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavButton: React.FC<{ BtnName: string; NavigateName: string }> = ({
  NavigateName,
  BtnName,
}) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="flex m-2 justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={() => navigate(`/${NavigateName}`)}
    >
      {BtnName}{" "}
      <FaCircleArrowRight
        size={20}
        className="mx-3 flex justify-center align-middle"
      />
    </button>
  );
};

export default NavButton;
