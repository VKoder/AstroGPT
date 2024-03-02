import Explore from "./Explore";
import Header from "./Header";

const Hero =() => {
    return (
        <div className="w-12/12  relative">
               <img className="absolute top-0 left-0 -z-40 hidden md:block" src="https://www.webstrot.com/html/horoscope/dark_version/images/content/stars.jpg"></img>
           
            <Explore/>
        </div>
    )
}
export default Hero;