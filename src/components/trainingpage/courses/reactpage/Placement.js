import React from 'react'
import Image from 'next/image'
import img1 from './assets/f1.png'
import img2 from './assets/f2.png'
import img3 from './assets/f3.png'
const Placement = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] flex flex-col items-center'>
                    <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-[#175574]'>React JS Training with 100% Placement Assistance</h2>
                    <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Our commitment to your success extends beyond training. With our REACT JS TRAINING WITH PLACEMENT ASSISTANCE, we provide comprehensive support to help you secure your ideal job in the tech industry. Our placement assistance program covers:</p>
                    <div className='my-10 flex flex-col gap-10 p-5 bg-[#fff] shadow-lg rounded-xl'>
                        <div className='flex gap-5 max-sm:gap-2'>
                            <Image src={img1} className='m-auto max-sm:w-[60px]' alt='img1' />
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] w-[500px] max-sm:w-[270px] max-lg:w-[350px] text-[#175574] leading-7 max-md:leading-5'><span className='font-bold'>Resume Building</span><br />Receive guidance on crafting a standout resume that highlights your React JS skills and project experience.</h2>
                        </div>
                        <div className='flex gap-5 max-sm:gap-2'>
                            <Image src={img2} className='m-auto max-sm:w-[60px]' alt="img2" />
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] w-[500px] max-sm:w-[270px] max-lg:w-[350px] text-[#175574] leading-7 max-md:leading-5'><span className='font-bold'>Interview Preparation</span><br />Prepare for technical interviews through mock sessions focusing on common questions, coding challenges, and industry-specific scenarios.</h2>
                        </div>
                        <div className='flex gap-5 max-sm:gap-2'>
                            <Image src={img3} className='m-auto max-sm:w-[60px]' alt="img3" />
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] w-[500px] max-sm:w-[270px] max-lg:w-[350px] text-[#175574] leading-7 max-md:leading-5'><span className='font-bold'>Job Placement </span><br />Leverage our extensive network of hiring partners to connect with top companies actively seeking React JS developers. </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Placement