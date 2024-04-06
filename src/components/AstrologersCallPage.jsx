import React from "react";
import { Link } from "react-router-dom";
import pandit from "../image/pandit on phone.webp";
import bg from "../image/bg1.jpg";

const AstrologersCallPage = () => {
  return (
    <div className="w-12/12 lg:pt-0 pt-20 relative">
      <img
        alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] brightness-50 fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      <div className="flex justify-center  h-screen lg:pt-28 items-center w-full  ">
        <div className=" flex flex-col  justify-center items-center w-full">
          <img alt="unfollow" className="lg:w-[400px] w-72" src={pandit}></img>
          <span className="text-lg lg:text-2xl text-purple-200 font-semibold tracking-wide pt-3 lg:pt-6 pb-2">
            Developer is working on it!
          </span>
          <Link to="/chat">
            {" "}
            <button className="tracking-wider cursor-pointer px-4 lg:px-6 font-medium text-sm lg:text-lg py-1 lg:py-1.5 transition-all  bg-purple-900 text-white border-2 hover:bg-transparent rounded-md uppercase  border-purple-900">
              Till you can Chat with them
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AstrologersCallPage;
