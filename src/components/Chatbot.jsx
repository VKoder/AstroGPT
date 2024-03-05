import { CHAT_BOT, Prompt } from '../utils/constants';
import openai from './../utils/openai';
import React, { useRef } from 'react'

const Chatbot = () => {

    const input = useRef();
    
    const handleSearch = async() =>{

        // const search =;
        
        // if (search == "") {
        //     console.log("Input cannot be empty")
        //     return;
        // }
        
        const gptSearch = CHAT_BOT +  input.current.value +`?`;

        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptSearch }],
            model: 'gpt-3.5-turbo',
          });
        console.log(data?.choices?.[0]?.message?.content);
        input.current.value = ""
    }

  return (
    <div className='pt-28 h-screen z-10 bg-zinc-800 text-white w-12/12'>
        <form onSubmit={(e)=>e.preventDefault()}>
        <input className='text-black' type='text' placeholder='Enter Horoscope' ref={input}></input>
        <button onClick={handleSearch}>Send</button>
        </form>
    </div>
  )
}

export default Chatbot;
