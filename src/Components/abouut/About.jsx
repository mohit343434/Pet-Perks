'use client';
import React from 'react'
import { Arrow, LeftForFoot, RightForFoot } from '../Icon'
import Button from '../globalsComponents/Button';
// import styles from "@/app/Main.module.css"
const About = () => {
  return (
    <div className="bg-[#FFFFFF] flex justify-center py-7">
      <div className="w-11/12 bg-[#F9F4F1] p-3 rounded-[30px] relative shadow-[0px_4px_7px_0px_#00000024]" >
        <div className='absolute top-0 left-20'><LeftForFoot /></div>
        <div className='absolute top-0 right-20'><RightForFoot /></div>

        <div> <h1 className="text-center text-6xl my-5">ABOUT US</h1> </div>
        <div className="flex justify-center flex-col text-center">
          <h6 className="text-base font-semibold">Meet Pet Perks - Here for You and Your Pets!</h6>
          <p className="text-base font-normal">Because Pets Deserve the Best” to resonate with visitors emotionally.</p>
          <h6 className="text-base font-semibold">We Believe In Doing.</h6>
          <p className="text-base font-normal z-10"> At Pet Perks, we're passionate pet lovers committed to enhancing the lives of pets and their humans. Our mission is to simplify pet care by offering a single platform for all your pet's needs. From essentials like food and toys to unique experiences like meetups and personalized grooming, we are building a pet - centric ecosystem. Whether you’re a new pet parent or a seasoned pro, our app will provide convenient solutions for every step of your pet journey.</p>
        </div>
        <div className='w-full flex items-center justify-center m-5'>
          <div className='w-56' > <Button text="More About Us" Icon={<Arrow />} /> </div>
        </div>
      </div>
    </div>
  )
}

export default About