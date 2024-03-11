import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBot, addForm } from '../store/configAppSlice';
import { auth } from '../utils/firebase';
import { Bounce, toast } from 'react-toastify';
import { clearFollow } from '../store/followSlice';

const FootIcons = () => {

    const dispatch = useDispatch()  
    const user = useSelector(store => store.user)  

    const handleform = () => {
        dispatch(addForm());
        
      };
    
      const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            toast.success("Logged out successfully.", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          })
          .catch((error) => {
            
          });
    
        dispatch(clearFollow());
      };

      const handlebot =()=>{
        dispatch(addBot())
      }

    const liCSS =
    "font-light uppercase tracking-wide text-[10px]  text-purple-200 cursor-pointer  hover:text-purple-400 focus:text-purple-400  ";

  return (
    <div className=" flex flex-row foot  gap-1 justify-evenly px-4 py-2 items-center bg-purple-950 fixed w-full lg:hidden bottom-0 z-50">
    <Link to={"/"}>
      {" "}
      <div className='flex flex-col justify-center  items-center px-2'>
      <span><i className="ri-home-4-fill text-lg  hover:text-purple-400 focus:text-purple-400  text-purple-100"></i></span>
      <span className={liCSS }>Home</span>
      </div>
    </Link>
   
    <Link to={"/following"} className={liCSS}>
    <div className='flex flex-col justify-center items-center px-2'>
      <span><i className="ri-user-fill text-lg    hover:text-purple-400 focus:text-purple-400  text-purple-100"></i></span>
      <span className={liCSS}>Following</span>
      </div>
    </Link>
    
    <div className='flex flex-col justify-center items-center px-2' onClick={handlebot}>
      <span><i className="ri-robot-2-fill text-lg  hover:text-purple-400 focus:text-purple-400  text-purple-100"></i></span>
      <span className={liCSS}>Bot</span>
      </div>
   
    <Link to={"/kundligpt"} className={liCSS}>
    <div className='flex flex-col justify-center  items-center px-2'>
      <span><i className="ri-calendar-fill text-lg  hover:text-purple-400 focus:text-purple-400 text-purple-100"></i></span>
      <span className={liCSS}>Kundli</span>
      </div>
    </Link>
    {user ? (
         <div className='flex flex-col justify-center  items-center px-2' onClick={handleSignOut}>
             <span><i className="ri-logout-box-fill text-lg  hover:text-purple-400 focus:text-purple-400 text-purple-100"></i></span>
            <span  className={liCSS}>
            Signout
            </span>
            </div>
          ) : (
            <div className='flex flex-col justify-center  items-center px-2' onClick={handleform}>
            <span><i className="ri-login-box-fill text-lg  hover:text-purple-400 focus:text-purple-400 text-purple-100"></i></span>
            <span   className={liCSS}>
            Login
            </span>
            </div>
          )}
  </div>
  )
}

export default FootIcons
