import React from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import Header from "./Header";
import lang from "../utils/langConstants";
import bg from "../image/bg1.jpg";
import hand from "../image/hand.png"
import handbg from "../image/hand_bg.png"

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const Langkey = useSelector((store) => store.configApp.lang);

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
      <Header />
      <div className="flex lg:flex-row flex-col  w-12/12 h-screen relative justify-start sm:px-20 lg:px-28 lg:pt-20 pt-48 items-center bg-cover bg-center bg-fixed overflow-hidden">
        <img
          className="hidden md:block absolute h-screen w-full brightness-90 top-0 left-0 -z-20 "
          src={bg}
          alt="bg"
        ></img>
        <img
          className="absolute md:hidden w-full h-screen brightness-90 top-0 left-0 -z-20 "
          src="https://images.unsplash.com/photo-1604903256031-4328f723fa33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className=" lg:w-7/12 w-full   z-10 hidden lg:flex  justify-start items-start lg:items-start lg:pt-20 flex-col h-full text-white">
          <span className="text-2xl uppercase tracking-[10px] lg:text-5xl w-full lg:w-8/12 font-medium text-purple-100">
            {lang[Langkey].welcome}
          </span>
          <span className="lg:text-[85px] tracking-wide text-6xl font-bold text-purple-300">
            {" "}
            {lang[Langkey].astroGPT}
          </span>
          <span className="text-2xl uppercase tracking-[4.5px] lg:text-2xl w-full lg:w-8/12 font-medium text-purple-100">
            Your Horoscope Realm
          </span>
          <span className="lg:py-4 pt-3 text-base tracking-wide  font-normal w-[57%] lg:items-start lg:text-left items-center flex text-center italic text-zinc-300">
            {lang[Langkey].loginDescription}
          </span>
          <div className="flex flex-row gap-3">
            <button
              className="lg:px-6 px-4 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-3 my-1 py-1.5 lg:py-2  text-white bg-purple-700  uppercase tracking-wider font-semibold text-base lg:text-lg"
              onClick={handleform}
            >
              {lang[Langkey].explore}
            </button>
            <button className="lg:px-6 px-4 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-3 my-1 py-1.5 lg:py-2  text-white bg-purple-700  uppercase tracking-wider font-semibold text-base lg:text-lg">
              AstroKundli
            </button>
          </div>
        </div>
        <div className="bg-zinc-950 shadow-sm lg:shadow-purple-800 rounded-2xl  bg-opacity-70 w-11/12 sm:w-[70%] lg:w-[38%] ">
          <img alt="hand"
            className="w-7/12 hidden  lg:block absolute -top-[55px] -right-6 -z-20 hand"
            src={hand}
          ></img>
 
          <img alt="handbg"
            className="md:hidden absolute  w-12/12 top-48 left-0  -z-20 hand"
            src={handbg}
          ></img>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
