import { useDispatch, useSelector } from 'react-redux';
import { CHAT_BOT, Prompt } from '../utils/constants';
import openai from './../utils/openai';
import React, { useRef, useState } from 'react';
import LoginForm from './LoginForm';
import { addForm } from '../store/configAppSlice';
import { toast, Bounce } from 'react-toastify';

const Chatbot = () => {
    const input = useRef();
    const user = useSelector(store => store.user);
    const form = useSelector(store=> store.configApp.form);
    const dispatch = useDispatch()
 

    const handleSearch = async () => {
        if (!user) {
          toast.error("Please Login to Continue", {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
           dispatch(addForm())
            return; // Exit the function
        }

        const gptSearch = CHAT_BOT + input.current.value + `?`;

        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptSearch }],
            model: 'gpt-3.5-turbo',
        });
        console.log(data?.choices?.[0]?.message?.content);
        input.current.value = ""
    }

    return (
        <div className='pt-28 h-screen relative z-10 bg-zinc-800 text-white w-12/12'>
          <img alt="bg" className="h-screen brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40" src="https://kamleshyadav.com/html/astrology/version-3/assets/images/bg1.jpg"></img>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className='text-black' type='text' placeholder='Enter Horoscope' ref={input}></input>
                <button onClick={handleSearch}>Send</button>
            </form>
            
        </div>
    )
}

export default Chatbot;
