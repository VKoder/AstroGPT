import React from 'react'

const UsersTag = () => {
    const divCSS = 'flex justify-center items-center flex-col'
    const numCSS = 'text-2xl font-semibold text-purple-100 pb-2'
    const nameCSS = 'text-xl font-medium text-purple-200'
  return (
    <div className='flex justify-evenly items-center lg:my-28 my-8 flex-row bg-purple-950 bg-opacity-85 py-14'>
      <div className={divCSS}>
        <span className={numCSS}>19,241+</span>
        <span className={nameCSS}>Total Astrologers</span>
      </div>
      <div className={divCSS}>
        <span className={numCSS}>619 Million Minutes</span>
        <span className={nameCSS}>Total Chat/Call Minutes</span>
      </div>
      <div className={divCSS}>
        <span className={numCSS}>40.4 Million</span>
        <span className={nameCSS}>Total Customers</span>
      </div>
    </div>
  )
}

export default UsersTag
