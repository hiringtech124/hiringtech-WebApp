import React from 'react'
import Image from 'next/image'
import img from './assets/shero.png'
import img1 from './assets/sres.svg'
const SerHero = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] max-md:hidden flex justify-center relative'>
                    <Image src={img} alt='img' className='w-full' />
                    <div className='absolute top-[4%] max-lg:top-[2%] left-0 flex flex-col gap-2 max-xl:gap-0'>
                        <h2 className='text-[26px] max-xl:text-[22px] max-lg:text-[18px] text-[#175574] font-medium'><span className='text-[#D79442] font-bold mr-5   '>|</span>Elevate Your Business with Our Expertise</h2>
                        <p className='text-[#062B43] w-[55%] text-[34px] max-xl:text-[30px] max-lg:text-[22px] font-bold leading-10 max-xl:leading-8 max-lg:leading-6'>Your Go-To Partner for Reacruitment, IT Training, and Web & App Development</p>
                    </div>
                    <div className='absolute left-[51%] flex bottom-[2%] max-xl:bottom-0'>
                        <h3 className='text-[20px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[12px] text-[#175574] leading-6 max-lg:leading-4'>Achieve your business goals with our comprehensive services. At Hiring Tech, we specialize in Recruitment, advanced IT Training, and cutting-edge Web & App Development. We are committed to delivering innovative solutions to help you reach new heights.</h3>
                    </div>
                </div>
                <div className='w-[90%] md:hidden py-5'>
                    <h2 className='text-[20px] max-sm:text-[16px] text-[#175574] font-medium mb-2'><span className='text-[#D79442] font-bold mr-1   '>|</span>Elevate Your Business with Our Expertise</h2>
                    <p className='text-[#062B43] text-[24px] max-sm:text-[18px] font-bold '>Your Go-To Partner for Reacruitment, IT Training, and Web & App Development</p>
                    <Image src={img1} alt='sdkjb' className='w-full py-4' />
                    <h3 className='text-[18px] max-sm:text-[14px] text-[#175574]'>Achieve your business goals with our comprehensive services. At Hiring Tech, we specialize in Recruitment, advanced IT Training, and cutting-edge Web & App Development. We are committed to delivering innovative solutions to help you reach new heights.</h3>

                </div>
            </div>
        </>
    )
}

export default SerHero