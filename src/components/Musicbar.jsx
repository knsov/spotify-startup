import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import img1 from '../assets/FotoJet-2.jpg'
import { IoShareOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import img2 from '../assets/i.jpg'





const Musicbar = () => {
  return (
    <div className='h-screen bg-neutral-900 w-[20%] rounded-lg sticky top-[55px] px-3 py-3'>
        <div className='flex justify-between text-white items-center mb-4'>
            <h1 className='font-semibold text-xl'>Playlist</h1>
            <div className='flex gap-1 text-3xl text-neutral-500 items-center cursor-pointer'>
                <div className='text-2xl hover:text-neutral-400 duration-150'>
                <BsThreeDots/>
                </div>
                <div className='rounded-4xl hover:bg-neutral-600/20 duration-150'>
                <IoIosClose/>
                </div>
            </div>
        </div>
        <div className='mb-2'>
            <img className='rounded-lg' src={img1} />
        </div>
        <div className='flex text-white justify-between mb-5'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-2xl'>Let It Happen</h1>
                <h1 className='text-neutral-500 font-semibold'>Tame Impala</h1>
            </div>
            <div className='flex items-center text-white text-2xl gap-1 cursor-pointer'>
                <div className='hover:scale-110'>
                <IoShareOutline/>
                </div>
                <div className='hover:scale-110'>
                <GoHeart/>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between bg-neutral-500/25 px-3 py-3 rounded-lg text-white font-bold text-[15px] items-center mb-4'>
                <h1>Lyrics</h1>
                <button className='border-1 border-white rounded-3xl px-3 py-1 hover:scale-103 cursor-pointer'>Show lyrics</button>
            </div>
            <div className='bg-neutral-500/25 rounded-lg py-2 px-2 mb-4'>
                <div className='flex'>
                    <div className='flex flex-col gap-3 text-white font-bold'>
                        <h1 className='text-xl'>About the artist</h1>
                        <img className='rounded-[50%] h-[60%] w-[30%]' src={img1}/>
                        <h1 className='leading-0'>NBSPVL</h1>
                        <div className='flex justify-between items-center'>
                        <h1 className='text-neutral-400 font-semibold'>5,234,234 monthly listeners</h1>
                        <button className='border-1 border-white rounded-3xl px-3 py-1 hover:scale-103 cursor-pointer'>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-neutral-500/25 rounded-lg py-2 px-2 flex flex-col gap-2'>
            <div className='flex justify-between text-white'>
                <h1 className='font-bold'>Credits</h1>
                <a className='text-neutral-400 font-bold' href="#">Show all</a>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-white'>
                    <h1 className='font-semibold'>NBSPVL</h1>
                    <h1 className='text-neutral-400 text-[15px] font-medium'>Main artist</h1>
                </div>
                <div>
                    <button className='border-1 border-white rounded-3xl px-3 py-1 hover:scale-103 cursor-pointer text-white font-bold '>Follow</button>
                </div>
            </div>
                <div className='text-white'>
                    <h1 className='font-semibold'>Begzod</h1>
                    <h1 className='text-neutral-400 text-[15px] font-medium'>Cock sucker</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Musicbar
