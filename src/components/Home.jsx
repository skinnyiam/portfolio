import React from "react";

import Logo from "../asset/portrait.png";

const Home = () => {
  return (
    <div
      id="home"
      className="sm:h-screen w-full flex flex-col sm:flex-row-reverse text-gray-700 dark:text-gray-200 items-center justify-between"
    >
      <div className="flex justify-center sm:w-1/2">
        <img
          className="mt-16 sm:m-0 w-64 h-64 sm:w-[30vw] sm:h-[30vw] rounded-full"
          src={Logo}
          alt=""
        />
      </div>
      <div className="flex flex-col px-4 sm:px-16 py-8 sm:w-1/2 items-center">
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg lg:text-xl ">
            <span>&#128075;</span>Hi, I'm
          </p>
          <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl">
            SAURABH SHUKLA
          </h1>
          <h2 className=" dark:text-gray-300 text-gray-700 text-sm sm:text-lg lg:text-xl">
            {"→ "}I am a front-end developer
          </h2>
          <p className="dark:text-gray-300 text-gray-700 text-sm sm:text-lg lg:text-xl">
            {"→ "}I am also learning data structures and algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
