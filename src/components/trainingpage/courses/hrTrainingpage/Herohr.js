import React from 'react'
import Image from 'next/image'
import hero from './assets/hero.png'
const Hero = () => {
    return (
        <>
            <div className='flex justify-center w-full h-full font-serif py-10 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col max-sm:gap-2 justify-between'>
                    <div className='w-[60%] max-sm:w-full'>
                        <h1 className='font-bold text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-[22px] text-[#062B43]'>HR Training Program Training <br />Course by Hiring Tech</h1>
                        <p className='text-[28px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] text-justify leading-9 max-lg:leading-7 max-md:leading-5 text-[#062B43]'>Our **HR Training Program** is designed to provide comprehensive knowledge and skills essential for effective **human resource management**. Through this program, you will **learn HR training** best practices in HR, from recruitment and talent management to compliance and employee relations. The training includes practical sessions, case studies, and real-world applications to ensure you are industry-ready. Whether you are new to HR or looking to advance your career, this program will equip you with the necessary tools to succeed. Join us to enhance your HR expertise and make a significant impact on your organization.</p>
                    </div>
                    <Image src={hero} className='my-auto max-lg:w-[200px] max-sm:self-center max-sm:w-[300px] ' alt='hero-image' />
                </div>
            </div>
        </>
    )
}

export default Hero