import React from 'react'
import Image from 'next/image'
import img1 from './assets/w1.png'
import img2 from './assets/w2.png'
import img3 from './assets/w3.png'
import img4 from './assets/w4.png'
import img5 from './assets/w5.png'
import img6 from './assets/w6.png'

const data = [
    {
        img: img1,
        title: 'Experienced Instructors',
        description: 'Learn from industry veterans with extensive knowledge and real-world experience.',
    },
    {
        img: img2,
        title: 'Flexible Learning Options',
        description: 'Online mode to suit your convenience, allowing you to learn from anywhere.',
    },
    {
        img: img3,
        title: 'Practical Approach',
        description: 'Emphasis on hands-on learning and real-world applications to ensure practical skill development.',
    },
    {
        img: img4,
        title: 'Career Support',
        description: 'Dedicated placement assistance, tailored interview preparation, and resume-building workshops.',
    },
    {
        img: img5,
        title: 'Comprehensive Curriculum',
        description: 'Our courses cover essential aspects and the latest industry trends, ensuring you stay ahead.',
    },
    {
        img: img6,
        title: 'Networking Opportunities',
        description: 'Connect with industry professionals and peers to expand your professional network.',
    },
];

const Choose2 = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[90%] flex flex-col gap-2'>
                <h2 className='text-[#175574] text-[22px] max-xl:text-[20px] font-medium'>Why Choose us</h2>
                <h2 className='text-[#062B43] text-[30px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px] max-sm:leading-6 leading-10 font-semibold'>
                    Choosing our IT training institute means you'll benefit from a comprehensive learning experience designed to set you on the path to success. Here are the top reasons:
                </h2>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-md:gap-5 py-5'>
                    {data.map((item, index) => (
                        <div key={index} className='bg-[#fff] rounded-xl p-4 max-md:p-2 flex'>
                            <Image src={item.img} alt={item.title} className='my-auto max-sm:w-[60px]' />
                            <h3 className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[14px]'>
                                <span className='text-[26px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] font-semibold'>{item.title}</span>
                                <br />
                                {item.description}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose2;
