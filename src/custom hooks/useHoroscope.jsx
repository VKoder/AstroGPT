import { useEffect } from 'react'
import openai from '../utils/openai';
import { HOROSCOPE } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addHoroscope } from '../store/AstroSlice';

const useHoroscope = (id) => {

    const dispatch = useDispatch()

  

    const fetch = async (id) =>{
        const horoscope = (HOROSCOPE + id);

        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: horoscope }],
            model: 'gpt-3.5-turbo',
        });
        dispatch(addHoroscope(data?.choices?.[0]?.message?.content))
    } 
    
    useEffect(()=>{
        fetch();
    },[])

}

export default useHoroscope
