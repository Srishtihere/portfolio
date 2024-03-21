import ProjectData from "../../assets/Data/Projects";
import ProjBtn from "./ProjBtn";

const ProjList = () => {
  return (
    <div className="w-full">
      {ProjectData.length &&
        ProjectData.map((item) => (
          <div
            className="w-full my-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800"
            key={item.id}
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={`${item.imageURL}`}
              alt="my name"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <ProjBtn github={`${item.github}`} website={`${item.Website}`} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjList;
