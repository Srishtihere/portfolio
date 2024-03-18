import srishtiPfp from "../../assets/srishti.jpg";

export const About = () => {
  return (
    <>
      <img
        className="rounded-lg shadow-xl dark:shadow-gray-800"
        src={srishtiPfp}
        alt="srishti's image"
      />

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
    </>
  );
};
