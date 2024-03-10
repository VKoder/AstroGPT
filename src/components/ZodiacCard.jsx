import React from 'react'

const ZodiacCard = ({name,value,img}) => {
  return (
    <div className='h-28 w-full bg-gradient-to-b transition-all relative overflow-hidden btn btn-bg-slide flex justify-center cursor-pointer shadow-md shadow-purple-700 items-center lg:my-0 my-2 px-10 py-3 bg-opacity-90 border border-purple-900  rounded-tl-[45px] rounded-br-[40px]'>
        <div className='flex w-full justify-start gap-2  items-center'>
            <div className='w-4/12 justify-center  items-center flex rounded-full'>
            <img alt='sign' className='w-10' src={img}></img>
            </div>
            <div className='w-7/12 flex flex-col justify-start items-start'>
            <span className='text-[20px] uppercase font-semibold tracking-wider lg:racking-wide text-white'>{name}</span>
            <span className='text-zinc-200 text-sm pt-1.5 tracking-wider lg:racking-wide uppercase'>Mar 21 - Apr 21</span>
            </div>
        </div>
    </div>
  )
}

export default ZodiacCard
