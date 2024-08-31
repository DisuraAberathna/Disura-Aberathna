"use client";

import React, { useEffect, useState } from "react";
import { HiDotsVertical, HiMoon, HiSun } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BsDownload } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    url: string;
  }[];
}) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [logo, setLogo] = useState("/logo-dark.webp");

  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    sessionStorage.setItem("theme", theme);
    if (theme === "dark") {
      document
        .getElementById("theme-toggle-dark-icon")
        ?.classList.add("hidden");
      document
        .getElementById("theme-toggle-light-icon")
        ?.classList.remove("hidden");
      setLogo("/logo.webp");
    } else {
      document
        .getElementById("theme-toggle-light-icon")
        ?.classList.add("hidden");
      document
        .getElementById("theme-toggle-dark-icon")
        ?.classList.remove("hidden");
      setLogo("/logo-dark.webp");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const successNotify = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 5000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing...",
      success: "Email successfully send",
    });
  };

  const errorNotify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const downloadCV = () => {
    errorNotify("This function not working yet!");
  };

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <img src={logo} alt="logo dark" className="w-36 md:w-48" />
        </Link>
        <div className="flex md:order-2 space-x-3">
          <button
            id="theme-toggle"
            type="button"
            className="inline-flex items-center p-2 md:w-10 md:h-10 justify-center text-lg text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleTheme}
          >
            <HiSun id="theme-toggle-light-icon" className="hidden" />
            <HiMoon id="theme-toggle-dark-icon" />
          </button>
          <button
            type="button"
            className="hidden md:flex text-white items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-4 px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={downloadCV}
          >
            Download CV <BsDownload className="text-lg" />
          </button>
          <button
            className="inline-flex items-center p-2 justify-center text-lg text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            {mobileNav ? <CgClose /> : <HiDotsVertical />}
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((navItem, idx) => {
              return (
                <li key={idx}>
                  <Link
                    href={navItem.url}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {navItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <nav
        className={`${
          mobileNav
            ? "max-h-max pt-4 pb-8 px-4 md:py-0 md:px-0 md:h-0"
            : "max-h-0"
        } flex flex-col w-full bg-white dark:bg-gray-900 gap-y-6 overflow-hidden font-bold justify-center transition-all duration-150`}
      >
        <ul className="flex flex-col font-medium bg-transparent space-y-4">
          {navItems.map((navItem, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={navItem.url}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="text-white bg-blue-700 flex items-center gap-2 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm md:px-4 px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={downloadCV}
            >
              Download CV <BsDownload className="text-lg" />
            </button>
          </li>
        </ul>
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </header>
  );
};

export default Navbar;
