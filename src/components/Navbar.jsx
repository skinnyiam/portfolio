import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="fixed w-full px-2 py-4 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent flex items-center">
        <a href="#home" className="">
          <h1 className="text-2xl sm:text-4xl text-gray-200 font-bold">
            <span className="text-green-400">S</span>AURABH{" "}
            <span className="text-green-400">S</span>HUKLA
          </h1>
        </a>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-blue-600 pl-4">
            <a
              className="flex justify-between items-center w-full text-white font-extrabold"
              href="http://www.linkedin.com/in/saurabh-shukla-885a711b3"
            >
              Linkedin
            </a>
            <div className="flex pl-6">
              <FaLinkedin style={{ height: "30px", width: "30px" }} />
            </div>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-green-700 pl-[15px]">
            <a
              className="flex justify-between items-center w-full text-black font-extrabold"
              href="https://github.com/skinnyiam"
            >
              Github
            </a>
            <div className="flex pl-11">
              <FaGithub style={{ height: "30px", width: "30px" }} />
            </div>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-white pl-4">
            <a
              className="flex justify-between items-center w-full text-black font-extrabold"
              href="/"
            >
              Resume
            </a>
            <div className="flex pl-9">
              {/* <FaLinkedin style={{height:"30px",width:"30px"}}  /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  d="M1,20 L6,20 L6,4 L1,4 L1,20 Z M11,19.0000002 L22,12 L11,5 L11,19.0000002 Z"
                ></path>
              </svg>
            </div>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-amber-400 pl-[15px]">
            <a
              className="flex justify-between items-center w-full text-black font-extrabold"
              href="https://leetcode.com/saurabhshukla7878/"
            >
              Leetcode
            </a>
            <div className="flex pl-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
