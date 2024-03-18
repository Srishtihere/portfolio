import ExperienceData from "../../assets/Data/Experience";
import SkillUsed from "./skillUsed";
import Description from "./Description";

const MainList = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {ExperienceData.length &&
        ExperienceData.map((item) => (
          <li className="mb-10 ms-4" key={item.id}>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-green-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.Company_name}
            </h2>
            <p className="mb-2 font-normal text-teal-600 dark:text-slate-950">
              {item.Role}
            </p>
            <SkillUsed skills={item.skills} />
            <Description description={item.description} />
          </li>
        ))}
    </ol>
  );
};

export default MainList;
