import Explore from "./Explore";
import Header from "./Header";

const Hero =() => {
    return (
        <div className="w-12/12  relative">
              
               <img
        className="absolute top-0 left-0 -z-40 hidden md:block"
        src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"
      ></img>
            <Explore/>
        </div>
    )
}
export default Hero;