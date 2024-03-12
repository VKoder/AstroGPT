import { useDispatch, useSelector } from "react-redux";
import { PROFILE_IMG, TALK_PROMPT } from "../utils/constants";
import bg from "../image/bg1.jpg";
import openai from "./../utils/openai";
import React, { useRef, useState } from "react";
import { addBot, addForm, addLimit } from "../store/configAppSlice";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AstrologersTalk = () => {
  const astroProfile = useSelector((store) => store.astro.astroProfile);

  const { data } = astroProfile;
  const info = data;
  const input = useRef();
  const [result, setresult] = useState([info?.name + ": Hi"]);
  const [apiLimit, setapiLimit] = useState(1);

  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handlebot = () => {
    navigate("/astroProfile/" + info?.name);
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
    if (apiLimit > 4) {
      dispatch(addLimit(false));
      toast.error("Please come tommorow Api limit exceded", {
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

    const gptSearch =
      TALK_PROMPT +
      "name=" +
      info?.name +
      "skills=" +
      info?.skills +
      "experience =" +
      info?.exp +
      "user input =" +
      input.current.value;

    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearch }],
      model: "gpt-3.5-turbo",
    });
    const Responce = data?.choices?.[0]?.message?.content;

    setresult([
      ...result,
      "You: " + input.current.value,
      info?.name + ": " + Responce,
    ]);
    input.current.value = "";

    setapiLimit(apiLimit + 1);
  };

  return (
    <div className="lg:pt-20 fixed w-full top-0 z-20 lg:mb-0 mb:20 pt-[20%] h-screen flex justify-center items-start  px-2 lg:px-16   w-12/12">
      <img
        alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] brightness-50 fixed top-0 left-0 -z-40"
        src={bg}
      ></img>

      <div className="lg:w-[50%] w-full rounded-xl overflow-hidden relative h-[75vh] lg:h-[80vh]">
        <div className="w-full flex flex-row justify-between items-center bg-opacity-95 bg-purple-700 py-3 lg:py-4 px-4 lg:px-10">
          <div className="flex flex-row lg:gap-4 gap-2 justify-center items-center">
            <div className="relative ">
              <div className="w-16 h-16 rounded-full bg-purple-800 bg-opacity-85"></div>
              <img
                className="lg:w-16 absolute xl:left-[2px] bottom-0"
                src={PROFILE_IMG + info?.picId}
                alt="profile"
              ></img>
            </div>
            <span className="lg:text-2xl text-xl text-purple-200 font-semibold tracking-wide">
              {info?.name}
            </span>
          </div>
          <i
            className="text-xl lg:text-3xl text-purple-300 ri-close-fill cursor-pointer"
            onClick={handlebot}
          ></i>
        </div>
        <div className="w-full overflow-y-scroll px-4 py-4 flex flex-col justify-start items-start lg:px-10 pb-28 h-[75vh] bg-purple-950 bg-opacity-90 ">
          {result?.map((result, index) => (
            <div
              key={index}
              className="lg:px-4 px-2 mb-2 lg:mb-4 lg:tracking-wide tracking-wider rounded-lg lg:rounded-md font-normal lg:font-medium lg:py-2 py-1.5 bg-purple-600  text-white"
            >
              <span className="text-purple-50 text-sm lg:text-base">
                {result}
              </span>
            </div>
          ))}
        </div>
        <div className=" absolute flex justify-center bg-purple-700 items-center px-4 lg:px-10 w-full bottom-0 py-4 bg-opacity-95">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full relative  flex justify-center items-center"
          >
            <input
              className="w-full py-2  text-purple-700 font-medium  outline-none px-3 text-base lg:text-lg rounded-xl"
              type="text"
              placeholder="Enter Horoscope"
              ref={input}
            ></input>
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

export default AstrologersTalk;
