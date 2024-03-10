import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FootIcons = () => {

    const dispatch = useDispatch()  
    const user = useSelector(store => store.user)  

    const liCSS =
    "font-light uppercase tracking-wide text-[10px] text-purple-200 cursor-pointer  ";

  return (
    <div className=" flex flex-row  gap-1 justify-evenly px-4 py-2 items-center bg-purple-950 bg-opacity-95 fixed w-full lg:hidden bottom-0 z-50">
    <Link to={"/chat"}>
      {" "}
      <div className='flex flex-col justify-center  hover:text-purple-400 focus:text-purple-400  items-center px-2'>
      <span><i className="ri-chat-3-fill text-lg text-purple-100"></i></span>
      <span className={liCSS }>Chat</span>
      </div>
    </Link>
    <Link to={"/call"}>
      {" "}
      <div className='flex flex-col justify-center  hover:text-purple-400 focus:text-purple-400 items-center px-2'>
      <span><i className="ri-phone-fill text-lg  text-purple-100"></i></span>
      <span className={liCSS}>Call</span>
      </div>
    </Link>
   
    <Link to={"/following"} className={liCSS}>
    <div className='flex flex-col justify-center  hover:text-purple-400 focus:text-purple-400 items-center px-2'>
      <span><i className="ri-user-fill text-lg  text-purple-100"></i></span>
      <span className={liCSS}>Following</span>
      </div>
    </Link>
    <Link to={"/chatbot"} className={liCSS}>
    <div className='flex flex-col justify-center  hover:text-purple-400 focus:text-purple-400 items-center px-2'>
      <span><i className="ri-robot-2-fill text-lg  text-purple-100"></i></span>
      <span className={liCSS}>Astro Bot</span>
      </div>
    </Link>
    <Link to={"/kundligpt"} className={liCSS}>
    <div className='flex flex-col justify-center  hover:text-purple-400 focus:text-purple-400 items-center px-2'>
      <span><i className="ri-calendar-line text-lg  text-purple-100"></i></span>
      <span className={liCSS}>Kundli GPT</span>
      </div>
    </Link>
    {
      user && <span>{user?.displayName}</span>
    }
  </div>
  )
}

export default FootIcons
