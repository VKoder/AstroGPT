import { useEffect } from 'react'
import openai from '../utils/openai';

const useHoroscope = (id) => {

    // const fetch = async (id) =>{

    //     const horoscope = 'Give me todays horoscope of '+ id + 'in ascepts of love, carrer and etc'

    //     const data = await openai.chat.completions.create({
    //         messages: [{ role: 'user', content: horoscope }],
    //         model: 'gpt-3.5-turbo',
    //     });
    //     console.log(data)
    // }

    // useEffect(()=>{
    //     fetch();
    // },[])

}

export default useHoroscope
