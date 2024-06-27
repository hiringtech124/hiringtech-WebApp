import React from 'react'
import Image from 'next/image'
import dots from './assets/dots.png'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
import './indus.css'
function Industry() {
    return (
        <>
            <div className='bg-[F7F9EB] w-full h-full relative pt-[40px] max-sm:pt-[20px] flex flex-col pb-[20px]'>
                <div className='flex  justify-between'>
                    <div className='flex items-center relative'>
                        <div className='max-sm:hidden bg-[#062B43] w-[150px] h-[150px] max-md:h-[100px] rounded-3xl absolute left-[-130px] max-sm:left-[-135px]'></div>
                        <div className='flex flex-col gap-5 max-sm:gap-2 text-[#062B43] pl-[100px] max-lg:pl-[80px] max-sm:px-[10px]'>
                            <h1 className='text-[28px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[16px]'><span className='border-l-4 border-[#D79442] border-solid  pr-[20px] max-sm:pr-2'></span>Join our courses and be our next success story!</h1>
                            <h1 className='text-[41px] max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px] font-bold'>Explore Our Placements by Industries</h1>
                        </div>
                    </div>
                    {/* <Image src={dots} className=' h-[200px] max-sm:h-[80px] max-md:w-[100px] max-xl:w-[120px] max-sm:w-[50px] mt-[-40px]' alt=" dots" /> */}
                </div>
            </div>
            <div className='w-full h-full bg-[F7F9EB] flex justify-center py-[50px] max-sm:hidden'>
                <div className="w-[80%] h-[800px] max-xl:h-[700px] max-lg:h-[600px] max-md:h-[500px] max-sm:h-[400px] grid grid-rows-3 grid-cols-4 gap-4">

                    <div className="text-[#fff] row-span-1 col-span-1 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img1} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Fintech</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-2 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img2} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>E-commerce</h1>
                    </div>


                    <div className="text-[#fff] row-span-2 col-span-1 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img3} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Supply chain</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-2 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img4} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Manufacture</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-1 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img5} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Food & Beverages</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-1 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img6} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Hospitality</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-2 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img7} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Real Estate</h1>
                    </div>


                    <div className="text-[#fff] row-span-1 col-span-1 rounded-[40px] max-xl:rounded-[30px] max-lg:rounded-[20px] overflow-hidden relative">
                        <Image src={img8} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[25px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[16px] absolute bottom-[5px] left-[20px]'>Healthcare</h1>
                    </div>
                </div>
            </div>
            <div className='max-sm:block sm:hidden w-[100%] h-[700px] overflow-scroll py-[30px]'>
                <div className='flex flex-col items-center w-[100%]  gap-5'>
                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img1} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Fintech</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img2} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>E-commerce</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img3} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Supply chain</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img4} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Manufacture</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img5} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Food & Beverages</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img6} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Hospitality</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img7} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Real Estate</h1>
                    </div>


                    <div className="text-[#fff] rounded-[20px] overflow-hidden w-[200px] h-[200px] relative">
                        <Image src={img8} className='w-full h-full hover-zoom' alt='img' />
                        <h1 className='text-[16px] absolute bottom-[5px] left-[10px]'>Healthcare</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industry