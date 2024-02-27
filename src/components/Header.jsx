import { Link } from "react-router-dom";
import Logo from "../image/Logo.png"

const Header = () => {

    const liCSS = "font-semibold uppercase tracking-wide text-sm pl-5 cursor-pointer"
    // E34234
    
    return (
        <div className="bg-purple-900 z-50 flex-row flex items-center justify-between w-12/12 px-2 md:px-16 shadow-2xl">
            <div>
             <Link to={"/"}> <img className="w-32 md:w-44 lg:w-56" src={Logo} alt="Logo"></img></Link>
            </div>
            <div className="text-white  hidden md:block">
                <span className={liCSS}>About</span>
                <span className={liCSS}>Login</span>
            </div>
        </div>
    )
}
export default Header;