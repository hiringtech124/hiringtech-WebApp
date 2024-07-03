import React from 'react'
import Image from 'next/image'
import img from './assets/i1.png'
const Institute = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col-reverse max-sm:gap-10 max-sm:items-center justify-between'>
                    <div className='w-[60%] max-sm:w-full flex flex-col gap-5'>
                        <h2 className='text-[41px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold'>A Trustworthy IT Training Institute</h2>
                        <p className='font-medium text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-sm:text-[14px] text-justify text-[#175574]'>Our institute stands out for its commitment to ethical practices and transparent policies. We provide an up-to-date curriculum that aligns with industry needs, focusing on skill development and career growth. With a proven track record of successful placements, we ensure our students are well-prepared for their IT careers.</p>
                    </div>
                    <Image src={img} alt="dklsdsd" className="my-auto w-[30%] max-sm:w-[70%]" />
                </div>
            </div>
        </>
    )
}

export default Institute