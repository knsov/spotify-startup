import React from 'react'

const Banner_header = () => {
  return (
    <div>
      <div className='flex gap-2 text-white px-6 py-5'>
                <button className='bg-white rounded-3xl px-4 py-1 text-black cursor-pointer'>All</button>
                <button className='font-semibold bg-gray-400/10 px-4 py-1 rounded-3xl cursor-pointer'>Music</button>
        </div>
    </div>
  )
}

export default Banner_header
