import React from 'react'
import { MdMenu } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { PiBellRingingFill } from "react-icons/pi";
import { MdOutlineGroups2 } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Burger from './Burger';






const Header = () => {
  return (
    <>
    <div className='bg-black sticky top-0'>
      <div className='mx-7'>
        <div className='flex justify-between items-center h-14'>
          <div className='flex text-white items-center text-2xl gap-2 cursor-pointer'>
            <BsThreeDots/>
            <GoChevronLeft/>
            <GoChevronRight/>
          </div>
          <div className='flex items-center gap-3'>
            <div className='text-2xl text-white hover:text-gray-400 duration-300 cursor-pointer max-[600px]:hidden'>
            <MdHomeFilled/>
            </div>
            <input className='rounded-3xl bg-white/20 w-[400px] h-11 placeholder-gray-400 font-semibold px-9 text-[14px] text-gray-300 max-[800px]:w-full cursor-pointer max-[600px]:hidden' type="search" name="" id="" placeholder='What do you want to play?' />
          </div>
          <div className='flex gap-4 items-center'>
          <div className='text-white text-2xl hover:text-gray-400 duration-300 cursor-pointer max-[400px]:hidden'>
            <PiBellRingingFill/>
          </div>
          <div className='text-white text-2xl hover:text-gray-400 duration-300 cursor-pointer max-[400px]:hidden'>
            <MdOutlineGroups2/>
          </div>
            <img className='h-9 rounded-[50%] cursor-pointer max-[400px]:hidden' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
          <div className='text-white text-2xl hidden max-[400px]:block'>
            <RxHamburgerMenu/>
          </div>
          </div>
          </div>
        </div>
    </div>
    <Burger/>
    </>
  )
}

export default Header
