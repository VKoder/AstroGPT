import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const Explore = () => {

   const Langkey = useSelector(store => store.configApp.lang)

    const btnCSS =
    "w-full cursor-pointer py-4 md:py-6 lg:py-8 md:text-lg lg:text-xl text-base font-semibold rounded-3xl shadow-md bg-white";

  return (
    <div className="relative h-screen  pt-16 px-2 md:px-16 gap-4 overflow-x-hidden  flex flex-row justify-center items-start w-12/12">
       <div className=" lg:w-5/12  w-full z-10  lg:flex  justify-center  items-start lg:items-start lg:pt-20 flex-col h-full text-white">
        <span className="text-2xl uppercase  tracking-wider lg:text-6xl w-full font-medium text-purple-100">
         {lang[Langkey].welcome}
        </span>
        <span className="lg:text-[85px]  tracking-wide text-6xl font-bold text-purple-300"> {lang[Langkey].astroGPT}</span>
        <span className="text-2xl uppercase tracking-[4.5px] lg:text-2xl w-full  font-medium text-purple-100">Your Horoscope Realm</span>
        <span className="lg:py-4 pt-3 text-base tracking-wide  font-normal w-[80%] lg:items-start lg:text-left items-center flex text-center italic text-zinc-300">
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
      <div className=" relative flex  justify-center items-center w-6/12 h-screen">
        <img className="opacity-90 w-[50%] z-10" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand.png"></img>
        <img className="absolute w-[90%]  hand opacity-100" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"></img>
      </div>
    </div>
  );
};
export default Explore;
