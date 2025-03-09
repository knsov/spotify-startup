import React, { useEffect } from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Burger = ({bool, open}) => {
  useEffect(() => {
    AOS.init({
        duration: 300, 
        easing: 'ease-in-out-cubic',
    });
  }, []);
  
  const handleClose = ()=>{
    bool(false)
  }

  return (
    <div className={`fixed inset-0 bg-neutral-900 h-[100vh] duration-300 mb- z-30 px-3 py-6 transition-all ${open ? 'opacity-100 h-[100vh]' : 'opacity-0 h-0'}`} data-aos="fade-right">
      <div className='flex justify-between items-center border-b-1 border-neutral-600 mb-3'>
        <div className='flex items-center gap-2 mb-6'>
          <img className='h-15 rounded-4xl' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
          <div className='flex flex-col'>
          <h1 className='text-white font-semibold text-[17px] leading-5'>User</h1>
          <h2 className='font-medium text-neutral-500 text-[15px] cursor-pointer'>View Profile</h2>
          </div>
        </div>
        <div className='text-5xl text-white' onClick={()=> handleClose()}>
          <IoIosClose/>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-1 items-center hover:bg-neutral-800 py-2 rounded-lg'>
            <div className='text-3xl text-white'>
                <AiOutlineThunderbolt/>
            </div>
            <h1 className='text-white font-semibold'>Whats new</h1>
        </div>
        <div className='flex gap-1 items-center hover:bg-neutral-800 py-2 rounded-lg'>
            <div className='text-3xl text-white'>
                <IoMdTimer/>
            </div>
            <h1 className='text-white font-semibold'>History</h1>
        </div>
        <div className='flex gap-1 items-center hover:bg-neutral-800 py-2 rounded-lg'>
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
