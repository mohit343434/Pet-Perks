import React from 'react'
// import { Roboto } from 'next/font/google';

const LayoutWaper = ({ children }) => {
  // const roboto = Roboto({
  //   subsets: ['latin'], 
  //   weight: ['400', '700'], 
  //   style: ['normal', 'italic'], 
  // });
  return (
    <div className='max-w-screen-2xl mx-auto border-2' >
      {children}
    </div>
  )
}

export default LayoutWaper