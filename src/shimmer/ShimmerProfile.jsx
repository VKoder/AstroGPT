import React from 'react'

const ShimmerProfile = () => {
  return (
    <div className='h-screen px-6 py-6 md:px-20 md:py-10 w-12/12'>
    <div className='md:h-[70vh] h-screen  md:gap-8 rounded-xl px-6 py-6 bg-gray-300 flex flex-col md:flex-row justify-start items-center'>
        <div className='w-3/12 flex flex-col justify-center items-center gap-3'>
      <div className='stroke animate rounded-full w-60 h-60'></div>
      <div className='stroke animate rounded-xl w-32 h-8 lg:h-12'></div>
      </div>
      <div className='w-7/12 pt-10 h-full gap-4 flex flex-col justify-start items-start'>
        <div className='w-11/12 rounded-3xl h-8 stroke animate'></div>
        <div className='w-10/12 rounded-3xl h-8 stroke animate'></div>

        <div className='w-11/12 rounded-3xl h-8 stroke animate'></div>
        <div className='w-9/12 rounded-3xl h-8 stroke animate'></div>

<div className='flex flex-row justify-start pt-4 gap-4 items-start'>
        <div className='w-52 rounded-full h-16 stroke animate'></div>
        <div className='w-52 rounded-full h-16 stroke animate'></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShimmerProfile
