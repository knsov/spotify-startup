import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { SlLayers } from "react-icons/sl";
import { FaSpotify } from "react-icons/fa";
import { GoPlus } from "react-icons/go";






const Menu = () => {
  return (
    <div className='hidden max-[500px]:block'>
        <div className='fixed bottom-0 w-full h-[55px] flex items-center justify-between px-4  bg-gradient-to-b from-transparent to-neutral-900'>
        <div className='text-white text-3xl flex flex-col items-center max-[369px]:text-2xl'>
            <MdHomeFilled/>
            <h2 className='text-white text-center text-[10px] font-semibold'>Home</h2>
        </div>
        <div className='text-white text-3xl flex flex-col items-center max-[369px]:text-2xl'>
            <IoSearch/>
            <h2 className='text-white text-center text-[10px] font-semibold'>Search</h2>
        </div>
        <div className='text-white text-3xl flex flex-col items-center max-[369px]:text-2xl'>
            <SlLayers/>
            <h2 className='text-white text-center text-[10px] font-semibold'>Your Library</h2>
        </div>
        <div className='text-white text-3xl flex flex-col items-center max-[369px]:text-2xl'>
            <FaSpotify/>
            <h2 className='text-white text-center text-[10px] font-semibold'>Premium</h2>
        </div>
        <div className='text-white text-3xl flex flex-col items-center max-[369px]:text-2xl'>
            <GoPlus/>
            <h2 className='text-white text-center text-[10px] font-semibold'>Create</h2>
        </div>
        </div>
    </div>
  )
}

export default Menu
