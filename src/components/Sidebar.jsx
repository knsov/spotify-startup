import React from 'react'
import { SlLayers } from "react-icons/sl";
import { GoPlus } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import Banner from './Banner';






const Sidebar = () => {
  return (
    <div className='p-2 flex gap-2'>
      <div className='h-[100vh] bg-neutral-900 w-[20%] rounded-lg sticky top-0 max-[1023px]:hidden'>
        <div className='flex flex-col px-2 py-2'>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center max-[1189px]:gap-2 max-[698px]:hidden'>
                    <span className='text-gray-400 text-3xl hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'>
                    <SlLayers/>
                    </span>
                    <h1 className='text-gray-400 font-bold cursor-pointer hover:text-white duration-300 max-[1189px]:text-[14px] max-[1022px]:text-[10px]'>Your Library</h1>
                </div>
                <div className='flex gap-1 max-[698px]:hidden'>
                    <span className='text-gray-400 text-3xl hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'><GoPlus/></span>
                    <span className='text-gray-400 text-3xl hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'><IoIosArrowRoundForward/></span>
                </div>
            </div>
            <div className='flex justify-between text-white text-[14px] font-semibold mt-6'>
                <h2 className='rounded-3xl px-4 py-1 bg-gray-500/25 hover:bg-gray-500/50 duration-300 cursor-pointer max-[1189px]:text-[12px] max-[446px]:px-2'>Playlist</h2>
            </div>
            <div className='flex justify-between items-center mt-2 text-[20px] max-[698px]:hidden'>
                <span className='text-gray-400 rounded-[50%] hover:bg-gray-400/25 px-2 py-2 duration-300 cursor-pointer'><IoSearch/></span>
                <div className='flex gap-3 items-center'>
                <h1 className='text-gray-400 font-semibold text-[16px] cursor-pointer hover:text-white duration-300'>Recents</h1>
                <span className='text-gray-400 text-[17px] hover:text-white cursor-pointer duration-300'><TfiMenuAlt/></span>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                    <img className='h-15 rounded max-[446px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                    <h1 className='text-white text-[15px] font-medium'>Playlist №1</h1>
                    <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                </div>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                    <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                    <h1 className='text-white text-[15px] font-medium'>Playlist №2</h1>
                    <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                </div>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                    <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                    <h1 className='text-white text-[15px] font-medium'>Playlist №3</h1>
                    <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                </div>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                    <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                    <h1 className='text-white text-[15px] font-medium'>Playlist №4</h1>
                    <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <Banner/>
      </div>
    </div>
  )
}

export default Sidebar
