import React from 'react'
import Image from 'next/image'
import img1 from './assets/blue.png'
import img2 from './assets/blue.png'
import img3 from './assets/purple.png'
import img4 from './assets/purple.png'
import img5 from './assets/yellow.png'
import img6 from './assets/yellow.png'
const Jobdg = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] '>
                    <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>Career Opportunities After Completing the Digital Marketing Course</h2>
                    <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Completing our **Digital Marketing Course** opens up a plethora of career opportunities in various fields. The demand for skilled digital marketers is ever-growing, and you can explore diverse roles in the industry.</p>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 max-sm:gap-3 py-10 max-sm:py-5'>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img1} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>SEO Specialist</span><br />Optimize websites to improve search engine rankings and drive organic traffic. Use your SEO Training to enhance website visibility and attract more visitors.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img2} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Content Marketer</span><br />Develop engaging content to attract and retain customers. Use your skills from the Content Marketing Course to create compelling and valuable content.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img3} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>PPC Manager</span><br />Manage pay-per-click campaigns to generate leads and sales. Utilize your PPC Advertising Training to create and optimize effective PPC campaigns.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img4} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Digital Marketing Analyst</span><br />Analyze data and metrics to measure the effectiveness of digital marketing campaigns. Leverage web analytics tools to track performance and optimize strategies.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img5} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Social Media Manager</span><br />Create and execute social media strategies to enhance brand presence. Apply your knowledge from Social Media Marketing Classes to engage and grow your audience.</h2>
                        </div>
                        <div className='flex items-center gap-3 p-4 max-sm:p-2 rounded-2xl bg-[#fff]'>
                            <Image src={img6} className='max-sm:w-[60px]' alt='dfnd' />
                            <h2 className='text-[20x] max-xl:text-[18px] max-sm:leading-5 max-lg:text-[16px] max-sm:text-[14px] text-[#175574]'><span className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-medium'>Email Marketing Specialist</span><br />Design and implement email marketing campaigns to reach target audiences. Utilize email marketing tactics to create effective campaigns that drive results.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobdg