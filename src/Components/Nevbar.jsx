'use client';
import React from 'react'
import { Coll, Logo } from './Icon'

const Nevbar = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row">
        <div> <Logo /> </div>
      </div>
      <div className="flex flex-row gap-3 items-center" >
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>Homepage</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>About Us</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>Product & Services</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>Bruno Story</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>FAQ’s</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer text-[#331A15]'> <span>Blog / Resource</span> </div>
        <div className='text-sm font-normal cursor-pointer'>
          <div className='flex flex-row gap-2 items-center justify-around bg-[#FB7E46] p-[10px] rounded-md'>
            <div><Coll /></div>
            <div>Contact</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Nevbar