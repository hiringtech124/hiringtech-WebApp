import React from 'react'
import Image from 'next/image'
import hero from './assets/hero.png'
const HeroDg = () => {
    return (
        <>
            <div className='flex justify-center w-full h-full font-serif py-10 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col max-sm:gap-2 justify-between'>
                    <div className='w-[60%] max-sm:w-full'>
                        <h1 className='font-bold text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-[22px] text-[#062B43]'>Digital Marketing Training<br />Course by Hiring Tech</h1>
                        <p className='text-[28px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] text-justify leading-9 max-lg:leading-7 max-md:leading-5 text-[#062B43]'>Digital Marketing Courses** offer a comprehensive understanding of digital marketing strategies and techniques. Enrolling in these digital marketing courses will equip you with the skills needed to thrive in the ever-evolving digital landscape. Whether you are a beginner or looking to enhance your existing knowledge, our digital marketing courses cover a wide range of topics, including SEO Training, PPC Advertising Training, Social Media Marketing Classes, and Content Marketing Courses. Gain hands-on experience through real-world projects and stay ahead in the competitive market. Our digital marketing courses are designed to provide practical insights and actionable strategies to boost your career in digital marketing.</p>
                    </div>
                    <Image src={hero} className='my-auto max-lg:w-[200px] max-sm:self-center max-sm:w-[300px] ' alt='hero-image' />
                </div>
            </div>
        </>
    )
}

export default HeroDg