import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCall } from "../store/AstroSlice";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const useCall = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()


        const fetchData = async () => {
            try {
                const data = await fetch("https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get-list/filter?appId=4&businessId=1&consultantTypeId=1&timezone=Asia/Kolkata&pageNo=0&pageSize=18&version=1.19.09.23&serviceId=4&languageId=1&hardwareId=&countryCode=&sortByRating=false&sortByExperience=false&sortByPrice=false&sortByOrder=false&isDesc=false&isPoAstrologer=true&userId=34925941")
                const json = await data.json();
                console.log(json);
                dispatch(addCall(json?.content));
            } catch (error) {
                console.error("Error fetching data:", error);

                if (error.message === 'Failed to fetch') {
                    toast.error("Failed to fetch", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                      });
                    navigate("/error")
                    navigate("/error")
                    
                    
                }
            }
        }
        
    useEffect(()=>{
        fetchData()
    },[])
}
export default useCall;