import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Loader from './Loader';


const Related = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['playlist'],
        queryFn: ()=>{
            return axios.get('https://676de1f5df5d7dac1cc940e9.mockapi.io/spotify').then(res => res.data)
        }
    })
    if(isLoading){
        return <Loader/>
    }
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-6 mt-3 max-[889px]:grid-cols-2">
        {data?.map((item)=>(
             <NavLink to={`playlist/${item.id}`} key={item.id}>
             <div className='bg-neutral-700  rounded-lg flex justify-between items-center group gap-3 hover:bg-neutral-600 duration-300 cursor-pointer'>
                 <div className='flex items-center gap-3'>
                     <img className='h-17 rounded-lg' src={item.thumbnail}/>
                     <h1 className='text-white font-semibold'>{item.title}</h1>
                 </div>
                 <div className='bg-green-500 text-2xl rounded-4xl px-4 py-4 mr-2 opacity-0 group-hover:opacity-80 duration-200 max-[889px]:hidden'>
                     <TbPlayerPlayFilled/>
                 </div>
             </div>
         </NavLink>
        ))}
        </div>
    </div>
  )
}

export default Related
