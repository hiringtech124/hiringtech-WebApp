import React from 'react'
import Image from 'next/image'
import img1 from './assets/yellow.png'
import img2 from './assets/blue.png'
import img3 from './assets/purple.png'
const Job = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] '>
                    <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>Job Opportunities After Completing Our React Native Training Course</h2>
                    <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>The demand for skilled React Native developers is on the rise, and completing our **REACT NATIVE TRAINING COURSE** opens up a plethora of job opportunities. Here are some of the roles you can pursue:</p>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 max-sm:gap-3 py-10 max-sm:py-5'>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img1} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>React Native Developer</span><br />Receive guidance on crafting a standout resume that highlights your React JS skills and project experience.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img1} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Full Stack Developer</span><br />Receive guidance on crafting a standout resume that highlights your React JS skills and project experience.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img2} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Mobile App Developer</span><br />Prepare for technical interviews through mock sessions focusing on common questions, coding challenges, and industry-specific scenarios.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img2} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>UI/UX Designer</span><br />Prepare for technical interviews through mock sessions focusing on common questions, coding challenges, and industry-specific scenarios.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img3} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Frontend Developer </span><br />Leverage our extensive network of hiring partners to connect with top companies actively seeking React JS developers. </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Job