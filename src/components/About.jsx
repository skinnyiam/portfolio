import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CodechefLogo from "../asset/codechef.png";
import LeetcodeLogo from "../asset/leetcode.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="about" className="max-w-[1400px] mx-auto flex flex-col h-auto">
      <h1 className="sm:text-2xl lg:text-4xl text-xl dark:text-white text-black font-semibold text-center p-0 sm:py-4">
        ABOUT ME
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/2">
          <div
            className="px-4 sm:px-16 py-4 w-full flex flex-col items-center"
            data-aos="fade-right"
          >
            <div>
              <h3 className="font-bold text-green-400 sm:text-2xl lg:text-4xl text-xl mb-2">
                EDUCATION :
              </h3>
              <div className="">
                <h2 className="text-2xl font-bold dark:text-gray-300 text-gray-700">
                  2020 - PRESENT
                </h2>
                <h6 className="mt-2 ">
                  {"→ "}Bachelors of Technology in Computer Science and
                  Information Technology
                </h6>
                <h6 className="">
                  {"→ "}Mahatma Jyotiba Phule Rohilkhand University
                </h6>
              </div>
              <div className="mt-2">
                <h2 className="text-2xl  dark:text-gray-300 text-gray-700">
                  2015 - 2017
                </h2>
                <h6 className="mt-2 ">{"→ "}CGPA-9.2/10</h6>
                <h6 className="">Udai Academy (CBSE)-10th.</h6>
              </div>
              <div className="mt-2">
                <h2 className="text-2xl  dark:text-gray-300 text-gray-700">
                  2017 - 2019
                </h2>
                <h6 className="mt-2 ">{"→ "}Percentage-87.6%</h6>
                <h6 className="">{"→ "}P.D Academy (CBSE)-12th.</h6>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full flex justify-center ">
            <div className="ml-4 sm:ml-[0] mr-[-10px] sm:mr-[240px] mt-4" data-aos="fade-right">
              <h1 className="dark:text-green-400 text-green-600 font-bold sm:text-2xl lg:text-4xl text-xl">
                HOBBIES :
              </h1>
              <p className="text-lg sm:text-xl ">
                <span>&#127928;</span> I play guitar.
              </p>
              <p className="text-lg sm:text-xl ">
                <span>&#9823;</span> In the free time i play chess.
              </p>
              <p className="text-lg sm:text-xl ">
                {"→ "}Check out my{" "}
                <a
                  className=" decoration-green-00 decoration-2 underline underline-offset-4 font-bold hover:text-gray-400"
                  href="https://www.chess.com/member/reactjsnodejs"
                >
                  chess.com
                </a>{" "}
                Ratings
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:m-0">
          <div
            className="w-full flex flex-col px-4 sm:px-16 py-4"
            data-aos="fade-right"
          >
            <h3 className="text-green-400 font-bold sm:text-2xl lg:text-4xl text-xl">
              TECH STACK/SKILLS :
            </h3>
            <div className="">
              <ul className="flex flex-col items-start">
               
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  React-Js
                </li>
                <div className="h-6  w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-6/6   bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">100%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Next-Js
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-11/12    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">80%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Node-js
                </li>
                <div className="h-6  w-11/12  bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/6   bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center"> 65%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Javascript
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/5   bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">70%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Express-Js
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/5    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">70%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  MongoDB
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-3/5    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">60%</div>
                </div>
                
                
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Firebase
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-6/9    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">100%</div>
                </div>
                
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Git & Github
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/5    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">70%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  POSTMAN
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/5    bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">70%</div>
                </div>
                <li className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  C++
                </li>
                <div className="h-6  w-11/12  bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/4   bg-green-500 border-solid rounded-lg text-black text-lg font-bold text-center">100%</div>
                </div>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
