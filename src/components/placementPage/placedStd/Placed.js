import React from 'react'
import Image from 'next/image'
import dots from './assets/dots.png'
import img1 from './assets/emily.png'
function Placed() {
    return (
        <>
            <div className='bg-[F7F9EB] w-full h-full relative pt-[40px] max-sm:pt-[20px] flex flex-col pb-[20px]'>
                <div className='flex  justify-between'>
                    <div className='flex relative'>
                        <div className='max-sm:hidden bg-[#D79442] w-[150px] h-[150px] max-md:h-[100px] rounded-3xl absolute left-[-130px] max-sm:left-[-135px]'></div>
                        <div className='flex flex-col gap-5 max-sm:gap-2 text-[#062B43] pl-[100px] max-lg:pl-[40px] max-sm:px-[10px]'>
                            <h1 className='text-[28px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[16px]'><span className='border-l-4 border-[#D79442] border-solid  pr-[20px]'></span>Recently Placed Students</h1>
                            <h1 className='text-[41px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[18px] max-lg:tracking-tight font-bold'>Highlighting our latest Success stories From Our talented Candidates</h1>
                        </div>
                    </div>
                    {/* <Image src={dots} className=' h-[200px] max-sm:h-[80px] max-lg:w-[100px]  max-xl:w-[120px] max-sm:w-[50px] mt-[-40px]' alt=" dots" /> */}
                </div>
            </div>
            <div className='w-[100%] flex justify-center pb-[50px]'>
                <div className='bg-[F7F9EB] w-[90%] flex flex-wrap justify-center gap-20 max-sm:gap-y-5'>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                    <div className='p-[10px] bg-[#fff] rounded-xl flex flex-col items-center gap-3 max-lg:gap-1'>
                        <Image src={img1} className='max-sm:w-[150px] max-md:w-[190px] max-lg:w-[210px]' alt="fadfd" />
                        <h1 className='text-[#062B43] text-[25px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[22px] font-bold'>Emily Parker</h1>
                        <p className='text-[#D79442] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Rs. 15 Lacs</p>
                        <p className='text-[#062B43] text-[20px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[20px]'>Data Analyst at Google</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Placed