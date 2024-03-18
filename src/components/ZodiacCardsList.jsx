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
    <div className="flex flex-col w-full lg:mt-0 lg:mb-10  justify-center items-center h-full relative">
      <img
        alt="cycle"
        className="hidden lg:block absolute  w-80 opacity-95"
        src={kundli}
      ></img>
      <img
        alt="cycle"
        className="absolute hidden lg:block -z-10 opacity-55 hand w-[450px]"
        src={load}
      ></img>
      <div className="flex justify-center lg:gap-10 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Aries"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Aries} value={"Aries"} img={Aries} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Aquarius"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Aquarius} value={"Aquarius"} img={Aquarius} />
        </Link>
      </div>
      <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Taurus"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Taurus} value={"Taurus"} img={Taurus} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Gemini"}>
          <ZodiacCard name={lang[LangKey].Gemini} value={"Gemini"} img={Gemini} />
        </Link>
      </div>
      <div className="flex justify-between items-center lg:py-3 w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Cancer"}>
          <ZodiacCard name={lang[LangKey].Cancer} value={"Cancer"} img={Cancer} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Leo"}>
          <ZodiacCard name={lang[LangKey].Leo} value={"Leo"} img={Leo} />
        </Link>
      </div>
      <div className="flex justify-between items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Virgo"}>
          <ZodiacCard name={lang[LangKey].Virgo} value={"Virgo"} img={Virgo} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Libra"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Libra} value={"Libra"} img={Libra} />
        </Link>
      </div>
      <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Scorpio"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Scorpio} value={"Scorpio"} img={Scorpio} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Pisces"}>
          {" "}
          <ZodiacCard name={lang[LangKey].Pisces} value={"Pisces"} img={Pisces} />
        </Link>
      </div>
      <div className="flex justify-center items-center py-3  lg:gap-10 w-full h-full flex-wrap">
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Capricorn"}>
          <ZodiacCard name={lang[LangKey].Capricorn} value={"Capricorn"} img={Capricorn} />
        </Link>
        <Link className="lg:w-3/12 w-full" to={"/horoscope/Sagittarius"}>
          {" "}
          <ZodiacCard
            name={lang[LangKey].Sagittarius}
            value={"Sagittarius"}
            img={Sagittarius}
          />
        </Link>
      </div>
    </div>
  );
};

export default ZodiacCardsList;
