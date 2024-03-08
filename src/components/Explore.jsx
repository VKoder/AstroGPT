import { useSelector } from "react-redux";
import lang from "../utils/langConstants";
import ZodiacContainer from "./ZodiacContainer";

const Explore = () => {

   const Langkey = useSelector(store => store.configApp.lang)

    const btnCSS =
    "w-full cursor-pointer py-4 md:py-6 lg:py-8 md:text-lg lg:text-xl text-base font-semibold rounded-3xl shadow-md bg-white";

  return (
    <div className="w-12/12  overflow-x-hidden flex flex-col">    
    <div className="relative lg:h-screen pt-36 lg:pt-16 mx-6 md:px-10 gap-10  flex flex-col lg:flex-row justify-center items-center w-12/12">
       <div className=" lg:w-6/12 w-full lg:pl-20 z-10 lg:flex flex lg:justify-start justify-center items-center lg:items-start lg:pt-28 flex-col h-full text-white">
        <span className="text-2xl uppercase lg:text-start text-center tracking-widest lg:text-6xl w-full font-medium text-purple-100">
         {lang[Langkey].welcome}
        </span>
        <span className="lg:text-[85px]  tracking-wide text-4xl font-bold py-3 text-purple-300"> {lang[Langkey].astroGPT}</span>
        <span className="text-xl uppercase lg:text-start text-center  tracking-[4.5px]  lg:text-2xl w-full  font-medium text-purple-100">Your Horoscope Realm</span>
        <span className="lg:py-4 pt-1.5 lg:pt-3 text-sm lg:text-base tracking-wider  font-normal w-full lg:w-[80%] lg:items-start lg:text-left items-center flex text-center italic text-zinc-300">
          {lang[Langkey].loginDescription}
        </span>
        <div className="flex flex-row gap-3">
        <button
          className="lg:px-5 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wider font-semibold text-sm lg:text-base"
         
        >
          {lang[Langkey].explore}
        </button>
        <button
          className="lg:px-5 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wider font-semibold text-sm lg:text-base"
          >
         AstroKundli
         </button>
         </div>
      </div>
      <div className="relative flex justify-center h-[35vh] items-center lg:pt-0 lg:w-6/12 lg:h-screen">
        <img className="opacity-90 lg:w-[50%] w-[30%] z-10" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand.png"></img>
        <img className="absolute lg:w-[90%]  w-[60%] hand opacity-100" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"></img>
      </div>
    </div>
    <ZodiacContainer/>
    </div>

  );
};
export default Explore;
