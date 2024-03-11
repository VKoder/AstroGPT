import { useDispatch, useSelector } from "react-redux";
import { CHAT_BOT } from "../utils/constants";
import openai from "./../utils/openai";
import React, { useRef, useState } from "react";
import { addForm , addLimit} from "../store/configAppSlice";
import { toast, Bounce } from "react-toastify";


const Chatbot = () => {
  const input = useRef();
  const [result, setresult] = useState(["AstroBot: Hi"]);
  const [apiLimit, setapiLimit] = useState(1);


  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  const dispatch = useDispatch();


  

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
     
      dispatch(addForm());
      return; 
    }
    if (apiLimit > 6) {
      dispatch(addLimit(false))
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

    setresult([...result,"You: "+input.current.value,"AstroBot: " +Responce])
    input.current.value = "";
    
    setapiLimit(apiLimit + 1)
      };
 
  return (
    <div className="lg:pt-20 fixed w-full z-40 pt-[20%] h-screen flex justify-center items-start  px-2 lg:px-16 bg-purple-950 bg-opacity-65 w-12/12">
      <div className="lg:w-[50%] w-full rounded-xl overflow-hidden relative h-[80vh]">
          <div className="w-full flex flex-row  justify-between items-center bg-purple-950 py-3 lg:py-4 px-4 lg:px-10">
            <span className="lg:text-2xl text-xl text-purple-200 font-semibold tracking-wide">
              AstroBot
            </span>
            <i className="text-xl lg:text-3xl text-purple-300 ri-close-fill"></i>
          </div>
          <div className="w-full overflow-y-scroll px-4 py-4 flex flex-col justify-start items-start lg:px-10 pb-28 h-[75vh] bg-purple-950 bg-opacity-30 ">
           
            {
         result?.map((result) =>   
         <div className="lg:px-4 px-2 mb-2 lg:mb-4 lg:tracking-wide tracking-wider rounded-lg lg:rounded-md font-normal lg:font-medium lg:py-2 py-1.5 bg-purple-600  text-white">
<span className="text-purple-50 text-sm lg:text-base">{result}</span>
         </div> )
            }
            
          </div>
          <div className=" absolute flex justify-center bg-purple-950 items-center px-4 lg:px-10 w-full bottom-0 py-4 bg-opacity-95">
            <form onSubmit={(e) => e.preventDefault()} className="w-full relative  flex justify-center items-center">
              <input
                className="w-full py-2  text-purple-700 font-medium  outline-none px-3 text-base lg:text-lg rounded-xl"
                type="text"
                placeholder="Enter Horoscope"
                ref={input}
              >
                  
              </input>
              <button
                className="px-4 py-1 lg:py-1.5 absolute rounded-e-xl right-0 bg-purple-500 "
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
