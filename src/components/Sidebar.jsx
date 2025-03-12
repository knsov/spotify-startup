import React from 'react'
import { SlLayers } from "react-icons/sl";
import { GoPlus } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Outlet } from 'react-router-dom';
import Musicbar from './Musicbar';






const Sidebar = () => {
    
  return (
    <div className='p-2 grid grid-cols-[20%_80%] max-[1055px]:grid-cols-[20%_80%] gap-2'>
      <div className='h-[93vh] bg-neutral-900 w-full rounded-lg sticky top-[55px] max-[1023px]:hidden'>
        <div className='flex flex-col px-2 py-2'>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center max-[1189px]:gap-2 max-[698px]:hidden group'>
                    <span className='text-gray-400 text-3xl group-hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'>
                    <SlLayers/>
                    </span>
                    <h1 className='text-gray-400 font-bold cursor-pointer group-hover:text-white duration-300 max-[1189px]:text-[14px] max-[1022px]:text-[10px]'>Your Library</h1>
                </div>
                <div className='flex gap-1 max-[698px]:hidden'>
                    <span className='text-gray-400 text-3xl hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'><GoPlus/></span>
                    <span className='text-gray-400 text-3xl hover:text-white duration-300 cursor-pointer max-[1189px]:text-2xl'><IoIosArrowRoundForward/></span>
                </div>
            </div>
            <div className='flex justify-between text-white text-[14px] font-semibold mt-6'>
                <h2 className='rounded-3xl px-4 py-1 bg-gray-500/25 hover:bg-gray-500/50 duration-300 cursor-pointer max-[1189px]:text-[12px] max-[446px]:px-2'>Playlist</h2>
            </div>
            <NavLink to={"playlist"}>
                <div className='flex flex-col mt-2'>
                    <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                        <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                        <h1 className='text-white text-[15px] font-medium'>Playlist №4</h1>
                        <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                    </div>
                    </div>
                </div>
            </NavLink>
            <NavLink to={"playlist"}>
                <div className='flex flex-col mt-2'>
                    <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                        <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                        <h1 className='text-white text-[15px] font-medium'>Playlist №4</h1>
                        <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                    </div>
                    </div>
                </div>
            </NavLink>
            <NavLink to={"playlist"}>
                <div className='flex flex-col mt-2'>
                    <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                        <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                        <h1 className='text-white text-[15px] font-medium'>Playlist №4</h1>
                        <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                    </div>
                    </div>
                </div>
            </NavLink>
            <NavLink to={"playlist"}>
                <div className='flex flex-col mt-2'>
                    <div className='flex gap-3 rounded px-2 py-1 hover:bg-gray-400/20 duration-200 cursor-pointer'>
                        <img className='h-15 rounded max-[450px]:h-10' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <div className='flex flex-col gap-2 max-[1020px]:hidden'>
                        <h1 className='text-white text-[15px] font-medium'>Playlist №4</h1>
                        <p className='text-gray-400 text-[13px] font-medium'>Playlist User</p>
                    </div>
                    </div>
                </div>
            </NavLink>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
      {/* <div className='max-[1055px]:hidden'>
        <Musicbar/>
      </div> */}
    </div>
  )
}

export default Sidebar
