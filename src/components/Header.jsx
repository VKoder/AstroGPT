import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearFollow, removeFollow } from "../store/followSlice";
import Fetch from "./Fetch";
import { MULTI_LANG } from "../utils/constants";
import { addForm, addLang, removeForm } from "../store/configAppSlice";
import LoginForm from "./LoginForm";

const Header = () => {
  const user = useSelector((store) => store.user);
  const form = useSelector((store) => store.configApp.form);
  const navigate = useNavigate();
  const liCSS =
    "font-semibold uppercase tracking-wide text-sm px-2 cursor-pointer  pb-2";
  const dispatch = useDispatch();

  const handleform = () => {
    toast.info("Scroll to Top for Login", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
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

  return (
    <>
      <div className=" z-50 fixed w-full mb-20 bg-gradient-to-b from-black  bg-opacity-90  py-1 flex-row flex items-center justify-between  px-2 md:px-10 ">
        <div>
          <Link to={"/"}>
            {" "}
            <img
              className="w-32 py-3 md:w-44 lg:w-48"
              src={Logo}
              alt="Logo"
            ></img>
          </Link>
        </div>
        <div className="text-white hidden lg:block">
          <Link to={"/chat"}>
            {" "}
            <span className={liCSS }>Chat</span>
          </Link>
          <Link to={"/call"}>
            {" "}
            <span className={liCSS}>Call</span>
          </Link>
          {!user ? (
            <span onClick={handleform} className={liCSS}>
              Login
            </span>
          ) : (
            <span onClick={handleSignOut} className={liCSS}>
              Signout
            </span>
          )}

          <Link to={"/following"} className={liCSS}>
            <span>Following</span>
          </Link>
          <Link to={"/chatbot"} className={liCSS}>
            <span>Chat bot</span>
          </Link>
          <Link to={"/kundligpt"} className={liCSS}>
            <span>Kundli GPT</span>
          </Link>
          {
            user && <span>{user?.displayName}</span>
          }
        </div>


        <div>
          <select
            className="pl-1 cursor-pointer py-2 mx-2 text-purple-200 bg-purple-800 rounded-md bg-opacity-80"
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
