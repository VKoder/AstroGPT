import React from 'react'
import LoginForm from './LoginForm'


const LoginPage = () => {
  return (
    <div className='flex flex-row w-12/12 h-screen justify-between px-20 items-center bg-cover bg-center bg-fixed relative'>
      <img className='absolute w-full top-0 left-0 -z-20 h-screen' src='https://imgs.search.brave.com/kwEs34yJfoJPW2qmgrz0jU0VS3WI7JYUMw8TrEssnQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/Mi8yOC8wNy80My9z/dGFycy0zMTg3NDQ1/XzY0MC5qcGc'></img>
      <div className=' w-7/12 h-full'>
      hii
        </div>
        <div className='w-6/12 h-full'>
      <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
