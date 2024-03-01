import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_IMG } from '../utils/constants';
import { removeFollow } from '../store/followSlice';
import { Link } from 'react-router-dom';

const Following = () => {

    const dispatch = useDispatch();

    const data = useSelector(store => store.follow.follow);
    if (!data) {
        return <h1>following is empty</h1>
    }
    console.log(data)

    const handleUnfollow = () =>{
        dispatch(removeFollow(data))
    }

  return (
    
<div className='bg-purple-200 h-screen px-20 pt-8 w-12/12'>
    <div className='mb-4'>
     <span className='text-4xl font-bold py-6'>Following</span>
     </div>
     {
        data?.map(data =>  
       <div className='w-[38%] mt-2 flex flex-row justify-between items-center shadow-lg bg-white px-3 py-4 rounded-lg'> 
       <div className='flex flex-row justify-center items-center'>
            <div className='bg-gray-600 rounded-full'><img className='w-20' alt='img' src={PROFILE_IMG + data?.picId}></img></div>
            <Link to={"/astroProfile/" + data?.name}><div className='px-4 flex w-7/12 flex-row justify-start items-start'>
                <div className='flex flex-col justify-start items-start'>
                <span className='text-3xl font-semibold'>{data?.name}</span>
               {data?.shortBio && <span className='font-medium text-base text-zinc-600'>({data?.shortBio})</span>}
                </div>
            </div></Link>
            </div>
            <div className='flex justify-center items-center'>
            <span className="bg-purple-100 px-5 py-4 rounded-lg hover:bg-purple-300 hover:text-white transition-all font-medium cursor-pointer text-zinc-700" onClick={handleUnfollow}>Unfollow</span>
            </div>
        </div>
        )
     }
    
    </div>
  )
}

export default Following
