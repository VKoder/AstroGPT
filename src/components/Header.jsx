import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo.png"
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearFollow, removeFollow } from "../store/followSlice";
import Fetch from "./Fetch";

const Header = () => {

    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const liCSS = "font-semibold uppercase tracking-wide text-sm pl-5 cursor-pointer"
    const dispatch = useDispatch()

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Logged out successfully.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
          }).catch((error) => {
            // An error happened.
          });

          dispatch(clearFollow())
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            //destructing the user object and pushing it to store
              const {uid, displayName, email} = user;
              console.log(displayName + email)
              dispatch(addUser({uid: uid, displayName: displayName,email:email}))
              navigate("/")  

            } else {
                navigate("/login")
                dispatch(removeUser())
            }
          });
    },[])
    
    
    return (
      <>
        <div className=" z-50 fixed w-full bg-zinc-950 bg-opacity-50 shadow-xl flex-row flex items-center justify-between mb-16 px-2 md:px-16 ">
            <div>
            {user ? (<Link to={"/"}> <img className="w-32 py-3 md:w-44 lg:w-56" src={Logo} alt="Logo"></img></Link>) : <img className="w-32 py-3 md:w-44 lg:w-56" src={Logo} alt="Logo"></img>}
            </div>
            <div className="text-white">
              {user && <><Link to={"/chat"}>  <span className={liCSS}>Chat</span></Link>
              <Link to={"/call"}>  <span className={liCSS}>Call</span></Link>
             <span onClick={handleSignOut} className={liCSS}>Signout</span>
             <Link to={"/following"} className={liCSS}><span>Following</span></Link>
             </>
             }
             {
                !user && <span>Login</span>
             }
            </div>
        </div>
        <Fetch/>
       </>
    )
}
export default Header;