import React from "react";
import bg from "../image/bg1.jpg"

const About = () => {
  return (
    <div className="relative w-12/12">
      <img
        alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] brightness-50 fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      <div className="flex justify-center items-center flex-col mx-20 pt-28">
        <div className="flex flex-col justify-start items-start">
            <span className="text-3xl font-bold text-purple-300">ABOUT US</span>
            <span className="text-purple-200 font-normal">AstroGPT is a highly performant, large scalable astrology web app, ready for production, empowered with the superpowers of ChatGPT. This cutting-edge platform seamlessly blends traditional astrological practices with advanced technologies, offering users a unique and immersive astrological experience. With a focus on scalability, performance, and user satisfaction, AstroGPT boasts an array of innovative features designed to enhance the user experience and provide invaluable insights into the mystical world of astrology.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
