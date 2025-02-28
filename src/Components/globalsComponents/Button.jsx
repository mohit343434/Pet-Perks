'use client';
import React from 'react'

const Button = ({ text, Icon }) => {
    return (
        <button className='bg-[#FB7E46] flex items-center justify-center py-2 px-3 gap-2 rounded-lg cursor-pointer'>
            <div>{text  }</div>
            <div> {Icon} </div>
        </button>
    )
}

export default Button