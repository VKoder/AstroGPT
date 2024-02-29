import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo.png"
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";


const Header = () => {

    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const liCSS = "font-semibold uppercase tracking-wide text-sm pl-5 cursor-pointer"
    const dispatch = useDispatch()

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
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
        <div className="bg-purple-600 z-100 flex-row flex items-center justify-between w-12/12 px-2 md:px-16 shadow-2xl">
            <div>
            {user ? (<Link to={"/"}> <img className="w-32 md:w-44 lg:w-56" src={Logo} alt="Logo"></img></Link>) : <img className="w-32 md:w-44 lg:w-56" src={Logo} alt="Logo"></img>}
            </div>
            <div className="text-white  hidden md:block">
              {user && <><Link to={"/chat"}>  <span className={liCSS}>Chat</span></Link>
              <Link to={"/call"}>  <span className={liCSS}>Call</span></Link>
             <span onClick={handleSignOut}>Signout</span></>}
             {
                !user && <span>Login</span>
             }
            </div>
        </div>
    )
}
export default Header;