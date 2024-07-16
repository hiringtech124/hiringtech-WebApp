import React from 'react'
import Image from 'next/image'
import img from './assets/a1.svg'
import img2 from './assets/a2.svg'
import Link from 'next/link'
const Ahero = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] flex justify-between'>
                    <div className='flex flex-col gap-5 max-sm:gap-3'>
                        <h1 className='text-[48px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[20px] text-[#062B43] w-[120%] max-xl:w-[130%] max-lg:w-[130%] max-md:w-full font-bold leading-[50px] max-lg:leading-[35px] max-sm:leading-[25px]'>Transform Your Business with Innovative Mobile Apps</h1>
                        <Image src={img2} alt='img' className='md:hidden w-full rounded-xl' />
                        <h3 className='text-[20px] max-lg:text-[16px] max-sm:text-[14px] max-sm:px-0 text-[#175574] font-medium px-2'>Our mobile app development services are crafted to meet the specific needs of modern businesses, delivering high-performance, scalable, and user-friendly solutions. We specialize in creating custom mobile apps for iOS, Android, and cross-platform environments, ensuring your business has a robust mobile presence. Our expertise encompasses the entire app development lifecycle, from initial design to deployment and ongoing maintenance.</h3>
                        <Link href='/contact'><p className="text-[20px] max-sm:text-[14px] w-[250px] max-sm:w-[170px] text-center py-2 max-sm:py-1 text-[#fff] bg-[#D79442] rounded-3xl">Discover our Solutions</p></Link>
                    </div>
                    <Image src={img} alt='image' className='max-lg:w-[350px] max-md:hidden' />
                </div>
            </div>
        </>
    )
}

export default Ahero