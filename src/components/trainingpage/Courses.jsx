import React from 'react';
import Image from 'next/image';
import tick from './tickmark.png';
import './train.scss';

const Courses = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className='w-[90%] flex flex-col justify-evenly'>
                <h2 className='text-left text-[#062B43] text-2xl font-bold mb-8'>
                    Our Most Popular Courses
                </h2>
                <ul className='list-none pl-0'>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>
                            HTML, CSS, REACTJS, NEXTJS, TAILWIND CSS
                        </span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>
                            75-Day Intensive Training Program
                        </span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>Beginner level</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>
                            100% Placement Guaranteed
                        </span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>
                            Communication Skills Workshop
                        </span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <Image src={tick} width={30} height={30} alt='Tick Mark' />
                        <span className='ml-2 text-[#062B43] text-lg'>
                            Remote Opportunities: Learn from Home
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Courses;
