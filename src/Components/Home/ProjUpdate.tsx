import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProjUpdate = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between align-middle flex-col max-h-183 p-1 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-2">
      <div className="flex justify-between align-middle">
        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Ongoing
          </span>
          <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gita For Life
          </h5>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            An appliation for all Gita Lovers.
          </p>
          {/* <p className="font-normal text-sm italic text-green-400 dark:text-green-600">
            #socialmedia #connect #explore #share #comment #tag
          </p> */}
        </div>
        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Ongoing
          </span>
          <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Connectify
          </h5>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            A Social Media application for connecting with friends.
          </p>
          {/* <p className="font-normal italic text-sm text-green-400 dark:text-green-600">
            #socialmedia #connect #explore #share #comment #tag
          </p> */}
        </div>
      </div>

      <button
        type="button"
        className="flex justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-1"
        onClick={() => navigate("/Projects")}
      >
        See completed Projects{" "}
        <FaCircleArrowRight
          size={20}
          className="mx-3 flex justify-center align-middle"
        />
      </button>
    </div>
  );
};

export default ProjUpdate;
