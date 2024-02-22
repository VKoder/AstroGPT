import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCall } from "../store/AstroSlice";

const useCall = ()=>{

    const dispatch = useDispatch()

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fapi.consultant.list.astrotalk.com%2FAstroTalk%2FfreeAPI%2Fconsultant%2Fget-list%2Ffilter%3FappId%3D4%26businessId%3D1%26consultantTypeId%3D1%26timezone%3DAsia%2FKolkata%26pageNo%3D0%26pageSize%3D18%26version%3D1.19.09.23%26serviceId%3D3%26languageId%3D1%26hardwareId%3D%26countryCode%3D%26sortByRating%3Dfalse%26sortByExperience%3Dfalse%26sortByPrice%3Dfalse%26sortByOrder%3Dfalse%26isDesc%3Dfalse%26isPoAstrologer%3Dtrue")
        const json = await data.json();
        console.log(json)
        dispatch(addCall(json?.content))
    }
    useEffect(()=>{
        fetchData()
    },[])
}
export default useCall;