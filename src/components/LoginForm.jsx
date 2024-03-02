import React, { useRef, useState } from "react";
import { checkValidData, checkValidData2 } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const [signIn, setsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

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

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login successful!", {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
            seterrorMessage("Incorrect Details Please Try Again")
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
        console.log(user);
        toast.success("Welcome to AstroGPT!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
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
  return (
    <div className="px-16 py-8  w-full">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
        {signIn ? <h2 className="py-4 text-4xl text-purple-200 font-bold">Sign In</h2> : <h2 className="py-4 text-4xl text-purple-200 font-bold">Sign Up</h2>}
        {!signIn && <input className="px-2 py-1.5  hover:border-b-purple-400 outline-none lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg" type="text" placeholder="Name" ref={name}></input>}
        <input className="px-2 hover:border-b-purple-400 outline-none py-1.5 lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg" type="email" placeholder="Eamil" ref={email}></input>
        <input className="px-2 py-1.5  hover:border-b-purple-400 outline-none lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg" type="password" placeholder="Password" ref={password}></input>
        <span className="text-red-700 font-semibold">{errorMessage}</span>
        {signIn ? (
          <button
            type="submit"
            className="lg:px-8 px-4 hover:bg-transparent border-2  hover:shadow-sm hover: hover:shadow-purple-700 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        ) : (
          <button
            type="submit"
            className="lg:px-8 px-4 hover:bg-transparent border-2  hover:shadow-sm hover: hover:shadow-purple-700 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        )}
        {!signIn ? (
          <div className="flex flex-row">
          <span className="text-gray-300 py-1.5 text-xs lg:text-sm   lg:py-3">Already have an account?</span>
          <span className="text-gray-300 py-1.5 text-xs lg:text-sm cursor-pointer lg:pl-1.5 pl-1  lg:py-3" onClick={handleToggle}>Sign In</span>
          </div>
        ) : (
          <div className="flex flex-row">
          <span className="text-gray-300 py-1.5 text-xs lg:text-sm  lg:py-3" >New to AstroGPT?</span>
          <span className="text-gray-300 py-1.5 text-xs lg:text-sm lg:pl-1.5 pl-1 cursor-pointer lg:py-3" onClick={handleToggle}> Sign up</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
