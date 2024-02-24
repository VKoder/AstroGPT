import Header from "./Header";
import {  useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerList from "../shimmer/ShimmerList";
import useCall from "../custom hooks/useCall";
import { useState } from "react";

const Call = () => {
    const [search, setSearch] = useState(""); 
    const [mainCallList, setMainCallList] = useState(null); 

    useCall();
    const callList = useSelector(store => store.astro.callList);

    if (!callList) return <ShimmerList/>;



    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        
       
        const filteredList = callList.filter(name => name.slug.toLowerCase().includes(searchTerm));
        setMainCallList(filteredList);
      
    };

    const btnCSS = "border px-4 py-1.5 border-zinc-600 text-zinc-600 font-normal rounded-full cursor-pointer"
    return (
        <div className="bg-[#E6E6FA] h-full w-12/12 overflow-hidden">
          
            <div className="pt-6 px-20 flex flex-col justify-center items-start">
            <div className="w-full flex justify-between items-center">
                <span className="text-3xl font-bold">Call to Astrologers</span>
                <div className="flex py-2 relative items-center">
                    <input 
                        type="text" 
                        placeholder="Search for Astrologers" 
                        value={search} 
                        onChange={handleSearch}
                        className="border w-80 text-lg rounded-full border-gray-400 pl-9  py-1.5 px-2 "
                    ></input>
                    <i className="ri-search-line text-gray-400 absolute text-base left-3"></i>
                </div>
            </div>

                <div className="flex w-full whitespace-nowrap overflow-x-scroll  no-scrollbar justify-start items-center pt-2 gap-4 flex-row">
                    <span className={btnCSS}><i className="ri-filter-2-line pr-1"></i>Filter</span>
                    <button className={btnCSS} onClick={()=>{
                        setMainCallList(callList)}
                    }>All</button>
                    <button className={btnCSS} onClick={()=>{
                        let top = callList.filter((top)=> top.rating === 5)
                        setMainCallList(top)
                    }}>Top rated</button>
                    <button className={btnCSS}  onClick={()=>{
                        let off = callList.filter((off)=> off.isShowOffer === true)
                        setMainCallList(off)
                    }}>Offer</button>
                    <button className={btnCSS}  onClick={()=>{
                        let vedic = callList.filter((vedic)=> vedic.skill.includes("Vedic"))
                        setMainCallList(vedic)
                    }}>Vedic</button>
                    <button className={btnCSS}  onClick={()=>{
                        let num = callList.filter((num)=> num.skill.includes("Numerology"))
                        setMainCallList(num)
                    }}>Numerology</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Tarot = callList.filter((Tarot)=> Tarot.skill.includes("Tarot"))
                        setMainCallList(Tarot)
                    }}>Tarot</button>
                   
                    <button className={btnCSS}  onClick={()=>{
                        let  FaceReading = callList.filter(( FaceReading)=>  FaceReading.skill.includes(" Face Reading"))
                        setMainCallList(FaceReading)
                    }}> Face Reading</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Vastu = callList.filter((Vastu)=> Vastu.skill.includes("Vastu"))
                        setMainCallList(Vastu)
                    }}>Vastu</button>
                    <button className={btnCSS}  onClick={()=>{
                        let LifeCoach = callList.filter((LifeCoach)=> LifeCoach.skill.includes("Life Coach"))
                        setMainCallList(LifeCoach)
                    }}>Life Coach</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Psychologist = callList.filter((Psychologist)=> Psychologist.skill.includes("Psychologist"))
                        setMainCallList(Psychologist)
                    }}>Psychologist</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Palmistry = callList.filter((Palmistry)=> Palmistry.skill.includes("Palmistry"))
                        setMainCallList(Palmistry)
                    }}>Palmistry</button>


                    
                </div>
            </div>


            <div>
              
                <CardContainer list={mainCallList || callList} />
            </div>
        </div>
    );
};

export default Call;
