import NavButton from "../NavButton";

const ProjUpdate = () => {
  return (
    <div className="flex justify-between align-middle flex-col max-h-183 p-1 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-700 dark:border-gray-700  col-span-2">
      <div className="flex justify-between align-middle">
        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Ongoing
          </span>
          <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gita For Life
          </h5>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            An appliation for all Gita Lovers.
          </p>
          {/* <p className="font-normal text-sm italic text-green-400 dark:text-green-600">
            #socialmedia #connect #explore #share #comment #tag
          </p> */}
        </div>
        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Ongoing
          </span>
          <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Connectify
          </h5>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            A Social Media application for connecting with friends.
          </p>
          {/* <p className="font-normal italic text-sm text-green-400 dark:text-green-600">
            #socialmedia #connect #explore #share #comment #tag
          </p> */}
        </div>
      </div>

      <NavButton BtnName="see completed Projects" NavigateName="Projects" />
    </div>
  );
};

export default ProjUpdate;
