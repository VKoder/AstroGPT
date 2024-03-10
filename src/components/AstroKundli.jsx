import React, { useRef, useState } from "react";
import { kundlicheck } from "../utils/validate";
import openai from "../utils/openai";
import { ASTRO_KUNDLI, GPT_LANG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { addForm } from "../store/configAppSlice";
import Jyotish from "../image/jyotish 1.jpeg"
import Click from "../image/Click.jpeg"
import { click } from "@testing-library/user-event/dist/click";

const AstroKundli = () => {

  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  const name = useRef();
  const time = useRef();
  const locality = useRef();
  const district = useRef();
  const [gender, setGender] = useState();
  const [SelectedLanguage, setSelectedLanguage] = useState("English");
  const [result, setresult] = useState();
  const [error,setError] = useState()

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
      toast.info("Scroll to Top for Login", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
       dispatch(addForm())
        return; // Exit the function
    }

    const error = kundlicheck(
      name.current.value,
      locality.current.value,
      district.current.value,
      time.current.value,
      gender
    );
    if (error) {
      toast.error(error, {
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

  


    const kundli =
     
      
    
     `<h1 class="text-purple-300 mb-2 text-2xl text-center font-semibold tracking-wide">Hey, I am an AstroKundli integrated in AstroGPT, created by Sir Vivek Khule, a visionary mind behind AstroGPT. Please note that these readings may not be fully accurate.</h1><br><br>
    <div class="flex flex-row justify-between items-start">
     <div class="flex flex-col justify-start w-5/12">
    <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Zodiac Sign: [Zodiac Sign]</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">As Per your Vedic astrological reading, you are born under the zodiac sign of [Zodiac Sign]. This influences your personality and life path.</p><br>
          
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Personality:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">You are known for your [Personality Traits]. You are recognized for your [Strengths] and [Weaknesses], which shape your interactions and decisions.</p><br>
          
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Career Prospects:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">Your career prospects show [Career Outlook]. Your strengths lie in [Career Strengths], which can lead to success in [Career Fields].</p><br>
          
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Love Life:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">Your love life is influenced by [Love Life Insights]. Your romantic relationships are shaped by [Love Life Factors], affecting your emotional fulfillment.</p><br>
          </div>
          <div class="flex flex-col justify-start w-5/12">
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Financial Situation:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">Your financial situation presents [Financial Challenges/Opportunities]. It's crucial to follow [Financial Advice] for stability and prosperity.</p><br>
          
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Happiness:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">Your happiness is influenced by [Factors Affecting Happiness]. By focusing on [Happiness Tips], you can enhance your well-being and fulfillment.</p><br>
          
          <h1 class="text-purple-300 text-xl my-4 font-bold border-b-2 pb-1.5 border-purple-300">Motivational Message:</h1>
          <p class="text-purple-100 font-medium mb-6 text-lg tracking-wide">Remember, [Motivational Message]. Stay true to yourself, embrace opportunities, and navigate challenges with resilience. Your journey is unique, and your potential is limitless.</p>      
          </div>
          </div>(remember always give responce like in this format only just change the insights for each but that h1 div and all styling part keep it as it is heading title and all okay)
          ` +
      SelectedLanguage +
      ` Prompt name = ` +
      name.current.value +
      ` , gender = ` +
      gender +
      `, dob = ` +
      time.current.value +
      `, locality = ` +
      locality.current.value +
      `, district = ` +
      district.current.value +
      `, state = ` +
      `!`;

    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: kundli }],
      model: "gpt-3.5-turbo",
    });

    console.log(data?.choices?.[0]?.message?.content);
    setresult(data?.choices?.[0]?.message?.content)
    if (result === undefined || result === null) {
      return console.log("coming")    
    }
  };
 

  const inputCSS = "px-3 py-2  border-purple-90  z-20 bg-purple-950 bg-opacity-40 active:bg-transparent focus:bg-transparent inputCSS border border-purple-600 border-opacity-60 rounded-xl w-full text-purple-200 outline-none"
  const spanCSS = "absolute text-lg left-4 top-2 spanCSS z-10  font-semibold text-purple-300 uppercase"
  const divCSS = "lg:w-6/12 w-[45%]  relative divCSS transition-all"
 
  const maindivCSS = "flex flex-row justify-between items-center gap-8 my-6"

  return (
    <div className="pt-14 w-12/12 ">
        <img alt="bg" className="h-screen  brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"></img>

     
      <form onSubmit={(e) => e.preventDefault()} className="w-12/12 mb-4 mt-2 lg:my-8 md:my-12 gap-4 flex  justify-start  flex-col lg:flex-row bg-purple-950 bg-opacity-55 lg:mx-14 mx-4  rounded-xl lg:px-10 px-6 py-6 lg:py-10">
      <div className="lg:w-[28%] w-12/12 flex justify-center items-center relative">
        <img className="lg:w-[100%] w-40  z-20" src="https://www.saisadhanaastrologycentre.com/assets/img/about-1-1.webp"></img>
        <img className="absolute z-0 lg:w-48 w-28 lg:left-14 mx-auto hand -top-1 lg:top-1.5" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png" ></img>
      </div>
      <div className="lg:w-8/12 w-12/12">
        <div className="mb-8 flex justify-start flex-col items-center">
          <span className="lg:text-3xl text-2xl text-center lg:font-semibold  font-[600] text-purple-300 pb-1.5 lg:pb-3 tracking-wider opacity-90 lg:tracking-normal">Get Astro Insights</span>
           <img className="lg:w-56 w-48" src="data:img/png;base64,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"></img>
        </div>
        <div className={maindivCSS}>
        <div className={divCSS}>
          <input className={inputCSS} type="text" ref={name}></input>
          <span className={spanCSS}>Name</span>
         
        </div>
        <div className={divCSS}>
        <input className={inputCSS}  type="text" ref={locality}></input>
        <span className={spanCSS}>Birth Place</span>
        
        </div>
        
        </div>
        <div className={maindivCSS}>
        <div className={divCSS}>
        <input className={inputCSS}   type="text" ref={district}></input>
        <span className={spanCSS}>Birth District</span>
      
        </div>
       
        <div className={divCSS}>
        <input className={inputCSS}   type="datetime-local" ref={time}></input>
        <span className={spanCSS}>Birth Time</span>
        
        </div>
        </div>
       

        <div className={maindivCSS}>
        <div className={divCSS}>
       
        <div className="flex lg:flex-row flex-col px-3 py-2  lg:border-purple-900 lg:border rounded-xl lg:bg-purple-950 bg-opacity-55 ">
           <span className="lg:text-lg text-sm font-semibold text-purple-300 px-2 lg:px-4 uppercase pb-2">Gender</span>
          <div className="w-4/12 flex flex-row">
          <input className="" 
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={() => setGender("male")}
          />
          <label className="lg:text-base text-sm font-semibold text-purple-300 pl-2 uppercase" htmlFor="male">Male</label>
          </div>
          <div className="w-4/12 flex flex-row">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={() => setGender("female")}
          />
          <label className="lg:text-base text-sm  font-semibold text-purple-300 pl-2 uppercase" htmlFor="female">Female</label>
          </div>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:px-3 px-2 py-2 justify-start gap-4 lg:gap-10 lg:border-purple-900 lg:border rounded-xl lg:bg-purple-950 bg-opacity-55 w-[45%] lg:w-6/12">
          <span className="lg:text-lg text-sm font-semibold text-purple-300 px-1 lg:px-3 uppercase">Language</span>
          <select className="text-purple-200 px-1 py-0.5 rounded-lg bg-purple-900 bg-opacity-90" onChange={(e) => setSelectedLanguage(e.target.value)}>
            {GPT_LANG.map((lang) => (
              <option className="text-purple-200 bg-purple-900 bg-opacity-90" key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        </div>

      


        {/* <span className="text-red-700 text-center font-semibold">{error}</span> */}
      {/* <div className={maindivCSS}> */}
      
        {/* <div className="flex flex-rowpx-3 py-2  border-purple-900 border rounded-xl w-6/12 bg-purple-950 bg-opacity-55"> */}
        {/* <button className="text-lg font-semibold text-purple-300  px-4 uppercase" onClick={handleSearch}></button> */}
        <div className="flex relative justify-center items-center w-full">
        <img className="w-16  rounded-full" src={Click}></img>
        <img className="absolute w-24 opacity-100 hand " src="https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png"></img>
        </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </form>
   
      {result && 
      <div className="mb-20 rounded-xl flex flex-col w-12/12 py-14 bg-purple-950 bg-opacity-55 mx-14 px-20">
        <div className="flex flex-col pb-10 justify-center items-center">

        <span className="text-3xl pb-4  font-semibold opacity-80 tracking-wide text-orange-400 capitalize text-center">{name.current.value}Astro Insight</span>
        <img className="w-60" src="data:img/png;base64,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"></img>

        </div>

        
      <div className="result-container w-full" dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
      }

{/* <div className="mb-20 rounded-xl justify-center items-center flex flex-col w-12/12 py-10 bg-gradient-to-b from-black bg-purple-950 bg-opacity-30 mx-14 px-20">
        <span className="text-4xl font-bold   text-purple-300">Free Astro Kundli</span>
        <span className="text-2xl font-semibold pb-2 text-purple-300 pt-2 tracking-wider">(Get instant & accurate, Janam Kundli)</span>

         <img className="w-60" src="data:img/png;base64,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"></img>
    <div className="w-full flex flex-row justify-center items-center">
    <div className="w-2/12 ">
        <img className="w-96" src={Jyotish}></img>
      </div>
        <div className="flex w-10/12 flex-col justify-start py-4 items-start">
          <span className="text-purple-300 font-semibold tracking-wide  py-3 text-xl">Free Kundli Online - Get Your Detailed Birth Chart with Predictions</span>
        <p className="text-zinc-200 text-lg tracking-wider"> The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions.</p>
      </div>
      </div>
      
      </div>*/}
    </div> 
   
  );
};

export default AstroKundli;
