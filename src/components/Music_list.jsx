import React from 'react'
import { IoMdTimer } from "react-icons/io";
import img1 from '../assets/FotoJet-2.jpg'



const Music_list = () => {
  return (
    <>
    <div className='grid grid-cols-4 mt-2.5 group rounded px-1 py-1 hover:bg-neutral-500/20 duration-200 cursor-pointer'>
        <div className='flex items-center gap-3'>
            <h1 className='text-neutral-500 font-bold'>1</h1>
            <img className='h-13 rounded-lg  object-cover' src={img1} />
            <div>
                <h1 className='text-white font-semibold '>Song</h1>
                <h1 className='text-neutral-600'>adore</h1>
            </div>
        </div>
        <div className='flex items-center'>
            <h1 className='text-neutral-500 font-semibold'>Song</h1>
        </div>
        <div className='flex items-center'>
            <h1 className='text-neutral-500 font-semibold max-[695px]:hidden'>Jan 3, 2025</h1>
        </div>
        <div className='flex items-center'>
            <h1 className='text-neutral-500 font-semibold'>1:56</h1>
        </div>
    </div>
    </>
  )
}

export default Music_list
