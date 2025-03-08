import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


const Related = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-6 mt-3 max-[889px]:grid-cols-2">
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        <NavLink to={"playlist"}>
            <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img className='h-17 rounded-lg' src="https://i.pinimg.com/736x/97/28/de/9728defe4bc8dc6a52255a181de7c32e.jpg"/>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                </div>
                <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
        </NavLink>
        </div>
    </div>
  )
}

export default Related
