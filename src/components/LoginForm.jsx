import React, { useRef, useState } from "react";
import { checkValidData, checkValidData2 } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import lang from "../utils/langConstants";
import { addForm } from "../store/configAppSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [signIn, setsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const Langkey = useSelector((store) => store.configApp.lang);

  const handleToggle = () => {
    setsignIn(!signIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Welcome to AstroGPT!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          seterrorMessage("Incorrect Details Please Try Again");
        }
      });
     
  };
  const handleSignUp = () => {
    const message = checkValidData2(
      name.current.value,
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);

    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          })
          .catch((error) => {
            seterrorMessage(error.message);
          });
        toast.success("Welcome to AstroGPT!", {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorMessage);
      });
     
  };

  const handleform =()=>{
    dispatch(addForm())
  }

  return (
    <div className="h-screen w-full fixed flex justify-center px-6 lg:py-20 left-0 items-center z-40 bg-purple-950 transition-all bg-opacity-50">
      <div className="bg-zinc-950 shadow-sm  w-full px-10  py-10 lg:shadow-purple-800 rounded-2xl lg:mt-20 transition-all bg-opacity-90  sm:w-[70%] lg:w-[33%]">
      <form onSubmit={(e) => e.preventDefault()} className="relative  flex flex-col">
        {signIn ? (
          <h2 className="py-4 text-4xl text-purple-200 font-bold">
            {lang[Langkey].signIn}
          </h2>
        ) : (
          <h2 className="py-4 text-4xl text-purple-200 font-bold">
            {lang[Langkey].signUp}
          </h2>
        )}
        {!signIn && (
          <input
            className="px-2 py-1.5  hover:border-b-purple-400 outline-none lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg"
            type="text"
            placeholder={lang[Langkey].name}
            ref={name}
          ></input>
        )}
        <input
          className="px-2 hover:border-b-purple-400 outline-none py-1.5 lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg"
          type="email"
          placeholder={lang[Langkey].email}
          ref={email}
        ></input>
        <input
          className="px-2 py-1.5  hover:border-b-purple-400 outline-none lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg"
          type="password"
          placeholder={lang[Langkey].password}
          ref={password}
        ></input>
        <span className="text-red-700 font-semibold">{errorMessage}</span>
        {signIn ? (
          <button
            type="submit"
            className="lg:px-8 px-4 hover:bg-opacity-50 border-2  shadow-md  shadow-purple-950 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
            onClick={handleSignIn}
          >
            {lang[Langkey].signIn}
          </button>
        ) : (
          <button
            type="submit"
            className="lg:px-8 px-4 hover:bg-opacity-50 border-2  shadow-md  shadow-purple-950 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
            onClick={handleSignUp}
          >
            {lang[Langkey].signUp}
          </button>
        )}
        {!signIn ? (
          <div className="flex flex-row">
            <span className="text-gray-300 py-1.5 text-xs lg:text-sm   lg:py-3">
              {lang[Langkey].alreadyAcc}
            </span>
            <span
              className="text-gray-300 py-1.5 text-xs lg:text-sm cursor-pointer lg:pl-1.5 pl-1  lg:py-3"
              onClick={handleToggle}
            >
              {lang[Langkey].signIn}
            </span>
          </div>
        ) : (
          <div className="flex flex-row">
            <span className="text-gray-300 py-1.5 text-xs lg:text-sm  lg:py-3">
              {lang[Langkey].newtoAstroGPT}
            </span>
            <span
              className="text-gray-300 py-1.5 text-xs lg:text-sm lg:pl-1.5 pl-1 cursor-pointer lg:py-3"
              onClick={handleToggle}
            >
              {lang[Langkey].signUp}
            </span>
          </div>
        )}
        <div className="absolute -top-7 -right-3 cursor-pointer" onClick={handleform}> <i className="text-3xl text-purple-300 ri-close-fill"></i></div>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
