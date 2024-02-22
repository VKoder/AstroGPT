import { useSelector } from "react-redux";
import useAstroProfile from "../custom hooks/useAstroProfile";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ShimmerCard from "./ShimmerCard";
// import useComments from "../custom hooks/useComments";
import AstroProfileTop from "./AstroProfile/AstroProfileTop";
import { PROFILE_BG, PROFILE_IMG } from "../utils/constants";

const AstroProfile = () => {


    const { id } = useParams()
    useAstroProfile(id)
 
    const astroProfile = useSelector((store) => store.astro.astroProfile);


    if (!astroProfile) {
        return <ShimmerCard/>;
    }
    const { data } = astroProfile
    console.log(data)

    return (
        <div>
            <Header/>
            <div className="w-12/12  flex flex-col mx-4 mt-4 lg:mx-16">
                <AstroProfileTop data={data}/>
               
                <div className="rounded-2xl bg-[#F5F5FF] flex flex-col px-10 py-10 border bg- w-full mt-4 my-20">
                    <div className="w-full flex gap-4 flex-col">
                        <span className="text-3xl uppercase  font-bold">About me<span className="text-xl text-purple-400 font-normal pl-2 italic ">({data?.shortBio})</span></span>
                        <span className="text-lg tracking-wide font-normal text-gray-600">{data?.longBio}</span>
                    </div>
                    <div className="py-4">
                        <span className="text-xl  font-bold">Problem Area: </span>
                        <span className="text-lg   px-4 py-2 rounded-3xl italic">{data?.problemArea}</span>
                    </div>
                    <div className="w-full pt-4 gap-4 flex flex-row">
                     
                        {
                            data?.album.map((img)=>
                            <div className="rounded-2xl bg-center border-2 shadow-md w-[300px] h-[280px]  overflow-hidden">
                                <img className="w-full" src={img?.url} alt="img"></img>
                                </div>
                            )
                        }
                        
                    </div>
                </div>  
                {/* <AstroProfieBottom/> */}
            </div>
        </div>
    );
};
export default AstroProfile;