import { useSelector } from "react-redux";
import { CallCardContainer } from "./CardContainer";
import ShimmerList from "../shimmer/ShimmerList";
import useCall from "../custom hooks/useCall";
import { useState } from "react";
import lang from "../utils/langConstants";
import Chatbot from "./Chatbot";
import bg from "../image/bg1.jpg";

const Call = () => {
  const [search, setSearch] = useState("");
  const [mainCallList, setMaincallList] = useState(null);

  const Langkey = useSelector((store) => store.configApp.lang);
  const Bot = useSelector((store) => store.configApp.Bot);

  useCall();
  const callList = useSelector((store) => store.astro.callList);

  if (!callList) return <ShimmerList />;

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filteredList = callList.filter((name) =>
      name.slug.toLowerCase().includes(searchTerm)
    );
    setMaincallList(filteredList);
  };

  const btnCSS =
    "lg:text-base active:bg-purple-900 focus:bg-purple-800 active:bg-purple-800 active:text-purple-100 bg-purple-600 bg-opacity-10 hover:bg-purple-800   transition-all text-sm border px-4  lg:px-4 py-2 lg:py-1.5   border-purple-600 text-purple-300 font-normal rounded-3xl sm:rounded-full cursor-pointer";
  return (
    <div className="relative w-12/12  ">
      {Bot && <Chatbot />}
      <img
        alt="bg"
        className="h-screen w-full brightness-50 md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      <div className="lg:pt-6 pt-3 px-4 lg:px-20 md:px-16 flex flex-col justify-center items-start">
        <div className="w-full flex lg:flex-row flex-col justify-between mt-20 lg:mb-4  mb-3 items-start lg:items-center">
          <span className="text-3xl lg:text-4xl text-purple-200 font-bold">
            {lang[Langkey].call}
          </span>
          <div className="flex pt-3 w-full  lg:w-4/12 relative items-center">
            <input
              type="text"
              placeholder={lang[Langkey].search}
              value={search}
              onChange={handleSearch}
              className="border outline-none w-full  placeholder-purple-800 placeholder-opacity-50 text-base lg:text-lg rounded-full bg-purple-300 text-purple-950 outline-1 outline-purple-700 border-purple-400 pl-9  py-0.5  lg:py-1.5 px-2"
            ></input>
            <i className="ri-search-line text-purple-800  absolute text-sm lg:text-base left-3"></i>
          </div>
        </div>

        <div className="flex w-full whitespace-nowrap overflow-x-scroll  no-scrollbar justify-start items-center pt-0.5 lg:pt-2 gap-2 lg:gap-4 flex-row">
          <span className={btnCSS}>
            <i className="ri-filter-2-line pr-1"></i>
            {lang[Langkey].filter}
          </span>
          <button
            className={btnCSS}
            onClick={() => {
              setMaincallList(callList);
            }}
          >
            {lang[Langkey].all}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let top = callList.filter((top) => top.rating === 5);
              setMaincallList(top);
            }}
          >
            {lang[Langkey].topRated}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let off = callList.filter((off) => off.isShowOffer === true);
              setMaincallList(off);
            }}
          >
            {lang[Langkey].offer}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let vedic = callList.filter((vedic) =>
                vedic.skill.includes("Vedic")
              );
              setMaincallList(vedic);
            }}
          >
            {lang[Langkey].vedic}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let num = callList.filter((num) =>
                num.skill.includes("Numerology")
              );
              setMaincallList(num);
            }}
          >
            {lang[Langkey].numerology}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let Tarot = callList.filter((Tarot) =>
                Tarot.skill.includes("Tarot")
              );
              setMaincallList(Tarot);
            }}
          >
            {lang[Langkey].tarot}
          </button>

          <button
            className={btnCSS}
            onClick={() => {
              let FaceReading = callList.filter((FaceReading) =>
                FaceReading.skill.includes(" Face Reading")
              );
              setMaincallList(FaceReading);
            }}
          >
            {lang[Langkey].faceReading}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let Vastu = callList.filter((Vastu) =>
                Vastu.skill.includes("Vastu")
              );
              setMaincallList(Vastu);
            }}
          >
            {lang[Langkey].vastu}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let LifeCoach = callList.filter((LifeCoach) =>
                LifeCoach.skill.includes("Life Coach")
              );
              setMaincallList(LifeCoach);
            }}
          >
            {lang[Langkey].lifeCoach}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let Psychologist = callList.filter((Psychologist) =>
                Psychologist.skill.includes("Psychologist")
              );
              setMaincallList(Psychologist);
            }}
          >
            {lang[Langkey].psychologist}
          </button>
          <button
            className={btnCSS}
            onClick={() => {
              let Palmistry = callList.filter((Palmistry) =>
                Palmistry.skill.includes("Palmistry")
              );
              setMaincallList(Palmistry);
            }}
          >
            {lang[Langkey].palmistry}
          </button>
        </div>
      </div>

      <div>
        <CallCardContainer list={mainCallList || callList} />
      </div>
    </div>
  );
};

export default Call;
