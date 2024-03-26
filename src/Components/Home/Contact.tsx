import { BsTwitterX } from "react-icons/bs";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="max-h-183 p-4 border border-gray-200 rounded-lg bg-slate-950 dark:bg-white dark:border-gray-700  col-span-2">
      <h5 className="h-2/6 text-xl font-medium tracking-tight text-white dark:text-slate-900">
        Let's chat! I'm ready to work on exciting projects /freelance.
      </h5>
      <ul className="max-w-md h-3/6 text-sm  space-y-1 text-white list-none list-inside dark:text-gray-900">
        <li className="flex justify-start align-middle">
          <FaLinkedin
            color={"light"}
            size={"20"}
            className="flex justify-center align-middle me-2"
          />{" "}
          srishti-majumder
        </li>
        <li className="flex justify-start align-middle me-2">
          <BsTwitterX
            color={"light"}
            size={"20"}
            className="flex justify-center align-middle me-2"
          />{" "}
          @MajumderSrishti
        </li>
        <li className="flex justify-start align-middle me-2">
          <FaGithub
            color={"light"}
            size={"20"}
            className="flex justify-center align-middle me-2"
          />{" "}
          @Srishtihere
        </li>
        <li className="flex justify-start align-middle me-2">
          <FaMedium
            color={"light"}
            size={"20"}
            className="flex justify-center align-middle me-2"
          />{" "}
          @srishtimajumder2002
        </li>
      </ul>
      <div className="h-1/6 flex justify-center align-middle text-center text-sm font-semibold w-full text-white dark:text-slate-900">
        <span className="mt-2">
          srishtimajumder2002@gmail.com | +91 9088677074
        </span>
      </div>
    </div>
  );
};

export default Contact;
