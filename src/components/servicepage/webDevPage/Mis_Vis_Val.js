import React from 'react'
import Image from 'next/image'
import img1 from './assets/mis.svg'
import img2 from './assets/vis.svg'
import img3 from './assets/val.svg'
const Mis_Vis_Val = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[80%] max-sm:w-[90%] flex flex-col gap-10'>
                    <div className='flex items-center justify-center max-sm:flex-col max-sm:gap-5 gap-[200px] max-xl:gap-[100px]'>
                        <div className=''>
                            <h2 className='font-bold text-[#175574] text-[41px] max-xl:text-[36px] max-md:text-[30px] max-sm:text-[24px]'>Mission</h2>
                            <h3 className='text-[#175574] text-[20px] max-xl:text-[16px] max-md:text-[14px] font-medium'>Deliver exceptional web development services that empower businesses online.</h3>
                        </div>
                        <Image src={img1} alt='mission' className='m-auto max-xl:w-[350px] max-lg:w-[250px] max-sm:w-full' />
                    </div>
                    <div className='flex flex-row-reverse items-center max-sm:flex-col max-sm:gap-5 gap-[200px] max-xl:gap-[100px]'>
                        <div className=''>
                            <h2 className='font-bold text-[#175574] text-[41px] max-xl:text-[36px] max-md:text-[30px max-sm:text-[24px]'>Vision</h2>
                            <h3 className='text-[#175574] text-[20px] max-xl:text-[16px] max-md:text-[14px] font-medium'>Become a global leader in innovative web development, recognized for excellence and customer satisfaction.</h3>
                        </div>
                        <Image src={img2} alt='mission' className='m-auto max-xl:w-[350px] max-lg:w-[250px] max-sm:w-full' />
                    </div>
                    <div className='flex items-center justify-center max-sm:flex-col max-sm:gap-5 gap-[200px] max-xl:gap-[100px]'>
                        <div className=''>
                            <h2 className='font-bold text-[#175574] text-[41px] max-xl:text-[36px] max-md:text-[30px max-sm:text-[24px]'>Values</h2>
                            <h3 className='text-[#175574] text-[20px] max-xl:text-[16px] max-md:text-[14px] font-medium'>Commitment to quality, integrity, continuous innovation, and a customer-centric approach.</h3>
                        </div>
                        <Image src={img3} alt='mission' className='m-auto max-xl:w-[350px] max-lg:w-[250px] max-sm:w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mis_Vis_Val