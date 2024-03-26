import { FaCircleRight } from "react-icons/fa6";
import CommunityList from "../../assets/Data/Communities";

const ComList = () => {
  return (
    <>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {CommunityList.length &&
          CommunityList.map((item) => (
            <div
              className="flex flex-col items-center justify-between p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.position}
                </h3>
                <time className="mb-1 text-md font-normal leading-none text-green-400 dark:text-green-500">
                  {item.Duration}
                </time>
                <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  {item.duties.length &&
                    item.duties.map((i) => (
                      <li className="flex" key={i}>
                        <span className="mt-1">
                          <FaCircleRight className="text-green-400" />
                        </span>
                        <span className="ms-2">{i}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="rounded-lg w-9 h-9"
                  src={`${item.logo}`}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>{item.communityName}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    {item.communityRegion}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ComList;
