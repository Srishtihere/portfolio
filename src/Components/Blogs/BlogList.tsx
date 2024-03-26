import { FaCircleArrowRight } from "react-icons/fa6";
import BlogsList from "../../assets/Data/Blogs";
import SkillUsed from "../Experience/skillUsed";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {BlogsList.length &&
        BlogsList.map((item) => (
          <div
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.id}
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </a>
            <SkillUsed skills={item.tags} />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <a
              href={`${item.sourceLink}`}
              target="_blank"
              type="button"
              className="flex m-2 justify-center align-middle text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Read Here{" "}
              <FaCircleArrowRight
                size={20}
                className="mx-3 flex justify-center align-middle"
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
