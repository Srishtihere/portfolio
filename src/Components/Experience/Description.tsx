import React from "react";
import { FaCircleRight } from "react-icons/fa6";

const Description: React.FC<{ description: string[] }> = ({ description }) => {
  return (
    <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      <h5 className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
        Key Insights:
      </h5>
      <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {description.map((i) => (
          <li className="flex ">
            <span className="mt-1">
              <FaCircleRight className="text-green-400" />
            </span>
            <span className="ms-2">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
