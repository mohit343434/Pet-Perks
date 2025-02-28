'use client';
import Image from 'next/image'
import React from 'react'
import Herse from "@/asetus/horse.png"
import Fish from "@/asetus/fish.png"
import Cat from "@/asetus/cat.png"
import Bafalow from "@/asetus/bafalow.png"
import Dog from "@/asetus/dog.png"
import Turtle from "@/asetus/turtle.png"
import Cow from "@/asetus/cow.png"
import Ret from "@/asetus/ret.png"
import Gress from "@/asetus/Gress.png"
import dogFood from "@/asetus/dogFood.png"
import snake from "@/asetus/snake.png"
import carrot from "@/asetus/carrot.png"
const Herro = () => {
    return (
        <div className='h-[857px] flex items-center justify-center relative'>
            <div>
                <h1 className='text-center text-6xl text-[#062D3E]'>Your One - Stop Solution for</h1>
                <h1 className='text-center text-6xl text-[#3E3A3C] '>All Pets Need</h1>
                <p className='text-center text-base text-[#3E3A3C]'>Discover a world of pet care and convenience, from grooming and medical </p>
                <p className='text-center text-base text-[#3E3A3C]'>services to toys and meetups. Get ready to join a community of pet lovers!</p>
            </div>
            <div className='absolute top-0 left-[6%] '>
                <div className='relative'>
                    <Image src={Herse} alt="Horse Image" width={250} height={250} className="object-cover" />
                    <div className='absolute top-[80%] left-0 '>
                        <Image src={Gress} alt="Horse Image" width={110} height={110} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-[35%]'>
                <Image src={Fish} alt="Horse Image" width={200} height={200} className="object-cover" />
            </div>
            <div className='absolute top-0 left-[60%]'>
                <Image src={Cat} alt="Horse Image" width={200} height={200} className="object-cover" />
            </div>
            <div className='absolute top-[12%] right-[6%]'>
                <Image src={Bafalow} alt="Horse Image" width={250} height={250} className="object-cover" />
            </div>
            <div className='absolute bottom-32 left-[6%]'>
                <div className='relative'>
                    <Image src={Dog} alt="Horse Image" width={250} height={250} className="object-cover" />
                    <div className='absolute top-[80%] left-[-20px] '>
                        <Image src={dogFood} alt="Horse Image" width={110} height={110} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-12 left-[30%]'>
                <div className='relative'>
                    <Image src={Turtle} alt="Horse Image" width={230} height={230} className="object-cover" />
                    <div className='absolute top-[80%] left-[-10px] '>
                        <Image src={snake} alt="Horse Image" width={80} height={80} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-12 left-[60%]'>
                <Image src={Cow} alt="Horse Image" width={230} height={230} className="object-cover" />
            </div>
            <div className='absolute bottom-48 right-[6%]'>
                <div className='relative'>
                    <Image src={Ret} alt="Horse Image" width={180} height={180} className="object-cover" />
                    <div className='absolute top-[70%] right-[-30px] '>
                        <Image src={carrot} alt="Horse Image" width={80} height={80} className="object-cover" />
                    </div>
                </div>
            </div>
            <div className='absolute top-[40%] left-[6%] w-full'>
                <h1 className='text-xl text-[#062D3E] w-full flex items-end'>all  <h1 className='text-5xl mx-2'> categories</h1> are here</h1>
            </div>
        </div>
    )
}

export default Herro