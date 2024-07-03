import React from 'react';
import Image from 'next/image';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './qwe.png';
import img5 from './asd.png';
import img6 from './clk.png';
import Link from 'next/link';

const AllCourses = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className='w-[90%] flex flex-wrap justify-evenly gap-10'>
                <Link href='/training/react-js'>
                    <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px] h-[451px]'>
                        <Image src={img1} alt='React JS' />
                        <div className='flex justify-between p-2'>
                            <Image src={img4} className='my-auto' alt='Tag' />
                            <Image src={img5} className='my-auto' alt='Star' />
                        </div>
                        <div className='px-2'>
                            <h2 className='font-bold text-[30px] text-[#062B43]'>React JS</h2>
                            <p className='text-[16px] text-[#175574]'>
                                Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='text-[20px] flex items-center text-[#175574]'>
                                <Image src={img6} alt='Clock' />15h 25m
                            </p>
                            <p className='text-[20px] text-[#D79442]'>View more</p>
                        </div>
                    </div>
                </Link>
                <Link href='/training/react-native'>
                    <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px] h-[451px]'>
                        <Image src={img2} alt='React Native' />
                        <div className='flex justify-between p-2'>
                            <Image src={img4} className='my-auto' alt='Tag' />
                            <Image src={img5} className='my-auto' alt='Star' />
                        </div>
                        <div className='px-2'>
                            <h2 className='font-bold text-[30px] text-[#062B43]'>React Native</h2>
                            <p className='text-[16px] text-[#175574]'>
                                Build mobile applications with React Native. Get hands-on experience with our project-based learning approach.
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='text-[20px] flex items-center text-[#175574]'>
                                <Image src={img6} alt='Clock' />20h 45m
                            </p>
                            <p className='text-[20px] text-[#D79442]'>View more</p>
                        </div>
                    </div>
                </Link>
                <Link href='/training/full-stack-web-development'>
                    <div className='cursor-pointer w-[369px] flex flex-col justify-evenly border border-[#D79442] rounded-[30px] h-[451px]'>
                        <Image src={img3} alt='Full Stack Web Development' />
                        <div className='flex justify-between p-2'>
                            <Image src={img4} className='my-auto' alt='Tag' />
                            <Image src={img5} className='my-auto' alt='Star' />
                        </div>
                        <div className='px-2'>
                            <h2 className='font-bold text-[30px] text-[#062B43]'>Full Stack Web Development</h2>
                            <p className='text-[16px] text-[#175574]'>
                                Become a full-stack developer. Learn both front-end and back-end technologies with our intensive program.
                            </p>
                        </div>
                        <div className='flex justify-between p-2'>
                            <p className='text-[20px] flex items-center text-[#175574]'>
                                <Image src={img6} alt='Clock' />25h 30m
                            </p>
                            <p className='text-[20px] text-[#D79442]'>View more</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AllCourses;
