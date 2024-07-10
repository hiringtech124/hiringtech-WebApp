import React from 'react'
import Image from 'next/image'
import img1 from './assets/c1.png'
import img2 from './assets/c2.png'
import img3 from './assets/c3.png'
import img4 from './assets/c4.png'
const Custom = () => {
    return (
        <>
            <div className='w-full flex justify-center pb-20 max-sm:py-10'>
                <div className='w-[90%] flex flex-col items-center gap-10'>
                    <div>
                        <h2 className='text-[#062B43] text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[24px] font-bold text-center'>Custom Web Development</h2>
                        <h4 className='text-[20px] max-xl:text-[16px] max-sm:text-[14px] text-[#175574] font-medium text-center'>Tailored Solutions for Unique Needs Custom web development involves creating unique web solutions tailored to your specific business needs. Our process ensures that your website is scalable, user-friendly, and aligned with your business objectives.</h4>
                    </div>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-20 max-xl:gap-10 max-sm:gap-5 max-sm:w-[100%] w-[80%]'>
                        <div className='bg-[#fff] p-3 rounded-2xl flex gap-4'>
                            <Image src={img1} alt='aklakf' className='my-auto max-sm:w-[50px]' />
                            <h2 className='text-[#175574] text-[20px] max-lg:text-[16px]'><span className='font-semibold'>Requirement Analysis</span><br />Understanding your business goals and technical needs.</h2>
                        </div>
                        <div className='bg-[#fff] p-3 rounded-2xl flex gap-4'>
                            <Image src={img2} alt='aklakf' className='my-auto max-sm:w-[50px]' />
                            <h2 className='text-[#175574] text-[20px] max-lg:text-[16px]'><span className='font-semibold'>Design & Development</span><br /> Creating a custom solution with a focus on your brand and target audience.</h2>
                        </div>
                        <div className='bg-[#fff] p-3 rounded-2xl flex gap-4'>
                            <Image src={img3} alt='aklakf' className='my-auto max-sm:w-[50px]' />
                            <h2 className='text-[#175574] text-[20px] max-lg:text-[16px]'><span className='font-semibold'>Testing & Quality Assurance</span><br />Ensuring the solution is bug-free and performs optimally.</h2>
                        </div>
                        <div className='bg-[#fff] p-3 rounded-2xl flex gap-4'>
                            <Image src={img4} alt='aklakf' className='my-auto max-sm:w-[50px]' />
                            <h2 className='text-[#175574] text-[20px] max-lg:text-[16px]'><span className='font-semibold'>Deployment & Support</span><br />Providing continuous support and updates post-launch.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Custom