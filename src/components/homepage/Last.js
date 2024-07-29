import React from 'react'
import Image from 'next/image'
import img from './assets/last.svg'
import Link from 'next/link'
const Last = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex justify-center relative'>
                    <Image src={img} alt='img' className='' />
                    <div className='absolute top-[2%] max-sm:top-[5px] flex flex-col
                     items-center gap-10 max-lg:gap-2'>
                        <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[24px]
                         max-sm:text-[12px] max-sm:leading-4 text-[#062B43] font-bold'>
                            Ready To Elevate Your <br /> Brand With Creative <br /> Design Solutions?</h2>
                        <Link href="/contact"><button className='text-[#fff] text-2xl max-md:text-[16px] max-sm:text-[10px]
                         bg-[#D79442] px-8 py-4 max-md:px-4 max-md:py-1 max-sm:py-0 max-sm:leading-6 
                         rounded-[40px]'>Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Last