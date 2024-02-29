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
    <div className="px-4  h-screen py-4 w-full">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
        {signIn ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
        {!signIn && <input type="text" placeholder="Name" ref={name}></input>}
        <input type="email" placeholder="Eamil" ref={email}></input>
        <input type="password" placeholder="Password" ref={password}></input>
        <span className="text-red-400">{errorMessage}</span>
        {signIn ? (
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-orange-300"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-orange-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        )}
        {!signIn ? (
          <span onClick={handleToggle}>Already have an account?Sign In</span>
        ) : (
          <span onClick={handleToggle}>New to AstroGPT?Sign up</span>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
