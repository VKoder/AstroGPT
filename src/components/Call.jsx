
import {  useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerList from "../shimmer/ShimmerList";
import useCall from "../custom hooks/useCall";
import { useState } from "react";
import Header from "./Header";

const Call = () => {
    const [search, setSearch] = useState(""); 
    const [mainCallList, setMaincallList] = useState(null); 

    useCall();
    const callList = useSelector(store => store.astro.callList);

    if (!callList) return <ShimmerList/>;



    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        
       
        const filteredList = callList.filter(name => name.slug.toLowerCase().includes(searchTerm));
        setMaincallList(filteredList);
      
    };

    const btnCSS = "lg:text-base text-sm border px-2 lg:px-4 py-0.5 lg:py-1.5 border-zinc-600 text-zinc-600 font-normal rounded-full cursor-pointer"
    return (
    
        <div className="bg-[#E6E6FA] h-full w-12/12 overflow-hidden">
          
          <div className="lg:pt-6 pt-3 px-4 lg:px-20 flex flex-col justify-center items-start">
            <div className="w-full flex lg:flex-row flex-col justify-between items-start lg:items-center">
                <span className="text-2xl lg:text-3xl font-bold">Call to Astrologers</span>
                <div className="flex py-2 relative items-center">
                    <input 
                        type="text" 
                        placeholder="Search for Astrologers" 
                        value={search} 
                        onChange={handleSearch}
                        className="border w-80 text-base lg:text-lg rounded-full border-gray-400 pl-9  py-0.5  lg:py-1.5 px-2"
                    ></input>
                    <i className="ri-search-line text-gray-400 absolute text-sm lg:text-base left-3"></i>
                </div>
            </div>

                <div className="flex w-full whitespace-nowrap overflow-x-scroll  no-scrollbar justify-start items-center pt-0.5 lg:pt-2 gap-2 lg:gap-4 flex-row">
                    <span className={btnCSS}><i className="ri-filter-2-line pr-1"></i>Filter</span>
                    <button className={btnCSS} onClick={()=>{
                        setMaincallList(callList)}
                    }>All</button>
                    <button className={btnCSS} onClick={()=>{
                        let top = callList.filter((top)=> top.rating === 5)
                        setMaincallList(top)
                    }}>Top rated</button>
                    <button className={btnCSS}  onClick={()=>{
                        let off = callList.filter((off)=> off.isShowOffer === true)
                        setMaincallList(off)
                    }}>Offer</button>
                    <button className={btnCSS}  onClick={()=>{
                        let vedic = callList.filter((vedic)=> vedic.skill.includes("Vedic"))
                        setMaincallList(vedic)
                    }}>Vedic</button>
                    <button className={btnCSS}  onClick={()=>{
                        let num = callList.filter((num)=> num.skill.includes("Numerology"))
                        setMaincallList(num)
                    }}>Numerology</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Tarot = callList.filter((Tarot)=> Tarot.skill.includes("Tarot"))
                        setMaincallList(Tarot)
                    }}>Tarot</button>
                   
                    <button className={btnCSS}  onClick={()=>{
                        let  FaceReading = callList.filter(( FaceReading)=>  FaceReading.skill.includes(" Face Reading"))
                        setMaincallList(FaceReading)
                    }}> Face Reading</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Vastu = callList.filter((Vastu)=> Vastu.skill.includes("Vastu"))
                        setMaincallList(Vastu)
                    }}>Vastu</button>
                    <button className={btnCSS}  onClick={()=>{
                        let LifeCoach = callList.filter((LifeCoach)=> LifeCoach.skill.includes("Life Coach"))
                        setMaincallList(LifeCoach)
                    }}>Life Coach</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Psychologist = callList.filter((Psychologist)=> Psychologist.skill.includes("Psychologist"))
                        setMaincallList(Psychologist)
                    }}>Psychologist</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Palmistry = callList.filter((Palmistry)=> Palmistry.skill.includes("Palmistry"))
                        setMaincallList(Palmistry)
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
