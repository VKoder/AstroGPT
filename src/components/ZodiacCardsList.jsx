import React from 'react'
import ZodiacCard from './ZodiacCard'
import Aries from "../image/Sign/sign1.svg"
import Taurus from "../image/Sign/sign2.svg"
import Gemini from "../image/Sign/sign3.svg"
import Cancer from "../image/Sign/sign4.svg"
import Leo from "../image/Sign/sign5.svg"
import Virgo from "../image/Sign/sign6.svg"
import Libra from "../image/Sign/sign7.svg"
import Scorpio from "../image/Sign/sign8.svg"
import Sagittarius from "../image/Sign/sign9.svg"
import Capricorn from "../image/Sign/sign10.svg"
import Aquarius from "../image/Sign/sign11.svg"
import Pisces from "../image/Sign/sign12.svg"
import zodiac from "../image/zodiac.png"
import { Link } from 'react-router-dom'

const ZodiacCardsList = () => {
  return (
    
              <div className='flex flex-col w-full lg:mt-0 lg:mb-10 my-3 justify-center items-center h-full relative'>
                 <img alt='cycle' className='hidden lg:block absolute  w-80 opacity-95' src="https://www.saisadhanaastrologycentre.com/assets/img/about-1-1.webp"></img>
                 <img alt='cycle' className='absolute hidden lg:block -z-10 opacity-55 hand w-[450px]' src='https://kamleshyadav.com/html/astrology/version-3/assets/images/service_img2.png'></img>
        <div className='flex justify-center lg:gap-10 items-center lg:py-3  w-full h-full flex-wrap'>
           <Link className='lg:w-3/12 w-full' to={"/horoscope/Aries"}> <ZodiacCard name={"Aries"} value={"Aries"} img={Aries}/></Link>
           <Link className='lg:w-3/12 w-full' to={"/horoscope/Aquarius"}> <ZodiacCard name={"Aquarius"} value={"Aquarius"} img={Aquarius}/></Link>
        </div>
        <div className='flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap'>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Taurus"}> <ZodiacCard name={"Taurus"} value={"Taurus"}  img={Taurus}/></Link>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Gemini"}><ZodiacCard name={"Gemini"} value={"Gemini"} img={Gemini}/></Link>
            
        </div>
        <div className='flex justify-between items-center lg:py-3 w-full h-full flex-wrap'>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Cancer"}><ZodiacCard name={"Cancer"} value={"Cancer"}  img={Cancer}/></Link>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Leo"}><ZodiacCard name={"Leo"} value={"Leo"} img={Leo}/></Link>
        </div>
        <div className='flex justify-between items-center lg:py-3  w-full h-full flex-wrap'>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Virgo"}><ZodiacCard name={"Virgo"} value={"Virgo"}  img={Virgo}/></Link>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Libra"}>  <ZodiacCard name={"Libra"} value={"Libra"} img={Libra}/></Link>
        </div>
        <div className='flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap'>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Scorpio"}> <ZodiacCard name={"Scorpio"} value={"Scorpio"}  img={Scorpio}/></Link>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Pisces"}> <ZodiacCard name={"Pisces"} value={"Pisces"} img={Pisces}/></Link>
        </div>
        <div className='flex justify-center items-center py-3  lg:gap-10 w-full h-full flex-wrap'>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Capricorn"}><ZodiacCard name={"Capricorn"} value={"Capricorn"} img={Capricorn}/></Link>
        <Link className='lg:w-3/12 w-full' to={"/horoscope/Sagittarius"}> <ZodiacCard name={"Sagittarius"} value={"Sagittarius"} img={Sagittarius}/></Link>
        </div>
        </div>
  
  )
}

export default ZodiacCardsList
       