import React from 'react'
import Image from 'next/image'
import img1 from './assets/f1.png'
import img2 from './assets/f2.png'
import img3 from './assets/f3.png'
const Fullstack = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex flex-col items-center'>
                    <div>
                        <h2 className='text-[#062B43] text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[24px] font-bold text-center'>Full Stack Web Development: Complete Solutions for Your Business</h2>
                        <h4 className='text-[20px] max-xl:text-[16px] max-sm:text-[14px] text-[#175574] font-medium text-center'>We provide comprehensive full stack web development services to build robust, scalable, and high-performing web applications. Our solutions include seamless integration, user-friendly interfaces, and secure backend systems.</h4>
                    </div>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 max-sm:gap-5 w-[80%] pt-10'>
                        <div className='bg-[#fff] p-5 max-sm:p-3 text-center shadow-xl flex flex-col items-center gap-5 max-sm:gap-2'>
                            <Image src={img1} alt='img' className='max-sm:w-[50px]' />
                            <h2 className='font-bold text-[20px] max-md:text-[16px] text-[#175574]'>Front-End Developer</h2>
                            <h2 className='text-[#175574] text-[18px] max-md:text-[14px] font-medium leading-6'>We craft engaging and responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular. Our designs focus on providing intuitive and visually appealing user experiences.</h2>
                        </div>
                        <div className='bg-[#fff] p-5 max-sm:p-3 text-center shadow-xl flex flex-col items-center gap-5 max-sm:gap-2'>
                            <Image src={img2} alt='img' className='max-sm:w-[50px]' />
                            <h2 className='font-bold text-[20px] max-md:text-[16px] text-[#175574]'>Back-End Developer</h2>
                            <h2 className='text-[#175574] text-[18px] max-md:text-[14px] font-medium leading-6'>Our back-end services involve building robust server-side applications using Node.js, PHP, and Python. We ensure your website is fast, secure, and can handle high traffic efficiently</h2>
                        </div>
                        <div className='bg-[#fff] p-5 max-sm:p-3 text-center shadow-xl flex flex-col items-center gap-5 max-sm:gap-2'>
                            <Image src={img3} alt='img' className='max-sm:w-[50px]' />
                            <h2 className='font-bold text-[20px] max-md:text-[16px] text-[#175574]'>Database Development</h2>
                            <h2 className='text-[#175574] text-[18px] max-md:text-[14px] font-medium leading-6'>We design and manage efficient databases to store and organize your data. Our team works with SQL and NoSQL databases to ensure your data is structured, secure, and easily accessible.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fullstack