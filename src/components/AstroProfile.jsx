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
  console.log(data);

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
    <div className="bg-[#E6E6FA]">
      <div className="w-12/12  flex flex-col mx-4 lg:mx-16">
        <div className="flex relative bg-[#F5F5FF]  lg:flex-row flex-col px-8 py-8  gap-12  lg:mt-8 w-full rounded-2xl border">
          <div className="w-full lg:w-3/12  gap-4 flex-col h-full flex justify-center items-start">
            <div className="relative w-full  overflow-hidden h-full flex justify-center items-start">
              <img className="rounded-full" src={PROFILE_BG} alt="Bg"></img>
              <img
                className="absolute top-0 md:-top-2 lg:top-0 w-96 "
                src={PROFILE_IMG + data?.picId}
                alt="Profile"
              ></img>
            </div>
            <div className=" w-full h-full flex justify-center items-start">
              <div>
                {!follow ? (
                  <button
                    className="lg:px-8 px-5 py-1 lg:py-2.5 text-base lg:text-xl text-white rounded-lg bg-[#9400D3]"
                    onClick={() => handlefollow(data)}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    className="lg:px-8 px-5 py-1 lg:py-2.5 text-base lg:text-xl text-white rounded-lg bg-[#9400D3]"
                    onClick={() => handleUnfollow(data)}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 w-full flex flex-col md:gap-1 gap-0.5 lg:gap-2  h-full">
            <span className="lg:text-4xl text-2xl text-black font-bold">
              <i className="ri-user-fill pr-1"></i>
              {data?.name}
            </span>
            <span className="lg:text-2xl text-lg font-semibold text-black">
              <i className="ri-award-fill pr-2"></i>
              {data?.skill}
            </span>
            <span className="lg:text-2xl text-lg  font-semibold text-black">
              <i className="ri-global-fill pr-2"></i>
              {data?.lang}
            </span>
            <span className="lg:text-2xl text-lg  font-semibold text-black">
              <i className="ri-shake-hands-fill pr-2"></i>Exp: {data?.exp} Years
            </span>
            <span className="lg:text-2xl pb-2 lg:py-0 text-lg  font-semibold text-black">
              <i className="ri-money-rupee-circle-fill pr-2"></i>₹
              {data?.callPrice}/min
            </span>
            <div className="flex flex-row justify-center lg:justify-start py-2 lg:py-0 border-t lg:border-0 md:gap-3 gap-2 lg:gap-5 items-center">
              <span className=" text-lg  lg:text-xl">
                <i className="ri-question-answer-fill pr-1"></i>
                <span className="font-semibold">
                  {data?.totalCallDurationInMin}
                </span>{" "}
                mins
              </span>
              <span className="text-lg lg:text-xl">
                <i className="ri-phone-fill  pr-1"></i>
                <span className="font-semibold">
                  {data?.totalChatDurationInMin}
                </span>{" "}
                mins
              </span>
            </div>
            <div className=" w-full flex flex-col lg:flex-row justify-start md:gap-3 gap-2 lg:gap-4 items-center">
              <div className="py-1.5 lg:py-3 w-full lg:w-[50%] rounded-full border cursor-pointer shadow-md hover:bg-[#E6E6FA] border-black md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
                <div className="w-1/12">
                  <i className="ri-question-answer-fill text-4xl lg:text-3xl"></i>
                </div>
                <div className="w-10/12 flex flex-col justify-center lg:gap-1 gap-0.5 items-center">
                  <span className="text-lg font-semibold">Start Chat</span>
                  <span className="text-base font-normal">Wait time - 2m</span>
                </div>
              </div>
              <div className="py-1.5 lg:py-3 w-full lg:w-[50%] rounded-full border cursor-pointer shadow-md hover:bg-[#E6E6FA] border-black md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
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
        <div className="rounded-2xl bg-[#F5F5FF] flex flex-col lg:px-10 px-4 py-4 lg:py-10 border bg- w-full mt-4 my-20">
          <div className="w-full flex lg:gap-4 gap-1 flex-col">
            <span className="lg:text-3xl text-2xl uppercase  font-bold">
              About me
              <span className="lg:text-xl text-base text-purple-400 font-normal pl-2 italic ">
                ({data?.shortBio})
              </span>
            </span>
            <span className="lg:text-lg text-sm tracking-wide font-normal text-gray-600">
              {data?.longBio}
            </span>
          </div>
          <div className="lg:py-4 py-2">
            <span className="lg:text-xl text-lg  font-bold">
              Problem Area:{" "}
            </span>
            <span className="lg:text-lg text-base  lg:px-4 px-2 py-0.5 lg:py-2 rounded-3xl italic">
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
