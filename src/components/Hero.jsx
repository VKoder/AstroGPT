import { useDispatch, useSelector } from "react-redux";
import Explore from "./Explore";
import { useEffect, useState } from "react";
import TopAstro from "./TopAstro";
import SignSearch from "./SignSearch";
import Chatbot from "./Chatbot";

const Hero =() => {

    const [topAstro,settopAstro]= useState()

    const Bot = useSelector(store => store.configApp.Bot)

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fapi.consultant.list.astrotalk.com%2FAstroTalk%2FfreeAPI%2Fconsultant%2Fget-list%2Ffilter%3FappId%3D4%26businessId%3D1%26consultantTypeId%3D1%26timezone%3DAsia%2FKolkata%26pageNo%3D0%26pageSize%3D18%26version%3D1.19.09.23%26serviceId%3D4%26languageId%3D1%26hardwareId%3D%26countryCode%3D%26sortByRating%3Dfalse%26sortByExperience%3Dfalse%26sortByPrice%3Dfalse%26sortByOrder%3Dfalse%26isDesc%3Dfalse%26isPoAstrologer%3Dtrue")
        const json = await data.json();
        settopAstro(json?.content)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="w-12/12  relative">
              
               <img alt="bg"
        className="h-screen brightness-75 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
     { Bot && <Chatbot/>}
            <Explore/>
          
            <TopAstro list={topAstro}/>
            <SignSearch/>
        </div>
    )
}
export default Hero;