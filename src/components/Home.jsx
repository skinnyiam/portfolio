import React from "react";

import Logo from "../asset/portrait.png";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen  w-full flex flex-col-reverse sm:flex-row  "
    >
      <div className="mx-w-[1000px] sm:mt-[0px] mt-[0px] sm:mx-auto m-10 flex flex-col  justify-center h-full">
        <p className=" sm:text-2xl text-[35px]    text-red-500 font-bold">
          Hii,my name is
        </p>
        <h1 className="sm:text-6xl text-6xl   text-stone-100">
          Saurabh Shukla
        </h1>
        <h2 className="sm:text-3xl text-xl  text-orange-200 ">
          I am a front-end developer
        </h2>
        <p className="sm:text-2xl text-[14px]  text-emerald-500">
          I am a web developer specializing in building websites. <br />I am
          also learning data structures and algorithms. Wanna talk about tech ?
          Let's CONNECT.
        </p>
      </div>
      <div className="">
        <img
          className="mt-[60px] sm:mr-[55px] sm:ml-[0px] ml-[80px] rounded-full sm:w-[450px] w-[170px] "
          src={Logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
