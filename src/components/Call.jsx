import Header from "./Header";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerCard from "./ShimmerCard";
import useCall from "../custom hooks/useCall";

const Call = () => {
    
    useCall()
    const callList = useSelector(store => store.astro.callList)
    if (!callList) return <ShimmerCard/>
    return (
        <div  className="bg-[#E6E6FA] h-full w-12/12">
           <Header/>
            <CardContainer list={callList} />
        </div>
    )
}
 export default Call;