import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BlogUpdate = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between align-middle flex-col max-h-183 p-1 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mb-5 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Most Recent
        </span>
        <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          All about useReducer() in TypesScript
        </h5>
        <a
          href="https://medium.com/@srishtimajumder2002/all-about-usereducer-in-typesscript-e1851d98c93d"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
          target="_blank"
        >
          See here {">>>"}
        </a>
      </div>

      <button
        type="button"
        className="flex justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-1"
        onClick={() => navigate("/Blogs")}
      >
        Other Blogs{" "}
        <FaCircleArrowRight
          size={20}
          className="mx-3 flex justify-center align-middle"
        />
      </button>
    </div>
  );
};

export default BlogUpdate;
