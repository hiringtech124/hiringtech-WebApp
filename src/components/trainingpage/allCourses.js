import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './qwe.png';
import img5 from './asd.png';
import img6 from './clk.png';

const courses = [
    {
        href: '/training/react-js',
        imgSrc: img1,
        title: 'React JS Developer',
        description: 'Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.',
    },
    {
        href: '/training/react-native',
        imgSrc: img2,
        title: 'React-Native Developer',
        description: 'Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.',
    },
    {
        href: '/training/hr-training',
        imgSrc: img3,
        title: 'HR Training Programe',
        description: 'Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.',
    },
    {
        href: '/training/digital-training',
        imgSrc: img1,
        title: 'Digital Marketing Training Course',
        description: 'Master front-end web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more efficiently.',
    },
];

const AllCourses = () => {
    return (
        <div className='w-full flex justify-center py-10 max-sm:py-5'>
            <div className='w-[90%] '>
                <h2 className='text-[#175574] text-[22px] max-xl:text-[20px] font-medium'>Our Courses</h2>
                <h2 className='text-[#062B43] text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[22px] font-semibold'>Master with Our Expert-Led IT Online Training - Free Demo Class Included!</h2>
                <div className='w-[100%] py-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 items-center gap-y-10'>
                    {courses.map((course, index) => (
                        <Link key={index} href={course.href} className='flex justify-center'>
                            <div className='cursor-pointer w-[369px] h-[461px] max-xl:w-[300px] max-xl:h-[450px] max-sm:h-[400px] flex flex-col justify-between pb-5 border border-[#D79442] rounded-[30px]  '>
                                <Image src={course.imgSrc} alt='Course Image' />
                                <div className='flex justify-between p-2'>
                                    <Image src={img4} className='my-auto' alt='Icon 1' />
                                    <Image src={img5} className='my-auto' alt='Icon 2' />
                                </div>
                                <div className='px-2'>
                                    <h2 className='font-bold text-[30px] max-xl:text-[26px] max-sm:text-[22px] text-[#062B43]'>{course.title}</h2>
                                    <p className='text-[16px] max-xl:text-[14px]  text-[#175574]'>{course.description}</p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='text-[20px] max-sm:text-[16px] flex items-center text-[#175574]'><Image src={img6} alt='Icon 3' />15h 25m</p>
                                    <p className='text-[20px] max-sm:text-[16px] text-[#D79442]'>View more</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
