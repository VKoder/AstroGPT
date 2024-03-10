import { useDispatch, useSelector } from "react-redux";
import { CHAT_BOT } from "../utils/constants";
import openai from "./../utils/openai";
import React, { useRef, useState } from "react";
import { addForm , addLimit} from "../store/configAppSlice";
import { toast, Bounce } from "react-toastify";


const Chatbot = () => {
  const input = useRef();
  const [result, setresult] = useState();
  const [apiLimit, setapiLimit] = useState(1);

  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  // const Limit = useSelector((store)=> store.user.limit)
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
      return; // Exit the function
    }
    if (apiLimit > 1) {
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
    console.log(data?.choices?.[0]?.message?.content);
    setresult(data?.choices?.[0]?.message?.content);
    input.current.value = "";
    setapiLimit(apiLimit + 1)
      };
 
  return (
    <div className="pt-24  relative z-10 px-16 text-white w-12/12">
      <img
        alt="bg"
        className="h-screen brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
      <div className="h-screen w-full bg-gray-500"></div>

      {console.log(apiLimit + "api limit")}
      <div className="w-12/12 flex bg-red-300 justify-between items-center h-screen">
        <div className="w-4/12 bg-purple-800 h-[70vh]"></div>

        <div className="w-7/12 bg-purple-800 relative h-[80vh]">
          <div className="w-full bg-purple-950 py-4 px-10">
            <span className="text-2xl text-purple-200 font-semibold tracking-wide">
              AstroBot
            </span>
          </div>
          <div className="w-full h-[60vh] bg-orange-800">
            <span className="text-purple-200 text-lg">{result}</span>
          </div>
          <div className="bg-gray-400 absolute px-10 w-full bottom-2">
            <form onSubmit={(e) => e.preventDefault()} className="">
              <input
                className="w-10/12 py-2 text-purple-700 font-medium  outline-none px-3 text-lg rounded-lg"
                type="text"
                placeholder="Enter Horoscope"
                ref={input}
              ></input>
              <button
                className="px-5 py-2 bg-red-500 rounded-xl"
                onClick={handleSearch}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
