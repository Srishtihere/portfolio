import EducationList from "../../assets/Data/Education";
import { FaBookmark } from "react-icons/fa";
const Eduaction = () => {
  return (
    <div className="flex justify-around flex-col max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-2 row-span-2 ">
      <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
        Education
      </h5>
      <div className="grid grid-cols-2 gap-3 w-full">
        {EducationList.length &&
          EducationList.map((edu) => (
            <div
              className={`max-w-sm p-3 md:col-span-1 col-span-2 ${
                edu.active ? "bg-green-400" : "bg-white"
              }   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
              key={edu.courseName}
            >
              <div className="flex justify-between">
                <h6
                  className={`mb-2 text-lg font-medium tracking-tight ${
                    edu.active ? "text-white" : "text-green-700"
                  }  dark:text-white`}
                >
                  {edu.year}
                </h6>
                <div>{edu.active && <FaBookmark color={"yellow"} />}</div>
              </div>

              <h6
                className={`mb-2 text-lg font-semibold tracking-tight ${
                  edu.active ? "text-white" : "text-gray-900"
                }  dark:text-white`}
              >
                {edu.courseName}{" "}
                <span
                  className={`${edu.active ? "text-white" : "text-slate-600"}`}
                >
                  {edu.specialization}
                </span>
              </h6>
              <p
                className={`mb-3 font-normal ${
                  edu.active ? "text-white" : "text-slate-500"
                } dark:text-gray-400`}
              >
                {edu.school}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Eduaction;
