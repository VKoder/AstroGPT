import useChat from "../custom hooks/useChat";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerList from "../shimmer/ShimmerList";
import { useState } from "react";
import lang from "../utils/langConstants";

const Chat = () => {
    
    const [search, setSearch] = useState(""); 
    const [mainchatList, setMainchatList] = useState(null); 

    const Langkey = useSelector(store => store.configApp.lang)

    
    useChat()
    const chatList = useSelector(store => store.astro.chatList)
    if (!chatList) return <ShimmerList/>


    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        
       
        const filteredList = chatList.filter(name => name.slug.toLowerCase().includes(searchTerm));
        setMainchatList(filteredList);
      
    };

    const btnCSS = "lg:text-base hover:bg-purple-800 active:text-gray-400 active:bg-purple-950 transition-all text-sm border px-2 lg:px-4 py-0.5 lg:py-1.5 text-purple-200  border-purple-600 text-zinc-600 font-normal rounded-full cursor-pointer"

    return (
        <div  className="relative w-12/12 ">
            <img className=" fixed top-0 left-0 -z-40" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"></img>
           <div className="lg:pt-6 pt-3 px-4 lg:px-20 flex flex-col justify-center  items-start">
            <div className="w-full flex lg:flex-row flex-col justify-between mt-20 mb-4 items-start lg:items-center">
                <span className="text-2xl lg:text-4xl text-purple-200 font-bold">{lang[Langkey].chat}</span>
                <div className="flex py-2 relative items-center">
                    <input 
                        type="text" 
                        placeholder={lang[Langkey].search}
                        value={search} 
                        onChange={handleSearch}
                        className="border outline-none w-80 placeholder-purple-800 placeholder-opacity-50 text-base lg:text-lg rounded-full bg-purple-300 text-purple-950 outline-1 outline-purple-700 border-purple-400 pl-9  py-0.5  lg:py-1.5 px-2"
                    ></input>
                    <i className="ri-search-line text-purple-800  absolute text-sm lg:text-base left-3"></i>
                </div>
            </div>

            <div className="flex w-full whitespace-nowrap overflow-x-scroll  no-scrollbar justify-start items-center pt-0.5 lg:pt-2 gap-2 lg:gap-4 flex-row">
                    <span className={btnCSS}><i className="ri-filter-2-line pr-1"></i>{lang[Langkey].filter}</span>
                    <button className={btnCSS} onClick={()=>{
                        setMainchatList(chatList)}
                    }>{lang[Langkey].all}</button>
                    <button className={btnCSS} onClick={()=>{
                        let top = chatList.filter((top)=> top.rating === 5)
                        setMainchatList(top)
                    }}>{lang[Langkey].topRated}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let off = chatList.filter((off)=> off.isShowOffer === true)
                        setMainchatList(off)
                    }}>{lang[Langkey].offer}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let vedic = chatList.filter((vedic)=> vedic.skill.includes("Vedic"))
                        setMainchatList(vedic)
                    }}>{lang[Langkey].vedic}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let num = chatList.filter((num)=> num.skill.includes("Numerology"))
                        setMainchatList(num)
                    }}>{lang[Langkey].numerology}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Tarot = chatList.filter((Tarot)=> Tarot.skill.includes("Tarot"))
                        setMainchatList(Tarot)
                    }}>{lang[Langkey].tarot}</button>
                   
                    <button className={btnCSS}  onClick={()=>{
                        let  FaceReading = chatList.filter(( FaceReading)=>  FaceReading.skill.includes(" Face Reading"))
                        setMainchatList(FaceReading)
                    }}>{lang[Langkey].faceReading}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Vastu = chatList.filter((Vastu)=> Vastu.skill.includes("Vastu"))
                        setMainchatList(Vastu)
                    }}>{lang[Langkey].vastu}</button>
                    <button className={btnCSS}  onClick={()=>{
                        let LifeCoach = chatList.filter((LifeCoach)=> LifeCoach.skill.includes("Life Coach"))
                        setMainchatList(LifeCoach)
                    }}>{lang[Langkey].lifeCoach}</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Psychologist = chatList.filter((Psychologist)=> Psychologist.skill.includes("Psychologist"))
                        setMainchatList(Psychologist)
                    }}>{lang[Langkey].psychologist}</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Palmistry = chatList.filter((Palmistry)=> Palmistry.skill.includes("Palmistry"))
                        setMainchatList(Palmistry)
                    }}>{lang[Langkey].palmistry}</button>


                    
                </div>
            </div>
           <div >
            <CardContainer list={mainchatList || chatList} />
            </div>
        </div>
    )
}
 export default Chat;