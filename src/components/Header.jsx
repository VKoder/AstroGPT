import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo text.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearFollow, removeFollow } from "../store/followSlice";
import { MULTI_LANG } from "../utils/constants";
import { addBot, addForm, addLang, removeForm } from "../store/configAppSlice";
import LoginForm from "./LoginForm";
import lang from "../utils/langConstants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  const Langkey = useSelector((store)=> store.configApp.lang);

  const navigate = useNavigate();
  const liCSS =
    "font-semibold focus:text-purple-300  hover:text-purple-300 uppercase tracking-wide text-sm 2xl:text-lg lg:text-sm cursor-pointer focus:border-purple-400 hover:border-purple-400 border-b-2 border-transparent lii pb-1";
  const dispatch = useDispatch();

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
        // An error happened.
      });

    dispatch(clearFollow());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //destructing the user object and pushing it to store
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        dispatch(removeForm())
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLang = (e) => {
    dispatch(addLang(e.target.value));
  };

  const handlebot =()=>{
    dispatch(addBot())
  }
  return (
    <>
      <div className=" z-50  fixed w-full mb-20 bg-gradient-to-b from-black  bg-opacity-100  py-1 flex-row flex items-center justify-between px-3 2xl:px-10 lg:px-6 md:px-10 ">
        <div>
          <Link to={"/"}>
            {" "}
            <img
              className="w-32  lg:py-3 py-3 2xl:py-7 2xl:w-72 md:w-44 lg:w-48"
              src={Logo}
              alt="Logo"
            ></img>
          </Link>
        </div>
        <div className="text-white lg:gap-5 gap-5 2xl:gap-8 justify-center items-center hidden lg:flex">
          <Link to={"/chat"} className={liCSS }>
            {" "}
            <span >{lang[Langkey].CHAT}</span>
          </Link>
          <Link to={"/call"} className={liCSS}>
            {" "}
            <span >{lang[Langkey].CALL}</span>
          </Link>
          {!user ? (
            <span onClick={handleform} className={liCSS}>
              {lang[Langkey].LOGIN}
            </span>
          ) : (
            <span onClick={handleSignOut} className={liCSS}>
              {lang[Langkey].SIGNOUT}
            </span>
          )}

          <Link to={"/following"} className={liCSS}>
            <span>{lang[Langkey].FOLLOWING}</span>
          </Link>
          <Link to={"/about"} className={liCSS}>
            <span>{lang[Langkey].ABOUT}</span>
          </Link>
            
          
          <Link to={"/kundligpt"} className={liCSS}>
            <span>{lang[Langkey].KUNDLIGPT}</span>
          </Link>
          {
            // user && <span>{user?.displayName}</span>
          }
        </div>


        <div>
          <select
            className="lg:pl-1 pl-0.5 cursor-pointer lg:text-base text-sm py-1 lg:py-1.5 lg:mx-2 mx-0.5 text-purple-200 bg-purple-800 rounded-md bg-opacity-80"
            onChange={handleLang}
          >
            {MULTI_LANG.map((lang) => (
              <option
                className=""
                key={lang?.identifier}
                value={lang?.identifier}
              >
                {lang?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {form && (
        <div className="z-20 absolute top-0 w-full">
          <LoginForm />
        </div>
      )}
    </>
  );
};
export default Header;
