import React from 'react'
import Image from 'next/image'
import img from './32.png'

const CareerHero = () => {
  return (
    <>
      <div className='w-full flex justify-center py-10 max-md:py-5'>
        <div className='w-[90%]'>
          <div className='servidc mb-10'>
            <h3 className='text-[#175574] text-[33px] max-xl:text-[28px] max-lg:text-[20px] max-sm:text-[18px] font-semibold '>
              <span className='mr-5 font-bold text-[#D79442]'>|</span>
              Career
            </h3>
            <h1 className='text-[#062B43] text-[58px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[26px] font-bold'>
              Join Us.
            </h1>
            <p className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px] font-medium'>
              HELP US MAKE WEB FASTER
            </p>
          </div>

          <div className='bg-[#fff7f7]'>
            <Image
              className='mix-blend-difference '
              src={img}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerHero
