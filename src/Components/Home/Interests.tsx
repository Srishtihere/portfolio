import interests from "../../assets/Data/Interests";
const Interests = () => {
  return (
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
  );
};

export default Interests;
