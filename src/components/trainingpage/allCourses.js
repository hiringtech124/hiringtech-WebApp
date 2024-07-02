import React from 'react'
import Image from 'next/image'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './qwe.png'
import img5 from './asd.png'
import img6 from './clk.png'
import Link from 'next/link'
const AllCourses = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20'>
                <div className='w-[90%] flex justify-evenly'>
                    <Link href='/training/react-js'>
                        <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px]  h-[451px]'>
                            <Image src={img1} alt='dfmnsd' />
                            <div className='flex justify-between p-2'>
                                <Image src={img4} className='my-auto' alt='sdfns' />
                                <Image src={img5} className='my-auto' alt='adfd' />
                            </div>
                            <div className='px-2'>
                                <h2 className='font-bold text-[30px] text-[#062B43]'>React JS</h2>
                                <p className='text-[16px] text-[#175574]'>Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.</p>
                            </div>
                            <div className='flex justify-between p-2'>
                                <p className='text-[20px] flex items-center text-[#175574]'><Image src={img6} alt='dnfd' />15h 25m</p>
                                <p className='text-[20px] text-[#D79442]'>View more</p>
                            </div>
                        </div>
                    </Link>
                    <Link href='/training/react-native'>
                        <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px]  h-[451px]'>
                            <Image src={img2} alt='dfmnsd' />
                            <div className='flex justify-between p-2'>
                                <Image src={img4} className='my-auto' alt='sdfns' />
                                <Image src={img5} className='my-auto' alt='adfd' />
                            </div>
                            <div className='px-2'>
                                <h2 className='font-bold text-[30px] text-[#062B43]'>Application Developer</h2>
                                <p className='text-[16px] text-[#175574]'>Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.</p>
                            </div>
                            <div className='flex justify-between p-2'>
                                <p className='text-[20px] flex items-center text-[#175574]'><Image src={img6} alt='dnfd' />15h 25m</p>
                                <p className='text-[20px] text-[#D79442]'>View more</p>
                            </div>
                        </div>
                    </Link>
                    <Link href='/backend-developer'>
                        <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px]  h-[451px]'>
                            <Image src={img3} alt='dfmnsd' />
                            <div className='flex justify-between p-2'>
                                <Image src={img4} className='my-auto' alt='sdfns' />
                                <Image src={img5} className='my-auto' alt='adfd' />
                            </div>
                            <div className='px-2'>
                                <h2 className='font-bold text-[30px] text-[#062B43]'>Backend Developer</h2>
                                <p className='text-[16px] text-[#175574]'>Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.</p>
                            </div>
                            <div className='flex justify-between p-2'>
                                <p className='text-[20px] flex items-center text-[#175574]'><Image src={img6} alt='dnfd' />15h 25m</p>
                                <p className='text-[20px] text-[#D79442]'>View more</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AllCourses