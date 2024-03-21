import NavButton from "../NavButton";

const ComUpdate = () => {
  return (
    <div className="flex justify-between align-middle flex-col max-h-183 p-1 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className="bg-green-100 text-green-800 text-xs font-medium mb-5 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Active
        </span>
        <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Google Developer Groups{" "}
          <span className="text-slate-500 font-semibold"> - Siliguri</span>
        </h5>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          Organizer
        </p>
        <p className="font-semibold italic text-gray-800 dark:text-gray-600">
          Oct 2022 - Active
        </p>
      </div>

      <NavButton BtnName="Other Communities" NavigateName="Community" />
    </div>
  );
};

export default ComUpdate;
