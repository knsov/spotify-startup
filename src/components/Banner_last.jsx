import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";

const Banner_last = () => {
  return (
    <div className='px-6 mt-8'>
        <h1 className='text-white font-bold text-[24px]'>Made For User</h1>
      <div className="grid grid-cols-6 gap-2 max-[1629px]:overflow-x-scroll">
        <div className='group mt-4 hover:bg-gray-400/20 px-3 py-3 rounded-lg duration-300 cursor-pointer'>
            <div className='h-55 bg-center flex items-end justify-end bg-cover' style={{backgroundImage:'url(https://i.pinimg.com/736x/c2/33/30/c23330acff7f026be25833615e45e036.jpg)'}}>
                <div className='bg-green-500 rounded-4xl px-4 py-4 text-2xl mb-1 mr-1 opacity-0 group-hover:opacity-90 duration-200 group-hover:translate-y-[-5px] translate-y-[0px]'>
                    <TbPlayerPlayFilled/>
                </div>
            </div>
            <h1 className='text-gray-400 font-semibold mt-1'>Begzod, Aldiyar</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner_last
