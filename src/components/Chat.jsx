import Header from "./Header";
import useChat from "../custom hooks/useChat";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerCard from "./ShimmerCard";

const Chat = () => {
    
    useChat()
    const chatList = useSelector(store => store.astro.chatList)
    if (!chatList) return <ShimmerCard/>
    return (
        <div  className="bg-[#E6E6FA] h-full w-12/12">
           <Header/>
           <div >
            <CardContainer list={chatList} />
            </div>
        </div>
    )
}
 export default Chat;