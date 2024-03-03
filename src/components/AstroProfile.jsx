import { useDispatch, useSelector } from "react-redux";
import useAstroProfile from "../custom hooks/useAstroProfile";
import { useParams } from "react-router-dom";
import { PROFILE_BG, PROFILE_IMG } from "../utils/constants";
import ShimmerProfile from "../shimmer/ShimmerProfile";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFollow } from "../store/followSlice";
import { useState } from "react";

const AstroProfile = () => {
  const [follow, setfollow] = useState(false);

  const { id } = useParams();
  useAstroProfile(id);

  const dispatch = useDispatch();

  const astroProfile = useSelector((store) => store.astro.astroProfile);

  if (!astroProfile) {
    return <ShimmerProfile />;
  }
  const { data } = astroProfile;

  const handlefollow = (data) => {
    toast("🔥 Followed " + data?.name, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    dispatch(addFollow(data));

    setfollow(!follow)
  };
  const handleUnfollow = () => {

    setfollow(!follow)

  };
  return (
    <div className="pt-24 relative">
       <img alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40 "
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
      <div className="w-12/12  flex flex-col mx-4 lg:mx-16 text-purple-300">
        <div className="flex relative shadow-sm lg:gap-20 gap-8 w-full text-purple-300 shadow-zinc-700  transition-all hover:bg-opacity-55  bg-purple-950 bg-opacity-55 lg:flex-row flex-col px-8 py-8    lg:mt-8  rounded-2xl ">
          <div className="w-full lg:w-3/12  gap-4 flex-col h-full flex justify-center items-start">
            <div className="relative w-full  overflow-hidden h-full flex justify-center items-start">
              <img className="rounded-full lg:w-96 w-48" src={PROFILE_BG} alt="Bg"></img>
              <img
                className="absolute top-0 md:-top-2 lg:top-0 w-48 lg:w-96 "
                src={PROFILE_IMG + data?.picId}
                alt="Profile"
              ></img>
            </div>
            <div className=" w-full h-full flex justify-center items-start">
              <div>
                {!follow ? (
                  <button
                    className="lg:px-8 px-5 py-1 lg:py-2.5 text-base lg:text-xl hover:bg-opacity-30 hover:shadow-purple-300 hover:shadow-sm border-2  border-purple-700 text-purple-100 rounded-lg bg-purple-600"
                    onClick={() => handlefollow(data)}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    className="lg:px-8 px-5 py-1 lg:py-2.5 text-base lg:text-xl text-purple-300 rounded-lg bg-[#9400D3]"
                    onClick={() => handleUnfollow(data)}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 w-full flex flex-col md:gap-1 gap-0.5 lg:gap-2  h-full">
            <span className="lg:text-2xl text-lg text-purple-200 font-bold">
              <i className="ri-user-fill pr-2 text-purple-300"></i>
              {data?.name}
            </span>
            <span className="lg:text-2xl text-lg font-semibold text-purple-200">
              <i className="ri-award-fill pr-2 text-purple-300"></i>
              {data?.skill}
            </span>
            <span className="lg:text-2xl text-lg  font-semibold text-purple-200">
              <i className="ri-global-fill pr-2 text-purple-300"></i>
              {data?.lang}
            </span>
            <span className="lg:text-2xl text-lg  font-semibold text-purple-200">
              <i className="ri-shake-hands-fill pr-2 text-purple-300"></i>Exp: {data?.exp} Years
            </span>
            <span className="lg:text-2xl pb-2 lg:py-0 text-lg  font-semibold text-purple-200">
              <i className="ri-money-rupee-circle-fill pr-2 text-purple-300"></i>₹
              {data?.callPrice}/min
            </span>
            <div className="flex flex-row justify-center lg:justify-start py-4 lg:py-0 border-t lg:border-0 md:gap-3 gap-10 lg:gap-5 items-center">
              <span className=" text-xl  lg:text-2xl">
                <i className="ri-question-answer-fill pr-2  text-purple-300"></i>
                <span className="font-semibold  text-purple-200">
                  {data?.totalCallDurationInMin}
                </span>{" "}
                mins
              </span>
              <span className="text-xl lg:text-2xl">
                <i className="ri-phone-fill   text-purple-300 pr-2"></i>
                <span className="font-semibold  text-purple-200">
                  {data?.totalChatDurationInMin}
                </span>{" "}
                mins
              </span>
            </div>
            <div className=" w-full flex flex-col lg:flex-row justify-start md:gap-3  gap-2 lg:gap-4 items-center">
              <div className="py-1.5 lg:py-3 w-full lg:w-[40%] rounded-full border cursor-pointer shadow-md hover:bg-purple-700 hover:bg-opacity-50 transition-all border-purple-300 md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
                <div className="w-1/12">
                  <i className="ri-question-answer-fill text-4xl lg:text-3xl"></i>
                </div>
                <div className="w-10/12 flex flex-col justify-center lg:gap-1 gap-0.5 items-center">
                  <span className="text-lg font-semibold">Start Chat</span>
                  <span className="text-base font-normal">Wait time - 2m</span>
                </div>
              </div>
              <div className="py-1.5 lg:py-3 w-full lg:w-[40%] rounded-full border cursor-pointer shadow-md  hover:bg-purple-700 hover:bg-opacity-50 transition-all border-purple-300 md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
                <div className="w-1/12">
                  <i className="ri-phone-fill text-4xl lg:text-3xl"></i>
                </div>
                <div className="w-10/12 flex flex-col justify-center lg:gap-1 gap-0.5 items-center">
                  <span className="text-lg font-semibold">Start Call</span>
                  <span className="text-base font-normal">Wait time - 2m</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/12 flex justify-end  absolute top-2 right-2">
            {data?.verified && (
              <i className="lg:text-6xl md:text-4xl text-2xl text-[#9400D3] ri-verified-badge-fill"></i>
            )}
          </div>
        </div>
        <div className="rounded-2xl text-purple-300 shadow-zinc-700  transition-all hover:bg-opacity-55  bg-purple-950 bg-opacity-55 flex flex-col lg:px-10 px-4 py-4 lg:py-10  w-full mt-4 my-20">
          <div className="w-full flex lg:gap-4 gap-1 flex-col">
            <span className="lg:text-3xl text-2xl uppercase  font-bold">
              About me
              <span className="lg:text-xl text-base text-purple-400 font-normal pl-2 italic ">
                ({data?.shortBio})
              </span>
            </span>
            <span style={{wordSpacing:"2px"}} className="lg:text-lg text-sm tracking-wide font-normal text-gray-300">
              {data?.longBio}
            </span>
          </div>
          <div className="lg:py-4 py-2">
            <span className="lg:text-xl text-lg  font-bold">
              Problem Area:{" "}
            </span>
            <span className="lg:text-lg text-base  lg:px-2 px-1 py-0.5 lg:py-2 rounded-3xl italic">
              {data?.problemArea}
            </span>
          </div>
          <div className="w-full pt-4 gap-4 flex flex-row">
            {data?.album.map((img) => (
              <div
                key={img?.url}
                className="rounded-2xl bg-center border-2 shadow-md lg:w-[300px] w-[500px] h-[80px] lg:h-[280px]  overflow-hidden"
              >
                <img className="w-full" src={img?.url} alt="img"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AstroProfile;
