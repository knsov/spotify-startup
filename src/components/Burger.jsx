import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";




const Burger = () => {
  return (
    <div className='fixed inset-0 bg-neutral-900 h-[100vh transform translate-x-0 mb- z-30 px-3 py-6 opacity- duration-300] hidden'>
      <div className='flex items-center gap-2 border-b-1 border-neutral-600 mb-6'>
        <img className='h-15 rounded-4xl' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
        <div className='flex flex-col'>
        <h1 className='text-white font-semibold text-[17px] leading-5'>User</h1>
        <h2 className='font-medium text-neutral-500 text-[15px] cursor-pointer'>View Profile</h2>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-1 mb-3 items-center'>
            <div className='text-3xl text-white'>
                <AiOutlineThunderbolt/>
            </div>
            <h1 className='text-white font-semibold'>Whats new</h1>
        </div>
        <div className='flex gap-1 items-center mb-3'>
            <div className='text-3xl text-white'>
                <IoMdTimer/>
            </div>
            <h1 className='text-white font-semibold'>History</h1>
        </div>
        <div className='flex gap-1 items-center'>
            <div className='text-3xl text-white'>
                <IoSettingsSharp/>
            </div>
            <h1 className='text-white font-semibold'>Settings</h1>
        </div>
      </div>
    </div>
  )
}

export default Burger
