'use client'
import React from 'react'
import { Coll, Logo } from './Icon'

const Nevbar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-2 items-center">
      <div className="flex flex-row">
        <div> <Logo /> </div>
      </div>

      <div className="flex flex-row gap-3 items-center" >
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>Homepage</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>About Us</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>Product & Services</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>Bruno Story</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>FAQ’s</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'> <span>Blog / Resource</span> </div>
        <div className='text-sm font-normal hover:text-[#FB7E46] cursor-pointer'>
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