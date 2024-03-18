import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 rounded-lg shadow dark:bg-slate-600 mt-4 ">
      <div className="w-full max-w-screen-xl mx-auto md:py-1 text-center">
        <span className="block text-sm text-white sm:text-center dark:text-slate-900">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Srishti Majumder™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
