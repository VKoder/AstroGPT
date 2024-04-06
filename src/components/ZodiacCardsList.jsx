import React from "react";
import ZodiacCard from "./ZodiacCard";
import Aries from "../image/Sign/sign1.svg";
import Taurus from "../image/Sign/sign2.svg";
import Gemini from "../image/Sign/sign3.svg";
import Cancer from "../image/Sign/sign4.svg";
import Leo from "../image/Sign/sign5.svg";
import Virgo from "../image/Sign/sign6.svg";
import Libra from "../image/Sign/sign7.svg";
import Scorpio from "../image/Sign/sign8.svg";
import Sagittarius from "../image/Sign/sign9.svg";
import Capricorn from "../image/Sign/sign10.svg";
import Aquarius from "../image/Sign/sign11.svg";
import Pisces from "../image/Sign/sign12.svg";
import { Link } from "react-router-dom";
import kundli from "../image/kundli rishi.webp";
import load from "../image/loading.png";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const ZodiacCardsList = () => {

  const LangKey = useSelector(store => store.configApp.lang)

  return (
    <div className="flex flex-col w-full lg:mt-0 lg:mb-10 2xl:mb-16  justify-center items-center h-full relative">
      <img
        alt="cycle"
        className="hidden lg:block absolute 2xl:w-96 lg:w-80 opacity-95"
        src={kundli}
      ></img>
      <img
        alt="cycle"
        className="absolute hidden lg:block -z-10 opacity-55 hand 2xl:w-[550px] lg:w-[450px]"
        src={load}
      ></img>
      <div className="flex justify-center lg:gap-10 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12 2xl:w-[20%] w-full" to={"/horoscope/Aries"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Aries} value={"Mar 21 - Apr 19"} img={Aries} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Aquarius"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Aquarius} value={"Jan 20 - Feb 18"} img={Aquarius} />
        </Link>
      </div>
      <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Taurus"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Taurus} value={"Apr 20 - May 20"} img={Taurus} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Gemini"}>
          <ZodiacCard name={lang[LangKey].Gemini} value={"May 21 - Jun 20"} img={Gemini} />
        </Link>
      </div>
      <div className="flex justify-between items-center lg:py-3 w-full h-full flex-wrap">
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Cancer"}>
          <ZodiacCard name={lang[LangKey].Cancer} value={"Jun 21 - Jul 22"} img={Cancer} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Leo"}>
          <ZodiacCard name={lang[LangKey].Leo} value={"Jul 23 - Aug 22"} img={Leo} />
        </Link>
      </div>
      <div className="flex justify-between items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Virgo"}>
          <ZodiacCard name={lang[LangKey].Virgo} value={"Aug 23 - Sep 22"} img={Virgo} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Libra"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Libra} value={"Sep 23 - Oct 22"} img={Libra} />
        </Link>
      </div>
    

      <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Scorpio"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Scorpio} value={"Oct 23 - Nov 21"} img={Scorpio} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Pisces"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Pisces} value={"Feb 19 - Mar 20"} img={Pisces} />
        </Link>
      </div>
      <div className="flex justify-center items-center py-3  lg:gap-10 w-full h-full flex-wrap">
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Capricorn"}>
          <ZodiacCard name={lang[LangKey].Capricorn} value={"Dec 22 - Jan 19"} img={Capricorn} />
        </Link>
        <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Sagittarius"}>
          {" "}
          <ZodiacCard
            name={lang[LangKey].Sagittarius}
            value={"Nov 22 - Dec 21"}
            img={Sagittarius}
          />
        </Link>
      </div>
    </div>
  );
};

export default ZodiacCardsList;
