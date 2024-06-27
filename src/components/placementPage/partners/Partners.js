import React from 'react'
import Image from 'next/image'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
function Partners() {
    return (
        <>
            <div className='bg-[F7F9EB] w-full h-full relative pt-[40px] max-sm:pt-[20px] flex flex-col py-[50px]'>
                <div className='flex items-center relative'>
                    <div className='max-sm:hidden bg-[#062B43] w-[150px] h-[150px] max-md:h-[100px] rounded-3xl absolute left-[-130px] max-sm:left-[-135px]'></div>
                    <div className='flex flex-col gap-5 max-sm:gap-2 text-[#062B43] pl-[100px] max-lg:pl-[80px] max-sm:pl-[10px]'>
                        <h1 className='text-[28px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[16px]'><span className='border-l-4 border-[#D79442] border-solid  pr-[20px]'></span>Partners</h1>
                        <h1 className='text-[41px] max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px] font-bold'>Our Placements Partners</h1>
                    </div>
                </div>
            </div>
            <div className='bg-[F7F9EB] flex justify-center h-full w-full pb-[100px] max-sm:pb-[50px]'>
                <div className='grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-[100px] max-xl:gap-[30px] max-lg:gap-[50px] gap-y-10'>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img1} className="bg-[#fff] max-md:w-[80px]" alt="img1" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img2} className="bg-[#fff] max-md:w-[80px]" alt="img2" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img3} className="bg-[#fff] max-md:w-[80px]" alt="img3" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img4} className="bg-[#fff] max-md:w-[80px]" alt="img4" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img5} className="bg-[#fff] max-md:w-[80px]" alt="img5" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img6} className="bg-[#fff] max-md:w-[80px]" alt="img6" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img7} className="bg-[#fff] max-md:w-[80px]" alt="img7" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img8} className="bg-[#fff] max-md:w-[80px]" alt="img8" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img1} className="bg-[#fff] max-md:w-[80px]" alt="img5" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img2} className="bg-[#fff] max-md:w-[80px]" alt="img6" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img3} className="bg-[#fff] max-md:w-[80px]" alt="img7" />
                    </div>
                    <div className="border border-[#ABE0F8] px-[30px] max-md:px-[20px] flex items-center justify-center py-[5px] rounded-xl">
                        <Image src={img4} className="bg-[#fff] max-md:w-[80px]" alt="img8" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners