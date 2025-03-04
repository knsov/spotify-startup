import React from 'react'
import { MdMenu } from "react-icons/md";
import Rating from '@mui/material/Rating';


const Header = () => {
  return (
    <div className='bg-black'>  
      <div className='conatiner mx-auto'>
        <div className='flex justify-between gap-12 text-white'>
            <h2>Spotify</h2>
            <ul className='flex gap-4 items-center'>
                <li>SALOM</li>
                <li>SALOM</li>
                <li>SALOM</li>
                <li>SALOM</li>
                <li>SALOM</li>
                <div className='text-4xl text-green-500 hover:text-red-700 duration-300'>
                    <MdMenu />
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
