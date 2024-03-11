import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHoroscope from "../custom hooks/useHoroscope";
import TopAstro from "./TopAstro";
import { addChat } from "../store/AstroSlice";
import { useDispatch, useSelector } from "react-redux";
import Chatbot from "./Chatbot";


const Horoscope = () => {

    const {id} = useParams()
        //call the gpt api in useEffect by using custom hook
        useHoroscope(id)
    
        const Bot = useSelector(store => store.configApp.Bot)
    
  return (
    <div className="relative flex-col flex w-12/12">
       { Bot && <Chatbot/>}
      <img
        alt="bg"
        className="h-screen brightness-75 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
      <div className="pt-20">
      <span className="text-red-400">Horoscope</span>
      </div>
     
    </div>
  );
};

export default Horoscope;
