// 

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAstroProfile } from "../store/AstroSlice";

const useAstroProfile = (id)=>{

    const dispatch = useDispatch()

    const fetchData = async () =>{
        const data = await fetch("https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get/by/slug/v2?languageId=1&timezone=Asia/Kolkata&hardwareId=&appVersionUser=1.19.09.23&businessId=1&appId=4&isOfferV3=&serviceId=4&slug="+ id +"&userId=")
        const json = await data.json();
        dispatch(addAstroProfile(json))
    }
    useEffect(()=>{
        fetchData()
    },[])
}
export default useAstroProfile;