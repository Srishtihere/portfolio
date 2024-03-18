import { PlatfromsList } from "../../assets/Data/Skills";

const Platforms = () => {
  return (
    <div className="flex justify-center flex-col max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className=" mb-5 text-xl font-medium tracking-tight text-slate-950 dark:text-white">
        Tools/ Platforms
      </h5>
      <div className=" grid grid-cols-3 gap-1 w-full max-h-183 p-3 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4">
        {PlatfromsList.map((item) => (
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
      </div>
    </div>
  );
};

export default Platforms;
