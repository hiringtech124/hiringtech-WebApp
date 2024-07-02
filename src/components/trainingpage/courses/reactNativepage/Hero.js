import React from 'react'
import Image from 'next/image'
import hero from './assets/hero.png'
const Hero = () => {
    return (
        <>
            <div className='flex justify-center w-full h-full font-serif py-10 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col max-sm:gap-2 justify-between'>
                    <div className='w-[60%] max-sm:w-full'>
                        <h1 className='font-bold text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-[22px] text-[#062B43]'>React Native Training <br />Course by Hiring Tech</h1>
                        <p className='text-[28px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] text-justify leading-9 max-lg:leading-7 max-md:leading-5 text-[#062B43]'>In today's fast-paced digital world, mobile app development has become a crucial skill for developers. If you're looking to enhance your career and become proficient in creating high-quality mobile applications, LEARN REACT NATIVE with our comprehensive REACT NATIVE ONLINE TRAINING COURSES at Hiring Tech. Our expertly designed courses are tailored to provide you with the knowledge and practical experience needed to excel in this field.</p>
                    </div>
                    <Image src={hero} className='my-auto max-lg:w-[200px] max-sm:self-center max-sm:w-[300px] ' alt='hero-image' />
                </div>
            </div>
        </>
    )
}

export default Hero