import Image from 'next/image'
import React from 'react'
import img from './assetss/3.png'

const About2 = () => {
  return (
    <>
      <div className='flex font-serif justify-center items-center py-20 max-sm:py-10 w-[90%] text-white max-lg:h-full   max-md:px-0 gap-28 max-lg:gap-10 max-sm:gap-0 max-md:flex-col mx-auto'>
        <div className=''>
          <Image src={img} alt='m' />
        </div>
        <div className='flex flex-col mt-5 w-[50%] max-md:w-full max-w[1200px] max-md:max-w-full'>
          <h3 className='self-start text-[#062B43] text-xl max-lg:text-[20px] font-bold leading-[51.2px]'>
            <span className='text-[#D79442]'>|</span> About Us
          </h3>
          <h2 className='self-start text-[#062B43] text-[41px] max-xl:text-[35px] max-lg:text-[28px] font-bold leading-[51.2px]'>
            Why Choose Us?
          </h2>
          <div className='mt-10 max-xl:mt-5 max-lg:mt-0 max-lg:leading-7 max-sm:leading-6 text-2xl max-xl:text-[22px] max-lg:text-[18px] max-sm:text-[16px] max-lg:text-justify  text-[#175574]  font-semibold tracking-tight text-left max-md:mt-2 max-md:max-w-full max-lg:h-full'>
            Hiring Tech, a trusted placement agency in Indore, offers dependable
            recruitment solutions. Our team of 100+ IT professionals includes
            senior programmers, graphic designers, project managers, and more,
            ensuring access to a wealth of talent and expertise.
          </div>
        </div>
      </div>
    </>
  )
}

export default About2
