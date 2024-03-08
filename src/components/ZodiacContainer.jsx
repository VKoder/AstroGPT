import React from 'react'
import zodiac from "../image/zodiac.png"
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
import Pisces from "../image/Sign/sign11.svg"

const ZodiacContainer = () => {
  return (
    <div className=' px-14 flex justify-center items-center relative w-12/12 opacity-90'>
        <img alt='cycle' className='  absolute hand w-96' src={zodiac}></img>
        
        <div className='flex flex-col w-full h-full'>
        <div className='flex justify-center items-center py-3  w-full h-full flex-wrap'>
            <ZodiacCard name={"Aries"} value={"Aries"} img={Aries}/>
        </div>
        <div className='flex justify-evenly gap-32 items-center py-3  w-full h-full flex-wrap'>
            <ZodiacCard name={"Taurus"} value={"Taurus"}  img={Taurus}/>
            <ZodiacCard name={"Gemini"} value={"Gemini"} img={Gemini}/>
            
        </div>
        <div className='flex justify-between items-center py-3  w-full h-full flex-wrap'>
        <ZodiacCard name={"Cancer"} value={"Cancer"}  img={Cancer}/>
            <ZodiacCard name={"Leo"} value={"Leo"} img={Leo}/>
        </div>
        <div className='flex justify-between items-center py-3  w-full h-full flex-wrap'>
        <ZodiacCard name={"Virgo"} value={"Virgo"}  img={Virgo}/>
            <ZodiacCard name={"Libra"} value={"Libra"} img={Libra}/>
        </div>
        <div className='flex justify-evenly gap-32 items-center py-3  w-full h-full flex-wrap'>
        <ZodiacCard name={"Scorpio"} value={"Scorpio"}  img={Scorpio}/>
            <ZodiacCard name={"Sagittarius"} value={"Sagittarius"} img={Sagittarius}/>
        </div>
        <div className='flex justify-center items-center py-3  w-full h-full flex-wrap'>
            <ZodiacCard name={"Capricorn"} value={"Capricorn"} img={Capricorn}/>
        </div>
        </div>
    </div>
  )
}

export default ZodiacContainer
