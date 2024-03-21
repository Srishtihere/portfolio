import NavButton from "../NavButton";

const ExpUpdate = () => {
  return (
    <div className="flex justify-between align-middle flex-col max-h-183 p-1 border border-gray-200 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mb-5 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Most Recent
        </span>
        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Digital Product School
        </h5>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          Software Engineer
        </p>
        <p className="font-semibold italic text-gray-800 dark:text-gray-600">
          Sept 2023 - Dec 2023
        </p>
      </div>
      <NavButton BtnName="Past Experience" NavigateName="experience" />
    </div>
  );
};

export default ExpUpdate;
