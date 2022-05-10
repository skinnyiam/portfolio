import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);
  return (
    <div className="fixed w-full  h-[70px] z-10 flex justify-between items-center px-4 bg-black text-gray-50 ">
      {/* menu */}
      <div className="fixed flex justify-center">
        <h1 className=" animate-pulse text-2xl text-orange-200  ">
          SaurabhShukla..
        </h1>
      </div>
{/* 
      <ul className=" hidden  md:flex "> */}
        {/* <li>Home</li>
        <li>About</li>
        <li>Projects</li> */}
        {/* <li>Contact</li> */}
      {/* </ul> */}

      {/* icon */}
      {/* <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
          </svg>
        )}
      </div> */}

      {/* mobile menu view  */}

      {/* <ul
        className={
          !nav
            ? "hidden"
            : " top-0 left-0 w-full  h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-10 text-4xl">About me</li>
        <li className="py-10 text-4xl">Projects</li>

        <li className="py-10 text-4xl">Home</li>
      </ul> */}

      {/* social icons  */}
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
