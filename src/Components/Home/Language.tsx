import LangData from "../../assets/Data/Language";
const Language = () => {
  return (
    <div className="flex justify-around flex-col  max-h-183 p-4 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700  col-span-2">
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
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-800 me-2">
                <div
                  className="bg-green-400 h-4 rounded dark:bg-green-700"
                  style={{ width: `${item.proficiency}%` }}
                ></div>
              </div>
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default Language;
