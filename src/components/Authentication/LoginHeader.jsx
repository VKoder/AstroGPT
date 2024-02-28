import React from 'react'
import logo from "../../image/Logo.png"
import { Link } from 'react-router-dom'

const LoginHeader = () => {
  return (
    <div className='flex flex-row justify-between z-20 items-center  px-20 bg-purple-900'>
     
            <div>
             <Link to={"/"}> <img className="w-20 md:w-44 lg:w-56" src={logo} alt="Logo"></img></Link>
            </div>
      
        <div>ghj</div>
    </div>
  )
}

export default LoginHeader
