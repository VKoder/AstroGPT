import { useDispatch, useSelector } from "react-redux";
import { CHAT_BOT } from "../utils/constants";
import openai from "./../utils/openai";
import React, { useRef, useState } from "react";
import { addBot, addForm, addLimit } from "../store/configAppSlice";
import { toast, Bounce } from "react-toastify";
import logo from "../image/Logo.png"
import lang from "../utils/langConstants";

const Chatbot = () => {
  const input = useRef();

  const [apiLimit, setapiLimit] = useState(1);

  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  const dispatch = useDispatch();

  const [result, setresult] = useState(["AstroBot: Hi"]);

  const handlebot = () => {
    dispatch(addBot());
  };

  const handleSearch = async () => {
    
    if (!user) {
      toast.error("Please Login to Continue", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      dispatch(addBot());
      dispatch(addForm());
      return;
    }
    if (apiLimit > 6) {
      dispatch(addLimit(false));
      toast.error("Please come tommorow Api limit excedd", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const gptSearch = CHAT_BOT + input.current.value + `?`; 

    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearch }],
      model: "gpt-3.5-turbo",
    });
    const Responce = data?.choices?.[0]?.message?.content;
    console.log(data)

    setresult([
      ...result,
      "You: " + input.current.value,
      "AstroBot: " + Responce,
    ]);
    input.current.value = "";

    setapiLimit(apiLimit + 1);
  };

  const LangKey = useSelector(store => store.configApp.lang)

  return (
    <div className="lg:pt-20 fixed w-full top-0 z-20 lg:mb-0 mb:20 pt-[20%] h-screen flex justify-center items-start  px-2 lg:px-16  bg-zinc-950 bg-opacity-85 w-12/12">
      <div className="lg:w-[45%] w-full rounded-xl overflow-hidden relative h-[80vh] lg:h-[80vh]">
        <div className="w-full flex flex-row h-[8vh] lg:h-[12vh] justify-between items-center bg-opacity-95 bg-purple-700 py-0.5 lg:py-4 px-4 lg:px-2">
          
          <div className="flex justify-start items-center">
            <img className="xl:w-16 w-10 lg:w-14" src={logo} alt="logo"></img>
            <span className="lg:text-2xl text-purple-200 font-semibold uppercase xl:text-2xl text-xl">{lang[LangKey].astroBot}</span>
          </div>


          <i
            className="text-xl lg:text-3xl text-purple-300 ri-close-fill cursor-pointer"
            onClick={handlebot}
          ></i>
        </div>
        <div className="w-full overflow-y-scroll px-3 py-3 flex flex-col justify-start items-start lg:px-4 pb-28 h-[75vh] bg-purple-950 bg-opacity-90 ">
          {result?.map((result, index) => (
            <div
              key={index}
              className="lg:px-3 px-1.5 mb-2 lg:mb-4 lg:tracking-wide tracking-wider rounded-lg lg:rounded-md font-normal lg:font-medium lg:py-1.5 py-1 bg-purple-600  text-white"
            >
              <span className="text-purple-50 text-xs lg:text-sm">
                {result}
              </span>
            </div>
          ))}
        </div>
        <div className=" absolute flex justify-center bg-purple-700 items-center px-2 lg:px-4 w-full bottom-0 py-2 bg-opacity-95">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full relative  flex justify-center items-center"
          >
            <input
              className="w-full py-2 placeholder:font-normal text-purple-900 font-medium  outline-none px-5 text-base lg:text-lg rounded-full"
              type="text"
              placeholder="Ask anything you want"
              ref={input}
            ></input>
            <button
              className="px-4 py-1 lg:py-1.5 absolute rounded-e-full right-0 bg-purple-500 "
              onClick={handleSearch}
            >
              <i className="text-2xl ri-send-plane-2-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
