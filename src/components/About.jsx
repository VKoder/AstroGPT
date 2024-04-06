import React from "react";
import bg from "../image/bg1.jpg"


const About = () => {
    const liCSS = "text-lg font-normal text-purple-200 opacity-95"
    const ptCSS = "text-purple-300  pt-8 text-xl tracking-wide font-medium"
  return (
    <div className="relative w-12/12">
      <img
        alt="bg"
        className="h-screen w-full md:scale-100 scale-x-[3] brightness-50 fixed top-0 left-0 -z-40"
        src={bg}
      ></img>
      <div className="flex justify-center items-center flex-col mx-20 py-28">
        <div className="flex flex-col justify-start items-start">
            <span className="text-3xl font-bold text-purple-400">ABOUT US</span>
            <span className="text-purple-200 opacity-90 pt-4 text-[17px] tracking-wide font-normal">AstroGPT is a highly performant, large scalable astrology web app, ready for production, empowered with the superpowers of ChatGPT. This cutting-edge platform seamlessly blends traditional astrological practices with advanced technologies, offering users a unique and immersive astrological experience. With a focus on scalability, performance, and user satisfaction, AstroGPT boasts an array of innovative features designed to enhance the user experience and provide invaluable insights into the mystical world of astrology.</span>
        </div>
        <div className="flex flex-col justify-start pt-14 items-start">
            <span className="text-3xl font-bold text-purple-400">Key Features:</span>
           
            
           <span className={ptCSS}> Kundli Access:</span><li className={liCSS}> Enabled users to access their Kundli, providing them with valuable insights into their astrological profiles and characteristics.</li>

           <span className={ptCSS}> Personalized Daily Horoscope:</span><li className={liCSS}> Delivered personalized daily horoscope readings to users, offering them guidance and predictions tailored to their individual zodiac signs.</li>

           <span className={ptCSS}>Astro Chatbot Powered by ChatGPT:</span><li className={liCSS}> Integrated an intelligent chatbot powered by ChatGPT, allowing users to interact with the app and receive instant responses to their astrological queries and concerns.</li>

           <span className={ptCSS}>Scalable Architecture: </span><li className={liCSS}>Engineered a robust and scalable architecture to accommodate a large user base and handle extensive data processing without compromising performance.</li>

           <span className={ptCSS}>Key Features: </span><li className={liCSS}>Implemented essential features such as Kundli access, personalized daily horoscope, and an astro chatbot powered by ChatGPT, catering to diverse user needs.</li>

           <span className={ptCSS}>   OpenAI Integration:</span><li className={liCSS}> Integrated OpenAI API for dynamic tasks, enhancing the app's functionality and responsiveness to user interactions.</li>

           <span className={ptCSS}>Optimization Techniques:</span><li className={liCSS}>  Utilized lazy loading and chunking techniques to optimize loading times and improve overall app responsiveness, resulting in a 20% reduction in loading times and a 15% improvement in performance.</li>

           <span className={ptCSS}> API Management:</span><li className={liCSS}>  Efficiently managed over 10 API calls, leveraging memoization to prevent unnecessary calls and streamline data retrieval processes.</li>

           <span className={ptCSS}> Multilingual Support:</span><li className={liCSS}> Implemented advanced multilingual features, covering 90% of the app's content in 7 different languages, enhancing accessibility and user experience for a global audience.</li>

           <span className={ptCSS}>  Authentication:</span><li className={liCSS}>  Integrated Google Firebase for secure authentication, ensuring access only for authenticated users and safeguarding sensitive user data.</li>

           <span className={ptCSS}> Real-time Communication: </span><li className={liCSS}> Incorporated AstroTalk live API for real-time communication with astrologers, facilitating seamless interaction and consultation via the app's chatbot feature.</li>

           <span className={ptCSS}> Styling and Responsiveness: </span><li className={liCSS}>Utilized Tailwind for styling, ensuring a visually appealing user interface and 100% responsiveness across all devices, enhancing user engagement and satisfaction.</li>

           <span className={ptCSS}>Ongoing Development:</span><li className={liCSS}> Continuously developing the app with plans to implement advanced functionalities, including dynamic search using debouncing to optimize API calls.</li>

           <span className={ptCSS}> Proof of Work: </span><li className={liCSS}> Documented the journey and achievements of AstroGPT on LinkedIn, providing insights into the development process and milestones achieved. Interested users can explore the live demo and access the AstroGPT GitHub repository for further information and collaboration opportunities.</li>




     

        </div>
      </div>
    </div>
  );
};

export default About;
