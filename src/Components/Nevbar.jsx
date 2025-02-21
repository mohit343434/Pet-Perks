import React from 'react'
import Logo from './Icon'
const Nevbar = () => {
  return (
    <div className="border bg-yellow-700 flex flex-row w-full">

      <div className="">
        <div> <Logo /> </div>
        <div>
          <span className=""> PET </span> <span className="">PERKS</span>
        </div>
      </div>

      <div className="" >
        <div className='bg-red-700'> <span>Homepage</span> </div>
        <div className='bg-red-700'> <span>About Us</span> </div>
        <div className=''> <span>Product & Services</span> </div>
        <div className=''> <span>Bruno Story</span> </div>
        <div className=''> <span>FAQ’s</span> </div>
        <div className=''> <span>Blog / Resource</span> </div>
        <div className=''> <span>Contact </span>  </div>

      </div>
    </div>
  )
}

export default Nevbar