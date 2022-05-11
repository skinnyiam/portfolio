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
    <div id="about" className="w-full flex flex-col">
      <h1 className="sm:text-2xl lg:text-4xl text-xl text-gray-50 font-semibold text-center p-0 sm:py-4">
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
                <h2 className="text-lg font-bold text-gray-200">
                  2020 - PRESENT
                </h2>
                <h6 className="">
                  {"→ "}Bachelors of Technology in Computer Science and
                  Information Technology
                </h6>
                <h6 className="">
                  {"→ "}Mahatma Jyotiba Phule Rohilkhand University
                </h6>
              </div>
              <div className="">
                <h2 className="text-lg font-bold text-gray-200">2015 - 2017</h2>
                <h6 className="">{"→ "}CGPA-9.2/10</h6>
                <h6 className="">Udai Academy (CBSE)-10th.</h6>
              </div>
              <div className="">
                <h2 className="text-lg font-bold text-gray-200">2017 - 2019</h2>
                <h6 className="">{"→ "}Percentage-87.6%</h6>
                <h6 className="">{"→ "}P.D Academy (CBSE)-12th.</h6>
              </div>
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
                <li className="text-red-500 font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  C++
                </li>
                <div className="h-6  w-11/12  bg-red-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-3/4   bg-red-500 border-solid rounded-lg"></div>
                </div>
                <li className="text-indigo-500 font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  React
                </li>
                <div className="h-6  w-11/12 bg-indigo-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/6   bg-indigo-500 border-solid rounded-lg"></div>
                </div>
                <li className="text-fuchsia-500 font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Node.js
                </li>
                <div className="h-6  w-11/12  bg-fuchsia-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-4/6   bg-fuchsia-500 border-solid rounded-lg"></div>
                </div>
                <li className="text-amber-500 font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  Javascript
                </li>
                <div className="h-6 w-11/12 bg-amber-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-3/4   bg-amber-500 border-solid rounded-lg"></div>
                </div>
                <li className="text-green-500 font-bold text-base sm:text-lg lg:text-xl p-0 mt-2">
                  MongoDB
                </li>
                <div className="h-6 w-11/12 bg-green-500/20  border-solid rounded-lg mb-2">
                  <div className="h-6  w-1/2   bg-green-500 border-solid rounded-lg"></div>
                </div>
              </ul>
            </div>
            <p className="text-lg my-2">
              {"→ "}I also do Competetive Programming to improve my problem
              solving skills
            </p>
            <p className="text-lg font-medium text-gray-50">
              Check out my ratings here:
            </p>
            <div className="">
              <button className="w-16 h-16">
                <a className="" href="https://www.codechef.com/users/skinny">
                  <img className="" src={CodechefLogo} alt="CodeChef" />
                </a>
              </button>
              <button className="w-14 h-14">
                <a className="" href="https://leetcode.com/saurabhshukla7878/">
                  <img className="" src={LeetcodeLogo} alt="CodeChef" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div data-aos="fade-right">
          <h1 className="text-green-400 font-bold sm:text-2xl lg:text-4xl text-xl">
            HOBBIES :
          </h1>
          <p className="text-lg sm:text-xl">
            <span>&#127928;</span> I play guitar.
          </p>
          <p className="text-lg sm:text-xl">
            <span>&#9823;</span> In the free time i play chess.
          </p>
          <p className="text-lg sm:text-xl">
            {"→ "}Check out my{" "}
            <a
              className=" decoration-green-400 decoration-2 underline underline-offset-4 font-bold hover:text-gray-400"
              href="https://www.chess.com/member/reactjsnodejs"
            >
              chess.com
            </a>{" "}
            Ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
