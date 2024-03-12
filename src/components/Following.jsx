import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_IMG } from "../utils/constants";
import { clearFollow, removeFollow } from "../store/followSlice";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const Following = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.follow.follow);
  const Bot = useSelector(store => store.configApp.Bot)


  const handleUnfollow = () => {
    dispatch(clearFollow());
  };
  const handleClear = () =>{
    dispatch(clearFollow())
  }

  return (
    <div className="relative h-screen  w-12/12">
{ Bot && <Chatbot/>}
      <img
        alt="bg"
        className="h-screen brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
      {data.length === 0 && 
        <div className="flex justify-center pt-20 items-center w-full h-full ">
            <div className=" flex flex-col  justify-center items-center w-full">
                <img alt="unfollow" className="lg:w-[400px] w-72" src='https://cdni.iconscout.com/illustration/premium/thumb/male-pandit-working-on-laptop-2775580-2319301.png'></img>
                <span className="text-lg lg:text-2xl text-purple-200 font-semibold tracking-wide pt-3 lg:pt-6 pb-2">You are not following anyone!</span>
               <Link to="/chat"> <button className="tracking-wider cursor-pointer px-4 lg:px-6 font-medium text-sm lg:text-lg py-1 lg:py-1.5 transition-all  bg-purple-900 text-white border-2 hover:bg-transparent rounded-md uppercase  border-purple-900  ">Explore Astrologers</button></Link>
            </div>
      </div>
      }
      {data.length > 0  && (
        <>
            <div className="flex lg:px-20 px-4 justify-between lg:gap-20 h-screen flex-col lg:flex-row  items-center">
            <div className="lg:w-6/12 w-full md:flex hidden  justify-center lg:justify-start items-center">
                <img className="lg:w-full w-72"  src="https://cdni.iconscout.com/illustration/premium/thumb/male-pandit-showing-mobile-2775575-2319298.png" alt="follow"></img>
            </div>

          <div className="lg:w-6/12 w-full flex bg-purple-950 bg-opacity-70 h-[80vh] lg:h-[80vh] mt-20 lg:mt-20  pt-4 rounded-xl flex-col  justify-start items-start">
            <div className="w-full px-5 flex justify-between items-center pb-4">
              <span className="lg:text-2xl text-lg font-semibold tracking-wider lg:tracking-wide uppercase  text-purple-200">Following</span>
                <button className="lg:px-3 px-2 py-1.5 rounded-lg bg-purple-700 lg:text-base text-sm text-zinc-100 " onClick={handleClear}>Clear Follow</button>
            </div>
            <div className="bg-purple-700 bg-opacity-80 h-full overflow-y-scroll py-2 px-1.5 lg:px-3 w-full">
            {data?.map((data) => (
              <div className="w-full mt-3 flex flex-row justify-between items-center shadow-lg bg-purple-950 bg-opacity-90 lg:px-5 px-3 py-3 lg:py-6 rounded-2xl">
                <div className="flex flex-row justify-center items-center">
                  <div className="bg-purple-600 bg-opacity-90 rounded-full">
                    <img
                      className="w-20"
                      alt="img"
                      src={PROFILE_IMG + data?.picId}
                    ></img>
                  </div>
                  <Link to={"/astroProfile/" + data?.name}>
                    <div className="px-4 flex w-full lg:w-7/12 flex-row justify-start items-start">
                      <div className="flex flex-col w-full justify-start items-start">
                        <span className="lg:text-3xl text-xl text-purple-300 font-semibold">
                          {data?.name}
                        </span>
                        {data?.shortBio && (
                          <span className="font-normal lg:font-medium text-sm lg:text-base text-purple-200">
                            ({data?.shortBio})
                          </span>
                        )}
                        
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <span
                    className="bg-purple-300 lg:px-4 px-2 py-1 text-sm lg:text-base  lg:py-2 rounded-lg hover:bg-purple-200  transition-all font-medium cursor-pointer text-zinc-700"
                    onClick={handleUnfollow}
                  >
                    Unfollow
                  </span>
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Following;
