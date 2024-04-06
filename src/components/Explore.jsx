import {  useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import ZodiacContainer from "./ZodiacContainer";
import handbg from "../image/hand_bg.png";
import hand from "../image/hand.png";
import { addBot } from "../store/configAppSlice";
import { Link } from "react-router-dom";

const Explore = () => {
  const Langkey = useSelector((store) => store.configApp.lang);
  const dispatch = useDispatch()

  const handlebot = ()=>{
    dispatch(addBot())
  }

  return (
    <div className="w-12/12  flex flex-col">
      <div className="relative lg:h-screen pt-28 lg:pt-16 mx-6 md:px-10 lg:gap-10 gap-3  flex flex-col lg:flex-row justify-center items-center w-12/12">
        <div className=" lg:w-6/12 w-full lg:pl-14 z-10 lg:flex flex lg:justify-start justify-center items-center lg:items-start lg:pt-28 2xl:pt-[20%] flex-col h-full text-white">
          <span className="text-xl 2xl:text-6xl uppercase lg:text-start text-center tracking-widest lg:text-4xl w-full font-medium text-purple-50">
          {lang[Langkey].welcome}
          </span>
          <span className="lg:text-[85px] 2xl:text-[150px] tracking-wide lg:tracking-wide text-5xl font-bold lg:pb-1 pb-2 lg:pt-0 text-purple-300">
            {" "}
          {lang[Langkey].astroGPT}
          </span>
          <span className="text-base 2xl:text-4xl uppercase lg:text-start text-center w-[80%] tracking-[3px]  lg:text-xl   font-medium text-purple-50">
          {lang[Langkey].finger}
          </span>
          <span className="lg:py-2 2xl:text-2xl  text-[10px] lg:pt-2 pt-4 lg:text-base tracking-wider  font-normal w-[80%] lg:items-start lg:text-left items-center flex text-center italic text-zinc-300">
            {lang[Langkey].loginDescription}
          </span>
          <div className="flex flex-row lg:pt-0 pt-3 gap-3">
            <button className="lg:px-5 2xl:px-8 2xl:py-3 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wide font-semibold 2xl:text-lg text-sm lg:text-lg" onClick={handlebot}>
              {lang[Langkey].astroBot}
            </button>
           <Link to={"/kundligpt"}><button className="lg:px-5 2xl:px-8 2xl:py-3 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wide font-semibold 2xl:text-lg text-sm lg:text-lg">
              {lang[Langkey].astroKundli}
            </button></Link> 
          </div>
        </div>
        <div className="relative flex justify-center h-[35vh] items-center lg:pt-0 lg:w-6/12 lg:h-screen">
          <img
            className="opacity-90 lg:w-[45%] w-[30%] z-10"
            src={hand}
            alt="hand"
          ></img>
          <img
            className="absolute lg:w-[85%]  w-[60%] hand opacity-100"
            alt="handbg"
            src={handbg}
          ></img>
        </div>
      </div>

      <ZodiacContainer />
    </div>
  );
};
export default Explore;
