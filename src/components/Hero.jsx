import Explore from "./Explore";
import Header from "./Header";

const Hero =() => {
    return (
        <div className="w-12/12  relative">
              
               <img alt="bg"
        className="h-screen brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
            <Explore/>
        </div>
    )
}
export default Hero;