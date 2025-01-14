import React from 'react'
import style from "./style.module.css"
import Logo from './Icon'
const Nevbar = () => {
  return (
    <div className={style.mainConinter} >
      <div className={style.logoContiner}>
        <div> <Logo /> </div>
        <div>
          <span className={style.logo_text01}> PET </span> <span className={style.logo_text02}>PERKS</span>
        </div>
      </div>
      <div className={style.NavConitiner} >
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }} > <span>Homepage</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>About Us</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>Product & Services</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>Bruno Story</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>FAQ’s</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>Blog / Resource</span> </div>
        <div className='w-full' style={{ padding: "8px", fontSize: "16px" , fontWeight:"400" }}> <span>Contact </span>  </div>

      </div>
    </div>
  )
}

export default Nevbar