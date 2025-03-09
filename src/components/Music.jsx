import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";
import img1 from '../assets/FotoJet-2.jpg'
import { CgArrowsExchange } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import Music_list from './Music_list';
import { IoMdTimer } from "react-icons/io";






const Music = () => {
  return (
    <div className=' w-[80vw] bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-900 rounded-lg max-[1023px]:w-[98vw] px-6 py-2'>
      <div className='flex pt-4 items-center gap-2 mb-9'>
        <img className='h-[280px] rounded-lg max-[605px]:h-[200px] max-[499px]:h-[170px]' src={img1} />
        <div className='flex flex-col text-white font-semibold gap-5 max-[605px]:gap-2'>
            <h1 className='text-[15px] font-normal max-[499px]:text-[13px]'>Public Playlist</h1>
            <h1 className='text-7xl font-bold leading-14 max-[605px]:text-5xl max-[499px]:text-3xl max-[499px]:leading-10'>Playlist</h1>
            <h1 className='text-[15px] text-neutral-400 max-[499px]:text-[13px]'> <span className='text-white font-bold'>User</span> 11songs, 38min 33sec</h1>
        </div>
      </div>
      <div className='flex gap-6 justify-between items-center max-[605px]:mb-7'>
        <div className='flex items-center gap-6'>
        <div className='bg-green-500 rounded-4xl text-2xl px-4 py-4 cursor-pointer duration-100 hover:scale-105 active:bg-green-600 max-[500px]:text-xl'>
            <TbPlayerPlayFilled/>
        </div>
        <div className='text-4xl text-green-500 cursor-pointer max-[500px]:text-3xl'>
            <CgArrowsExchange/>
        </div>
        <div className='text-neutral-600 text-4xl cursor-pointer max-[500px]:text-3xl'>
            <BsThreeDots/>
        </div>
        </div>
        <div className='flex justify-end items-center gap-4 text-neutral-500 max-[541px]:hidden'>
            <div className='text-neutral-500 text-2xl hover:text-neutral-300 duration-200 cursor-pointer'>
                <CiSearch/>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group'>
            <h1 className='font-semibold group-hover:text-neutral-300 duration-200'>Custom order</h1>
            <div className='text-[20px] group-hover:text-neutral-300 duration-200'>
                <TfiMenuAlt/>
            </div>
            </div>
        </div>
      </div>
          <div className='grid justify-between grid-cols-4  mt-5 border-b-2 border-neutral-800 py-5 max-[605px]:hidden'>
            <div>
              <h1 className='text-neutral-400 font-semibold'># Title</h1>
            </div>
            <div>
              <h1 className='text-neutral-400 font-semibold'>Album</h1>
            </div>
            <div>
              <h1 className='text-neutral-400 font-semibold max-[605px]:hidden'>Date added</h1>
            </div>
            <div className='text-neutral-400 text-2xl'>
              <IoMdTimer/>
            </div>
          </div>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
      <Music_list/>
    </div>
  )
}

export default Music
