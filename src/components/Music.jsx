import React from 'react'
import img1 from '../assets/FotoJet-2.jpg'

const Music = () => {
  return (
    <div className=' w-[80vw] bg-neutral-900 rounded-lg max-[1023px]:w-[98vw]'>
      <div className='flex px-7 pt-4 items-center gap-2'>
        <img className='h-[280px] rounded-lg' src={img1} />
        <div className='flex flex-col text-white font-semibold gap-5'>
            <h1 className='text-[15px] font-normal'>Public Playlist</h1>
            <h1 className='text-7xl font-bold leading-19'>Playlist</h1>
            <h1 className='text-[15px] text-neutral-400'> <span className='text-white font-bold'>User</span> 11songs, 38min 33sec</h1>
        </div>
      </div>
    </div>
  )
}

export default Music
