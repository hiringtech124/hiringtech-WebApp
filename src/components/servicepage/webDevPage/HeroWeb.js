import React from 'react'
import Image from 'next/image'
import img from './assets/webhero.svg'
import img2 from './assets/herores.svg'
import Link from 'next/link'
const HeroWeb = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%] flex justify-between'>
                    <div className='flex flex-col gap-5 max-sm:gap-3'>
                        <h1 className='text-[48px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[20px] text-[#062B43] w-[120%] max-xl:w-[130%] max-lg:w-[130%] max-md:w-full font-bold leading-[50px] max-lg:leading-[35px] max-sm:leading-[25px]'>Transform Your Online Presence with Our Web Development Services</h1>
                        <Image src={img2} alt='img' className='md:hidden w-full' />
                        <h3 className='text-[20px] max-lg:text-[16px] max-sm:text-[14px] max-sm:px-0 text-[#175574] font-medium px-2'>Experience the power of professional Website Design & Development Services with our expert team. We deliver high-quality, Custom Web Development, Professional Website Design, and E-commerce Development designed to meet your unique business needs, ensuring a strong online presence.</h3>
                        <Link href='/contact'><p className="text-[20px] max-sm:text-[14px] w-[250px] max-sm:w-[170px] text-center py-2 max-sm:py-1 text-[#fff] bg-[#D79442] rounded-3xl">Book a Consultation</p></Link>
                    </div>
                    <Image src={img} alt='image' className='max-lg:w-[350px] max-md:hidden' />
                </div>
            </div>
        </>
    )
}

export default HeroWeb