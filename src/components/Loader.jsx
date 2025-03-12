import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='bg-[#240a37d3] w-full h-screen fixed left-0 top-0'>
      <div className='flex justify-center items-center h-full'>
        <HashLoader color='green' size={80}/>
      </div>
    </div>
  )
}

export default Loader
