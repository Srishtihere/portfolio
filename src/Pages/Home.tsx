import { BsTwitterX } from "react-icons/bs";
import EducationList from "../assets/Education";
import interests from "../assets/Interests";
import LangData from "../assets/Language";
import srishtiPfp from "../assets/srishti.jpg";
import { FaBookmark, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
const Home = () => {
  return (
    <div className="grid md:grid-cols-4 md:grid-rows-5 grid-cols-2 gap-4">
      <div className="">
        <img
          className="rounded-lg shadow-xl dark:shadow-gray-800"
          src={srishtiPfp}
          alt="srishti's image"
        />
      </div>

      <div
        className="flex justify-between flex-col max-w-sm max-h-183 p-6  border border-gray-200 rounded-lg bg-gray-200
       dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <p className="font-medium text-gray-900 dark:text-white">Hi👋🏻, I`am</p>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Srishti Majumder
          </h5>
          <p className="font-medium text-gray-600 dark:text-gray-400">
            Front-end Developer
          </p>
        </div>
      </div>

      <div className="flex justify-around flex-col  max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-2">
        <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
          Language
        </h5>
        <div>
          {LangData.map((item) => (
            <dl className="flex w-full my-2" key={item.name}>
              <dt className="text-sm w-1/6 font-medium text-gray-900 dark:text-gray-400">
                {item.name}
              </dt>
              <dd className="flex w-5/6 items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div
                    className="bg-green-400 h-4 rounded dark:bg-blue-500"
                    style={{ width: `${item.proficiency}%` }}
                  ></div>
                </div>
              </dd>
            </dl>
          ))}
        </div>
      </div>
      <div className="flex justify-around flex-col  max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-2 row-span-2">
        <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
          Education
        </h5>
        <div className="grid grid-cols-2 gap-3 w-full">
          {EducationList.length &&
            EducationList.map((edu) => (
              <div
                className={`max-w-sm p-3 ${
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
                    className={`${
                      edu.active ? "text-white" : "text-slate-600"
                    }`}
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
      <div className="max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-2">
        <h5 className="mb-2 h-1/6 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
          Interests
        </h5>
        <div className="h-auto w-full flex flex-wrap justify-start">
          {interests.length &&
            interests.map((item) => (
              <span
                className="bg-white text-slate-950 text-xs font-medium m-1 p-2 rounded-full dark:bg-gray-700 dark:text-gray-300 flex justify-center align-middle"
                key={item}
              >
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="max-h-183 p-4 border border-gray-200 rounded-lg bg-slate-950 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-700 col-span-2">
        <h5 className="h-2/6 text-xl font-medium tracking-tight text-white dark:text-slate-900">
          Let's chat! I'm ready to work on exciting projects /freelance.
        </h5>
        <ul className="max-w-md h-3/6 text-sm  space-y-1 text-white list-none list-inside dark:text-gray-900">
          <li className="flex justify-start align-middle">
            <FaLinkedin
              color={"light"}
              size={"20"}
              className="flex justify-center align-middle me-2"
            />{" "}
            srishti-majumder
          </li>
          <li className="flex justify-start align-middle me-2">
            <BsTwitterX
              color={"light"}
              size={"20"}
              className="flex justify-center align-middle me-2"
            />{" "}
            @MajumderSrishti
          </li>
          <li className="flex justify-start align-middle me-2">
            <FaGithub
              color={"light"}
              size={"20"}
              className="flex justify-center align-middle me-2"
            />{" "}
            @Srishtihere
          </li>
          <li className="flex justify-start align-middle me-2">
            <FaMedium
              color={"light"}
              size={"20"}
              className="flex justify-center align-middle me-2"
            />{" "}
            @srishtimajumder2002
          </li>
        </ul>
        <div className="h-1/6 text-center text-sm font-semibold w-full text-white dark:text-slate-900">
          <span>srishtimajumder2002@gmail.com | (+91) 9088677074</span>
        </div>
      </div>
      <div className="flex justify-between flex-col max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 row-span-2">
        <h5 className="mb-2 h-1/6 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
          Tools/ Technology
        </h5>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"></div>
      </div>
      <div className="bg-slate-300">Experinece</div>
      <div className="bg-slate-300">Community</div>
      <div className="bg-slate-300">Blog</div>
      <div className="bg-slate-300">nothing</div>
      <div className="bg-slate-300 col-span-2">Proj</div>
    </div>
  );
};

export default Home;
