import { useDispatch, useSelector } from "react-redux";
import Explore from "./Explore";
import { useEffect, useState } from "react";
import TopAstro from "./TopAstro";
import SignSearch from "./SignSearch";
import Chatbot from "./Chatbot";
import bg from "../image/bg1.jpg";
import Coming from "./Coming";
import logo from "../image/Logo.png"
import { addBot } from "../store/configAppSlice";

const Hero = () => {
  const [topAstro, settopAstro] = useState();
  const dispatch = useDispatch()

  const Bot = useSelector((store) => store.configApp.Bot);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get-list/filter?appId=4&businessId=1&consultantTypeId=1&timezone=Asia/Kolkata&pageNo=0&pageSize=18&version=1.19.09.23&serviceId=4&languageId=1&hardwareId=&countryCode=&sortByRating=false&sortByExperience=false&sortByPrice=false&sortByOrder=false&isDesc=false&isPoAstrologer=true&userId=34925941"
    );
    const json = await data.json();
    settopAstro(json?.content);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleBot = ()=>{
    dispatch(addBot())
  }

  return (
    <div className="w-12/12  relative lg:px-0 2xl:px-44">
      <img
        alt="bg"
        className="h-screen brightness-75 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      {Bot && <Chatbot />}
      <Explore />

      <TopAstro list={topAstro} />
      <SignSearch />
      <div className=" lg:bottom-5 2xl:bottom-6 hidden md:block fixed 2xl:right-4 lg:right-7">
        <img src={logo} alt="logo" className="w-24 cursor-pointer" onClick={handleBot}></img>
      </div>
      <Coming />
    </div>
  );
};
export default Hero;
