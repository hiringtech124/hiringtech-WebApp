import React from 'react'
import Image from 'next/image'
import img from './assets/h1.svg'
import img2 from './assets/h2.svg'
import Link from 'next/link'
const Ahero = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex justify-between'>
                    <div className='flex flex-col gap-5 max-sm:gap-3'>
                        <h1 className='text-[48px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[20px] text-[#062B43] w-[120%] max-xl:w-[130%] max-lg:w-[130%] max-md:w-full font-bold leading-[50px] max-lg:leading-[35px] max-sm:leading-[25px]'>Welcome to Hiring Tech&apos;s Healthcare Division</h1>
                        <Image src={img2} alt='img' className='md:hidden w-full rounded-2xl' />
                        <h3 className='text-[20px] max-lg:text-[16px] max-sm:text-[14px] max-sm:px-0 text-[#175574] font-medium px-2'>At Hiring Tech, we are dedicated to connecting healthcare professionals with opportunities that align with their expertise and aspirations. Our tailored recruitment services span both clinical and non-clinical roles, ensuring that healthcare facilities find the right talent to deliver top-notch care and support.</h3>
                        <Link href='/contact'><p className="text-[20px] max-sm:text-[14px] w-[250px] max-sm:w-[170px] text-center py-2 max-sm:py-1 text-[#fff] bg-[#D79442] rounded-3xl">Discover our Solutions</p></Link>
                    </div>
                    <Image src={img} alt='image' className='max-lg:w-[350px] max-md:hidden' />
                </div>
            </div>
        </>
    )
}

export default Ahero