import SkillCard from "./SkillCard";
import { Lib, ProgLang } from "../../assets/Data/Skills";

const Skills = () => {
  return (
    <div className="flex justify-evenly flex-col max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 row-span-2 ">
      <h5 className="text-xl font-medium tracking-tight text-slate-950 dark:text-white">
        Skills/ Technology
      </h5>
      <SkillCard title="Prog Language">
        {ProgLang.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center align-middle text-center"
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="text-sm flex justify-center align-middle"
            />
            <span className="text-xs font-semibold">{item.name}</span>
          </div>
        ))}
      </SkillCard>
      <SkillCard title="Libraries">
        {Lib.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center align-middle text-center"
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="text-sm flex justify-center align-middle"
            />
            <span className="text-xs font-semibold">{item.name}</span>
          </div>
        ))}
      </SkillCard>
    </div>
  );
};

export default Skills;
