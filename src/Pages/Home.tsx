import LangData from "../assets/Language";
import srishtiPfp from "../assets/srishti.jpg";
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
      <div className="bg-slate-300 col-span-2 row-span-2">education</div>
      <div className="bg-slate-300 col-span-2">interests</div>
      <div className="bg-slate-300 col-span-2">lets chat</div>
      <div className="bg-slate-300 row-span-2">Tools</div>
      <div className="bg-slate-300">Experinece</div>
      <div className="bg-slate-300">Community</div>
      <div className="bg-slate-300">Blog</div>
      <div className="bg-slate-300">nothing</div>
      <div className="bg-slate-300 col-span-2">Proj</div>
    </div>
  );
};

export default Home;
