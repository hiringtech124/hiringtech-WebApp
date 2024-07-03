import React from 'react'
import Image from 'next/image'
import img1 from './assets/j1.png'
import img2 from './assets/j2.png'
import img3 from './assets/j3.png'
import img4 from './assets/j4.png'
import img5 from './assets/j5.png'
import img6 from './assets/j6.png'
const Placement = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] '>
                    <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>HR Online Training with 100% Placement Assistance</h2>
                    <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>We are committed to helping you launch and advance your career in HR. Our program offers comprehensive placement assistance to ensure you find the right job after completing the course.</p>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 max-sm:gap-3 py-10 max-sm:py-5'>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img1} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Resume Building</span><br />Get expert guidance on crafting a professional resume that highlights your skills and experience.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img2} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Career Counseling</span><br />Receive one-on-one counseling sessions to explore career paths and opportunities in HR.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img3} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Interview Preparation</span><br />Participate in mock interviews and receive feedback to improve your interview skills.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img4} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Industry Connections</span><br />Benefit from our strong industry ties and partnerships to secure interviews and job placements.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img5} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Job Search Support  </span><br />Access job portals, company databases, and networking events to find suitable job openings. </h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img6} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Continuous Support </span><br />Enjoy ongoing support from our placement team until you secure a job that matches your career goals.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Placement