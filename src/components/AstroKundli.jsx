import React, { useRef } from 'react'
import { kundlicheck } from '../utils/validate'
import openai from '../utils/openai'

const AstroKundli = () => {

  const name = useRef()
  const gender = useRef()
  const dob = useRef()
  const time = useRef()
  const locality = useRef()
  const district = useRef()
  const statee = useRef()
  const nationality = useRef()
  const language = useRef()

  

  const handleSearch = async() =>{
    const error = kundlicheck(name.current.value, dob.current.value, time.current.value, gender.current.value, locality.current.value, district.current.value,statee.current.value,nationality.current.value)
    if (error) {
      alert(error);
      return;
    }


    const kundli = `Generate a Vedic astrological reading for name, a gender born on dob,  at time  in locality district  state, nationality. Provide insights on name overall 
  zodiac sign, personality, career prospects, love life, financial situation, happiness, as well as 
  motivational messages. Ensure the response is concise and easy to understand, avoiding unnecessary
   complexity while maintaining accuracy and relevance to name astrological profile. After every responce 
   start with Hey I am an AstroKundli integrated in AstroGPT made by Sir Vivek Khule an visionary mind
    (or any other good word) behind AstroGPT so this readings may not be fully correct give response in
     `+ language+ ` Prompt name = `+ name.current.value+` , gender = `+gender.current.value+`, dob = `+dob.current.value+`, time = `+time.current.value+`, 
     locality = `+locality.current.value+`, district = `+district.current.value+`, state = `+statee.current.value+`, nationality = `+nationality.current.value+`!`


    const data = await openai.chat.completions.create({
      messages: [{ role: 'user', content:  kundli}],
      model: 'gpt-3.5-turbo',
    });
    console.log(data?.choices?.[0]?.message?.content);
 



  }


  return (
    <div className='pt-20 bg-zinc-700 h-screen w-12/12'>
     <form onSubmit={(e)=>e.preventDefault()}>
        <span>Name:</span><input type='text' ref={name}></input>
        <span>Date of Birth:</span><input type='date' ref={dob}></input>
        <span>Gender:</span><input type='text' ref={gender}></input>
        <span>Birth Place:</span><input type='text' ref={locality}></input>
        <span>Birth District:</span><input type='text' ref={district}></input>
        <span>Birth State:</span><input type='text' ref={statee}></input>
        <span>Birth Nation:</span><input type='text' ref={nationality}></input>
        <span>Birth Time</span><input type='time' ref={time}></input>
        <span>Language</span><input type='text' ref={language}></input>
        <button onClick={handleSearch}>Search</button>
     </form>
    </div>
  )
}

export default AstroKundli;
