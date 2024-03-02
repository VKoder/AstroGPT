import { PROFILE_BG, PROFILE_IMG, TICKED } from "../utils/constants";
import ShimmerList from "../shimmer/ShimmerList";

const Card = ({ info }) => {

  if (!info) {
    return <ShimmerList />
  }

  return (
    <div className="flex justify-start overflow-hidden  w-full bg-zinc-700 shadow-md rounded-xl gap-4  px-2 py-2 items-start h-full flex-row">
      <div className="w-3/12 h-full  py-2  flex flex-col justify-start items-center">
        <div className="relative">
        <img className="rounded-full " src={PROFILE_BG} alt="bg"></img>
        <img
          className="lg:w-20 absolute bottom-0"
          src={PROFILE_IMG + info?.picId}
          alt="profile"
        ></img>
</div>
        <div>
          {info?.rating > 4.9 ?
            <div>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-half-s-fill text-yellow-400"></i>
            </div> : <div>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-s-fill text-yellow-400"></i>
              <i className="ri-star-half-s-fill text-yellow-400"></i>
            </div>}
        </div>

        <span className="text-xs text-gray-600 font-semibold">
          {" "}
          {info?.order} Orders
        </span>
      </div>
      <div className="w-6/12 py-2 h-full flex flex-col gap-1 justify-start items-start">
        <span className=" text-white font-semibold">{info?.name}</span>
        <span className="text-sm  text-gray-600 font-semibold">
          {info?.skill.length > 20 ? `${info?.skill.slice(0, 20)}...` : info?.skill}
        </span>
        <span className="text-sm  text-gray-600 font-semibold">
          {info?.lang}
        </span>
        <span className="text-sm  text-gray-600 font-semibold">
          Exp: {info?.exp} Years
        </span>
        <span className="text-sm"> <span className="text-base pr-1 font-semibold text-black">₹{info?.price}</span>/min</span>
      </div>
      <div className="w-2/12  py-2  h-full flex flex-col  gap-20 justify-between items-end">
        <div className="flex flex-row">
          {info?.tick && <span>
            <img
              className="w-4"
              alt="tick"
              src={TICKED}
            ></img>
          </span>}
          {
            info?.label && <span>{info?.label}</span>
          }
        </div>
        <div className="">
          <button className="px-5 py-1 hover:bg-purple-500 hover:text-white  rounded-md  text-sm border text-[#9400D3]  border-[#4DA1FF]">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
