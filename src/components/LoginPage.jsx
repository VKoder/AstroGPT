import React from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import Header from "./Header";
import lang from "../utils/langConstants";

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const Langkey = useSelector(store => store.configApp.lang)

  const handleform = () => {
    {
      user
        ? navigate("/")
        : toast.warn("Please Login", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
    }
  };

  return (
    <>
    <Header/>
    <div className="flex lg:flex-row flex-col  w-12/12 h-screen relative justify-start sm:px-20 lg:px-28 lg:pt-20 pt-48 items-center bg-cover bg-center bg-fixed overflow-hidden">
      <img
        className="hidden md:block absolute h-screen w-full brightness-90 top-0 left-0 -z-20 "
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
          <img className="absolute md:hidden w-full h-screen brightness-90 top-0 left-0 -z-20 " src="https://images.unsplash.com/photo-1604903256031-4328f723fa33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"></img>
      <div className=" lg:w-7/12 w-full   z-10 hidden lg:flex  justify-start items-start lg:items-start lg:pt-20 flex-col h-full text-white">
        <span className="text-2xl lg:text-4xl w-full lg:w-6/12 font-medium text-purple-100">
         {lang[Langkey].welcome}
        </span>
        <span className="lg:text-8xl text-3xl font-bold text-purple-200"> {lang[Langkey].astroGPT}</span>
        <span className="lg:pt-6 pt-3 text-xs tracking-wider lg:text-base font-normal w-8/12 lg:items-start lg:text-left items-center flex text-center italic text-zinc-300">
          {lang[Langkey].loginDescription}
        </span>
        <button
          className="lg:px-8 px-4 hover:bg-transparent border-2  hover:shadow-inner hover: hover:shadow-purple-700 border-purple-700 transition-all lg:my-6 my-3 py-1.5 lg:py-2 rounded-lg text-white bg-purple-700 uppercase tracking-wider font-semibold text-lg lg:text-xl"
          onClick={handleform}
        >
          {lang[Langkey].explore}
        </button>
      </div>
      <div className="bg-zinc-950 shadow-sm lg:shadow-purple-800 rounded-2xl  bg-opacity-70 w-11/12 sm:w-[70%] lg:w-[38%] ">
        <img
          className="w-7/12 hidden  lg:block absolute -top-[55px] -right-6 -z-20 hand"
          src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"
        ></img>
       
        <img
          className="md:hidden absolute  w-12/12 top-48 left-0  -z-20 hand"
          src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"
        ></img>
        <LoginForm />
      </div>
    </div>
    </>
  );
};

export default LoginPage;
