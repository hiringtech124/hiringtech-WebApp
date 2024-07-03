import React from 'react';
import Image from 'next/image';
import tick from './tickmark.png';
import './train.scss';

const Choose = () => {
  return (
    <div className='w-full flex justify-center py-20 bg-gray-100'>
      <div className='w-[90%] flex flex-col items-center'>
        <h2 className='text-center text-[#062B43] text-2xl font-bold mb-8'>
          Why Choose Our Courses?
        </h2>
        <ul className='list-none pl-0'>
          <li className='flex items-center mb-4'>
            <Image src={tick} width={30} height={30} alt='Tick Mark' />
            <span className='ml-2 text-[#062B43] text-lg'>
              Expert instructors with industry experience
            </span>
          </li>
          <li className='flex items-center mb-4'>
            <Image src={tick} width={30} height={30} alt='Tick Mark' />
            <span className='ml-2 text-[#062B43] text-lg'>
              Comprehensive curriculum
            </span>
          </li>
          <li className='flex items-center mb-4'>
            <Image src={tick} width={30} height={30} alt='Tick Mark' />
            <span className='ml-2 text-[#062B43] text-lg'>
              Flexible learning options
            </span>
          </li>
          <li className='flex items-center mb-4'>
            <Image src={tick} width={30} height={30} alt='Tick Mark' />
            <span className='ml-2 text-[#062B43] text-lg'>
              Career support and placement assistance
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Choose;
