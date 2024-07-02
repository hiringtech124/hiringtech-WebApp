import React from 'react'
import Image from 'next/image'
import hero from './assets/hero.png'
const Hero = () => {
    return (
        <>
            <div className='flex justify-center w-full h-full font-serif py-10 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col max-sm:gap-2 justify-between'>
                    <div className='w-[60%] max-sm:w-full'>
                        <h1 className='font-bold text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-[22px] text-[#062B43]'>React JS Training Course <br />by Hiring Tech</h1>
                        <p className='text-[28px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] text-justify leading-9 max-lg:leading-7 max-md:leading-5 text-[#062B43]'>Are you looking to boost your career in web development? Look no further! Hiring Tech offers an unparalleled REACT JS TRAINING COURSE designed to help you master one of the most sought-after skills in the tech industry. Whether you're a beginner or an experienced developer looking to upgrade your skills, our React JS Online course provides comprehensive training and valuable certification.</p>
                    </div>
                    <Image src={hero} className='my-auto max-lg:w-[200px] max-sm:self-center max-sm:w-[300px] ' alt='hero-image' />
                </div>
            </div>
        </>
    )
}

export default Hero