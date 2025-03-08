import React from 'react'
import Banner_header from './Banner_header'
import Related from './Related'
import Banner_last from './Banner_last'

const Banner = () => {
  return (
    <div className=' w-[80vw] bg-neutral-900 rounded-lg max-[1023px]:w-[98vw]'>
        <Banner_header/>
        <Related/>
        <Banner_last/>
        <Banner_last/>
        <Banner_last/>
        <Banner_last/>
        <Banner_last/>
    </div>
  )
}

export default Banner
