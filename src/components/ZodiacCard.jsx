import React from 'react'

const ZodiacCard = ({name,value,img}) => {
  return (
    <div className='h-24 w-3/12 bg-purple-900 flex justify-center items-center px-10 py-3 bg-opacity-80 rounded-tl-[45px] rounded-br-[40px]'>
        <div className='flex w-full justify-center gap-6 items-center'>
            <div className='bg-red-700 px-3 py-3 rounded-full'>
            <img alt='sign' className='w-10' src={img}></img>
            </div>
            <span className='text-3xl font-semibold tracking-wide text-purple-300'>{name}</span>
        </div>
    </div>
  )
}

export default ZodiacCard
