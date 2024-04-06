import React from "react";
import pandit from "../image/pandit hand checking.png";
import cors from "../image/Cors (1).png";
import cors2 from "../image/Cors (2).png";


import bg from "../image/bg1.jpg";

const Error = () => {
  return (
    <div className="w-12/12 lg:pt-0 py-20 relative">
      <img
        alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] brightness-50 fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      <div className="flex justify-center lg:flex-row flex-col lg:pt-28 items-center w-full h-full ">
        <div className=" flex flex-col lg:w-4/12  justify-center items-center w-full">
          <img alt="unfollow" className="lg:w-[500px] w-72" src={pandit}></img>
          <span className="text-lg lg:text-2xl flex flex-col justify-center items-center text-red-600 font-semibold tracking-wide pt-3 lg:pt-6 pb-2">
            Sorry! Failed to fetch 
 <a className="text-sm underline lg:text-base text-blue-600" rel="" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Know why?</a>

          </span>
          
        </div>
        <div className=" flex flex-col lg:w-7/12  justify-center items-center w-full">
          <img alt="unfollow" className="lg:w-[400px] rounded-lg w-72" src={cors}></img>
          <span className="text-lg lg:text-2xl text-purple-300 font-semibold tracking-wide pt-3 lg:pt-6 pb-2">
           Please download this extension <a className="text-base underline lg:text-lg text-blue-600" rel="" target="_blank" href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">cors</a>
          </span>
          <img alt="unfollow" className="lg:w-[500px] pt-3 lg:pt-6 rounded-sm w-72" src={cors2}></img>

        </div>
      </div>
    </div>
  );
};

export default Error;
