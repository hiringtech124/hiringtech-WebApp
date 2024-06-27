import React from 'react'
import Image from 'next/image'
import dots from "./assets/dots.png"
import img from './assets/heroImg.png'
import logo from './assets/logoht.png'
import bg from './assets/herobg.png'
import './hero.css'
function Hero() {
    return (
        <>
            <div className='bg-[F7F9EB] w-full h-full relative mt-5 max-sm:pt-[10px] flex flex-col pb-[20px]'>
                <div className='flex  justify-between'>
                    <div className='flex relative'>
                        <div className='bg-[#062B43] max-sm:hidden w-[150px] h-[150px] max-md:h-[100px] rounded-3xl absolute left-[-25%] max-xl:left-[-29%] max-lg:left-[-34%] max-md:left-[-38%] max-sm:left-[-70%]'></div>
                        <div className='flex flex-col gap-5 max-sm:gap-2 text-[#062B43] pl-[100px] max-lg:pl-[80px] max-sm:pl-[10px]'>
                            <h1 className='text-[28px] max-xl:text-[28px] max-lg:text-[26px] max-md:text-[22px] max-sm:text-[16px]'><span className='border-l-4 border-[#D79442] border-solid  pr-[20px] max-sm:pr-2'></span>Placements</h1>
                            <h1 className='text-[41px] max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px] font-bold'>Our Success Stories</h1>
                        </div>
                    </div>
                    {/* <Image src={dots} className=' h-[200px] max-sm:h-[80px] max-md:w-[100px] max-xl:w-[120px] max-sm:w-[50px] mt-[-40px]' alt=" dots" /> */}
                </div>
            </div>
            <div className='w-[100%] h-full flex justify-center pb-[100px] max-sm:pb-[50px]'>
                <div className='relative'>
                    <Image src={bg} className='max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[300px]' alt=" dfadfadf" />
                    <h1 className='text-[#175574] font-bold text-[40px] max-xl:text-[28px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[9px] w-full flex justify-end absolute top-[0px]'>BEST PLACEMENTS</h1>
                    <div className='w-full flex justify-center gap-[280px] max-xl:gap-[200px] max-lg:gap-[150px] max-md:gap-[135px] max-sm:gap-[40px] absolute top-[10%] max-xl:top-[9%] max-lg:top-[4%] max-md:top-[2%] max-sm:top-[3%]'>
                        <Image src={img} className='w-[350px] max-xl:w-[250px] max-lg:w-[180px] max-md:w-[130px] max-sm:w-[80px] ml-[150px] max-lg:ml-[90px] max-md:ml-[70px] max-sm:ml-[50px] mt-[113px] max-sm:mt-[35px]' alt="sdfd" />
                        <div className='flex flex-col gap-5 max-xl:gap-2 max-md:gap-1 max-sm:gap-0 mt-[50px] max-sm:mt-[20px]'>
                            <h1 className='text-[41px] max-xl:text-[32px] max-lg:text-[26px] max-md:text-[20px] max-sm:text-[12px] font-bold text-[#D79442]'>Another Milestone !</h1>
                            <p className='font-medium text-[#fff] max-lg:leading-5 max-sm:leading-3 w-[550px] max-xl:w-[450px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[150px] text-[30px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[8px]'>Record of highest package received through our consultancy.</p>
                            <p className='font-medium text-[#fff] text-[30px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[10px]'>Aman Kapil</p>
                            <h1 className='text-[41px] max-xl:text-[32px] max-lg:text-[26px] max-md:text-[20px] max-sm:text-[12px] font-bold text-[#D79442]'>Rs. 25 LPA PACKAGE</h1>
                            <button className='bg-[#fff] font-bold text-[30px] max-xl:text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[10px] rounded-2xl max-sm:rounded-lg px-[20px] max-sm:px-[5px] py-[5px] max-sm:py-[2px] w-[150px] max-sm:w-[50px]'>Deloitte.</button>
                            <div className='w-full flex justify-end pr-[50px] max-lg:pr-[20px]'><Image className='max-lg:w-[80px] max-sm:w-[30px]' src={logo} alt="afadfsd" /></div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='flex flex-col items-center pb-[50px]'>
                <h1 className='text-[#175574] text-[34px] max-xl:text-[28px] max-lg:text-[22px] max-md:text-[18px] font-bold'>Our results in numbers</h1>
                <h1 className='text-[#062B43] text-[40px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[22px] font-bold'>What Our Students Gain?</h1>
                <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-20 max-xl:gap-10 max-lg:gap-8 pt-[20px]'>
                    <div className='w-[210px] h-[180px] max-xl:w-[180px] max-xl:h-[140px] max-lg:w-[150px] max-lg:h-[120px] max-md:w-[120px] max-md:h-[100px] bg-[#062B43] rounded-[40px] max-lg:rounded-[25px] flex flex-col items-center justify-center'>
                        <h1 className='text-[50px] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px] text-[#fff] font-bold flex gap-2'>25<span className='text-[#D79442]'>LPA</span></h1>
                        <p className='text-[#fff] text-[20px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-medium text-center'>Highest Placement Package</p>
                    </div>
                    <div className='w-[210px] max-xl:w-[180px] max-lg:w-[150px] max-md:w-[120px] flex flex-col gap-5 items-center justify-center'>
                        <h1 className='text-[50px] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px] text-[#175574] font-bold flex gap-2'>95<span className='text-[#D79442]'>%</span></h1>
                        <p className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-medium text-center'>Secure jobs</p>
                    </div>
                    <div className='w-[210px] max-xl:w-[180px] max-lg:w-[150px] max-md:w-[120px] gap-5 flex flex-col items-center justify-center'>
                        <h1 className='text-[50px] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px] gap-3 text-[#175574] font-bold flex gap-2'>6.5<span className='text-[#D79442]'>LPA</span></h1>
                        <p className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-medium text-center'>Average Placement Package</p>
                    </div>
                    <div className='w-[210px] max-xl:w-[180px] max-lg:w-[150px] max-md:w-[120px] flex flex-col items-center justify-center'>
                        <h1 className='text-[50px] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px] text-[#175574] font-bold flex gap-2'>90<span className='text-[#D79442]'>%</span></h1>
                        <p className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-medium text-center leading-6'>Relavent industry experience through Internship</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero


