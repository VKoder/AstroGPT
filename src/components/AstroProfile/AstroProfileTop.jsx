import React from 'react'
import { PROFILE_BG, PROFILE_IMG } from '../../utils/constants'

const AstroProfileTop = ({data}) => {
  return (
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
                <button className="lg:px-8 px-5 py-1 lg:py-2.5 text-base lg:text-xl text-white rounded-lg bg-[#9400D3]">
                    Follow
                </button>
            </div>
        </div>
    </div>
    <div className="lg:w-8/12 w-full flex flex-col md:gap-1 gap-0.5 lg:gap-2  h-full">
        <span className="lg:text-4xl text-2xl text-black font-bold"><i className="ri-user-fill pr-1"></i>{data?.name}</span>
        <span className="lg:text-2xl text-lg font-semibold text-black"><i className="ri-award-fill pr-2"></i>{data?.skill}</span>
        <span className="lg:text-2xl text-lg  font-semibold text-black"><i className="ri-global-fill pr-2"></i>{data?.lang}</span>
        <span className="lg:text-2xl text-lg  font-semibold text-black"><i className="ri-shake-hands-fill pr-2"></i>Exp: {data?.exp} Years</span>
        <span className="lg:text-2xl pb-2 lg:py-0 text-lg  font-semibold text-black"><i className="ri-money-rupee-circle-fill pr-2"></i>₹{data?.callPrice}/min</span>
        <div className="flex flex-row justify-center lg:justify-start py-2 lg:py-0 border-t lg:border-0 md:gap-3 gap-2 lg:gap-5 items-center">
            <span className=" text-lg  lg:text-xl"><i className="ri-question-answer-fill pr-1"></i><span className="font-semibold">{data?.totalCallDurationInMin}</span> mins</span>
            <span className="text-lg lg:text-xl"><i className="ri-phone-fill  pr-1"></i><span className="font-semibold">{data?.totalChatDurationInMin}</span> mins</span>
        </div>
        <div className=" w-full flex flex-col lg:flex-row justify-start md:gap-3 gap-2 lg:gap-4 items-center">
            <div className="py-1.5 lg:py-3 w-full lg:w-[50%] rounded-full border cursor-pointer shadow-md hover:bg-[#E6E6FA] border-black md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
                <div className="w-2/12">
                    <i className="ri-question-answer-fill text-4xl lg:text-3xl"></i>
                </div>
                <div className="w-9/12 flex flex-col justify-center lg:gap-1 gap-0.5 items-center">
                    <span className="text-lg font-semibold">Start Chat</span>
                    <span className="text-base font-normal">Wait time - 2m</span>
                </div>
            </div>
            <div className="py-1.5 lg:py-3 w-full lg:w-[50%] rounded-full border cursor-pointer shadow-md hover:bg-[#E6E6FA] border-black md:px-6 px-4 lg:px-8 flex flex-row justify-center lg:justify-between items-center">
                <div className="w-2/12">
                    <i className="ri-phone-fill text-4xl lg:text-3xl"></i>
                </div>
                <div className="w-9/12 flex flex-col justify-center lg:gap-1 gap-0.5 items-center">
                    <span className="text-lg font-semibold">Start Call</span>
                    <span className="text-base font-normal">Wait time - 2m</span>
                </div>
            </div>
        </div>
    </div>
    <div className="w-2/12 flex justify-end  absolute top-2 right-2">
        {
            data?.verified && <i className="lg:text-6xl md:text-4xl text-2xl text-[#9400D3] ri-verified-badge-fill"></i>
        }
    </div>
    </div> 
  )
}

export default AstroProfileTop
