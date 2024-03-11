import { Link } from "react-router-dom";
import Card from "./Card";
import CallCard from "./CallCard";

export const ChatCardContainer = ({list})=>{
    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 py-4 lg:py-10 w-12/12">
           {
                list?.map(astro => <div className="md:w-6/12 sm:w-6/12 w-11/12 lg:w-[28%]" key={astro?.id}><Link className="" to={"/astroProfile/" + astro?.name}  ><Card info={astro} /></Link></div>)
            }
        </div>
    )
}


export const CallCardContainer = ({list})=>{
    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 py-4 lg:py-10 w-12/12">
           {
                list?.map(astro => <div className="md:w-6/12 sm:w-6/12 w-11/12 lg:w-[28%]" key={astro?.id}><Link className="" to={"/astroProfile/" + astro?.name}  ><CallCard info={astro} /></Link></div>)
            }
        </div>
    )
}