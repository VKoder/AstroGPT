import React from "react";
import { PROFILE_IMG } from "../utils/constants";

const TopAstroCard = ({ info }) => {
  return (
    <div className="lg:px-6 px-3 lg:py-4 py-2 lg:pb-8 pb-4 lg:mx-2 mx-1 lg:my-4 my-1 hover:scale-105 transition-all hover:bg-opacity-90 bg-purple-950 bg-opacity-55 rounded-2xl">
      <div className="lg:w-[150px] w-[100px]  flex-col flex justify-center items-center">
        <div className="w-10/12  h-full py-0.5 lg:py-2  flex flex-col justify-center  items-center">
          <div className="relative border-dotted p-1.5 border-2 rounded-full border-orange-600  justify-center items-center flex">
            <img
              className="lg:w-60 w-48 bg-yellow-600 bg-opacity-70 rounded-full xl:left-[2px] bottom-0"
              src={PROFILE_IMG + info?.picId}
              alt="profile"
            ></img>
          </div>
          <div>
            {info?.rating > 4.9 ? (
              <div>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-half-s-fill text-yellow-400"></i>
              </div>
            ) : (
              <div>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-s-fill text-yellow-400"></i>
                <i className="ri-star-half-s-fill text-yellow-400"></i>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-purple-100 text-xs lg:text-base font-medium tracking-wide uppercase">
            {info?.name}
          </span>
          <span className="text-purple-200 opacity-75 text-[9px] lg:text-xs tracking-wide">
            {" "}
            (
            {info?.skill.length > 20
              ? `${info?.skill.slice(0, 20)}...`
              : info?.skill}
            )
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopAstroCard;
