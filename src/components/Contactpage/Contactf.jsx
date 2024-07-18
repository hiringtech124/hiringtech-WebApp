import React from 'react'
import Image from 'next/image'
import img from './assets/c.svg'
import img1 from './assets/conres.svg'
const Contactf = () => {
  return (
    <>
      <div className='w-full flex justify-center py-5'>
        <div className='w-[90%] relative max-md:hidden'>
          <Image src={img} alt='image' className='w-full' />
          <div className='absolute top-[2%] max-lg:top-0 w-[40%]'>
            <h1 className='text-2xl max-xl:text-xl text-[#175574] font-semibold mb-3 max-lg:mb-0'><span className='font-bold mr-5 text-[#D79442]'>|</span>Talk to Us</h1>
            <h3 className='font-bold text-4xl max-xl:text-2xl text-[#062B43]'>Feel Free To Connect With Us!</h3>
          </div>
        </div>
        <div className='w-[90%] md:hidden flex flex-col gap-5'>
          <div className=''>
            <h1 className='text-lg text-[#175574] font-semibold '><span className='font-bold mr-2 text-[#D79442]'>|</span>Talk to Us</h1>
            <h3 className='font-bold text-2xl text-[#062B43]'>Feel Free To Connect With Us!</h3>
          </div>
          <Image src={img1} alt='image' className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Contactf
