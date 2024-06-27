import React from 'react'
import Image from 'next/image'
import img from './assets/rev.png'
import star from './assets/star.png'
function Review() {
    return (
        <>
            <div className='w-full h-full flex justify-between max-md:flex-wrap pb-[50px]'>
                <div className='h-full relative pt-[40px] max-sm:pt-[20px] py-[50px]'>
                    <div className='max-sm:hidden bg-[#062B43] w-[150px] h-[150px] max-md:h-[100px] rounded-3xl absolute left-[-130px] max-sm:left-[-135px]'></div>
                    <div className='flex items-center'>
                        <div className='flex flex-col gap-5 max-xl:gap-3 max-sm:gap-2 w-[600px] max-xl:w-[450px] max-lg:w-[350px] max-sm:w-[300px] text-[#062B43] pl-[100px] max-xl:pl-[60px] max-sm:pl-[10px]'>
                            <h1 className='text-[28px] max-xl:text-[26px] max-lg:text-[20px] max-md:text-[22px] max-sm:text-[16px]'><span className='border-l-4 border-[#D79442] border-solid  pr-[20px] max-sm:pr-2'></span>Learn smarter . not harder</h1>
                            <h1 className='text-[41px] max-xl:text-[32px] max-lg:text-[24px] max-md:text-[28px] max-sm:text-[18px] leading-10 font-bold max-lg:leading-7'>Enjoyable learning experiences await you</h1>
                            <h1 className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[16px] max-sm:text-[14px] leading-6 max-lg:leading-5'>You can study wherever and whenever you want easily. We try to make it easier for you to learn and achieve your dreams</h1>
                            <hr class="border-t-2 border-blue-500"></hr>
                            <div className='flex gap-10 max-xl:gap-5 max-lg:gap-1'>
                                <h1 className='text-[#062B43] font-bold text-[41px] max-xl:text-[30px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px] flex flex-col items-center'>3,000<span className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-center'>Daily Active Users</span></h1>
                                <h1 className='text-[#062B43] font-bold text-[41px] max-xl:text-[30px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px] flex flex-col items-center'>85%<span className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-center'>Courses Enrollment rate</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-full items-center justify-end pr-[100px] max-lg:pr-[50px] max-[350px]:pr-[10px] max-md:pr-[40px] max-sm:pr-[0px] relative'>
                    <Image src={img} className='w-[550px] h-[400px] max-xl:w-[450px] max-xl:h-[350px] max-lg:w-[350px] max-lg:h-[250px] max-sm:w-[300px] max-sm:h-[250px]' alt='sdgsdf' />
                    <div className='bg-[#175574] px-[10px] max-lg:px-[5px] py-[10px] max-lg:py-[8px] flex items-center gap-1 rounded-xl absolute bottom-[0%]'>
                        <Image src={star} alt="fwfqe" />
                        <p className='text-[#fff] text-[20px] max-xl:text-[16px] max-lg:text-[12px] max-sm:text-[10px] tracking-tighter'>4.1  25k+ Reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review