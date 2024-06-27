import React from 'react'
import Image from 'next/image'
import img from '../assetss/placeSlide.png'
import img1 from '../assetss/emily.png'
import Link from 'next/link'
import imgres from '../assetss/placeres.png'

import './style.css'
const PlacementSlide = () => {
    return (
        <>
            <div className='w-full font-serif h-full flex justify-center py-10'>
                <div className='w-[80%] max-md:w-[90%] flex flex-col gap-5 text-[#175574]'>
                    <div>
                        <h2 className='self-start text-[#062B43] text-xl max-xl:text-[18px] max-sm:text-[] font-bold leading-[51.2px]'>
                            <span className='text-[#D79442]'>|</span> PLACEMENTS
                        </h2>
                        <h2 className='text-[#062B43] font-bold text-[41px] max-xl:text-[35px] max-sm:text-[24px] max-lg:text-[30px]'>Meet Our Top Achiever</h2>
                        <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px]'>Discover the success story of our highest package earner and see how our courses can transform your career.</p>
                    </div>
                    <Link href='/placements' className='cursor-pointer max-md:hidden'>
                        <div className='bgImg relative'>
                            <Image src={img} className='w-full max-lg:h-[350px]' alt='placeSlide img' />
                            <div className='flex flex-col gap-4 max-xl:gap-2 items-center max-lg:items-start max-lg:pl-10 pr-[100px] max-lg:pr-0 w-full absolute top-[10%] max-xl:top-[5%]'>
                                <h2 className='text-[41px] max-xl:text-[35px] max-lg:text-[30px] font-bold text-[#062B43]'>Hiring Tech Setting Records!</h2>
                                <h3 className='text-[25px] max-xl:text-[22px] max-lg:text-[20px] text-[#175574]'>100+ Hiring Tech Students selected at package of ₹6- ₹20 Lakh</h3>
                                <div className='w-full flex justify-center'>
                                    <div className='bg-[F7F9EB] w-[90%] flex justify-center max-lg:justify-start gap-20 max-xl:gap-8 max-sm:gap-y-5'>
                                        <div className='flex flex-col items-center gap-1 max-lg:gap-1'>
                                            <Image src={img1} className='w-[150px]' alt="fadfd" />
                                            <h1 className='text-[#062B43] text-[20px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[18px] font-bold'>Emily Parker</h1>
                                            <p className='text-[#062B43] text-[18px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[16px]'>Rs. 15 Lacs</p>
                                        </div>
                                        <div className='flex flex-col items-center gap-1 max-lg:gap-1'>
                                            <Image src={img1} className='w-[150px]' alt="fadfd" />
                                            <h1 className='text-[#062B43] text-[20px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[18px] font-bold'>Emily Parker</h1>
                                            <p className='text-[#062B43] text-[18px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[16px]'>Rs. 15 Lacs</p>
                                        </div>
                                        <div className='max-lg:hidden flex flex-col items-center gap-1 max-lg:gap-1'>
                                            <Image src={img1} className='w-[150px]' alt="fadfd" />
                                            <h1 className='text-[#062B43] text-[20px] max-sm:text-[18px] max-md:text-[20px] max-lg:text-[18px] font-bold'>Emily Parker</h1>
                                            <p className='text-[#062B43] text-[18px] max-sm:text-[16px] max-md:text-[18px] max-lg:text-[16px]'>Rs. 15 Lacs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                    <Link href='/placements' className='md:hidden cursor-pointer'>
                        <div className='w-full relative'>
                            <Image src={imgres} className='w-full h-[800px] max-sm:h-[620px] max-[550px]:h-[520px] max-[460px]:h-[420px]' alt='res image' />
                            <div className=''>
                                <div className='flex justify-end pr-5 max-sm:pl-2 w-full absolute top-[5%]'>
                                    <h2 className='text-[30px] max-sm:text-[22px] font-bold text-[#062B43]'>Hiring Tech Setting Records!</h2>
                                </div>
                                <div className='absolute top-[50%] flex flex-col gap-5 max-sm:gap-3'>
                                    <h3 className='text-[28px] max-sm:text-[14px] max-sm:leading-5 text-[#175574] px-2'>100+ Hiring Tech Students selected at package of ₹6- ₹20 Lakh</h3>
                                    <div className='w-full flex justify-center'>
                                        <div className='bg-[F7F9EB] w-[90%] flex justify-center gap-10 max-sm:gap-2'>
                                            <div className='flex flex-col items-center gap-1 max-lg:gap-1'>
                                                <Image src={img1} className='w-[200px] max-[460px]:h-[84px]' alt="fadfd" />
                                                <h1 className='text-[#062B43] text-[20px] max-sm:text-[12px] font-bold'>Emily Parker</h1>
                                                <p className='text-[#062B43] text-[18px] max-sm:text-[10px] leading-3'>Rs. 15 Lacs</p>
                                            </div>
                                            <div className='flex flex-col items-center gap-1 max-lg:gap-1'>
                                                <Image src={img1} className='w-[200px] max-[460px]:h-[84px]' alt="fadfd" />
                                                <h1 className='text-[#062B43] text-[20px] max-sm:text-[12px] font-bold'>Emily Parker</h1>
                                                <p className='text-[#062B43] text-[18px] max-sm:text-[10px] leading-3'>Rs. 15 Lacs</p>
                                            </div>
                                            <div className='flex flex-col items-center gap-1 max-lg:gap-1'>
                                                <Image src={img1} className='w-[200px] max-[460px]:h-[84px]' alt="fadfd" />
                                                <h1 className='text-[#062B43] text-[20px] max-sm:text-[12px] font-bold'>Emily Parker</h1>
                                                <p className='text-[#062B43] text-[18px] max-sm:text-[10px] leading-3'>Rs. 15 Lacs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PlacementSlide