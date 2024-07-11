import React from 'react';
import Image from 'next/image';
import img1 from './assets/c1.png';
import img2 from './assets/c2.png';
import img3 from './assets/c3.png';
import img4 from './assets/c4.png';
import img5 from './assets/c5.png';
import img6 from './assets/c6.png';
import img7 from './assets/c7.png';
import img8 from './assets/c8.png';
import img9 from './assets/c9.png';
import img10 from './assets/c10.png';
import img11 from './assets/c11.png';
import img12 from './assets/c12.png';

const features = [
    {
        img: img1,
        title: 'User Authentication',
    },
    {
        img: img2,
        title: 'Analytics and Reporting',
    },
    {
        img: img3,
        title: 'Push Notifications',
    },
    {
        img: img4,
        title: 'Cloud Integration',
    },
    {
        img: img5,
        title: 'In-App Purchases',
    },
    {
        img: img6,
        title: 'Offline Capabilities',
    },
    {
        img: img7,
        title: 'Social Media Integration',
    },
    {
        img: img8,
        title: 'Data Encryption',
    },
    {
        img: img9,
        title: 'Real-Time Chat',
    },
    {
        img: img10,
        title: 'AR/VR Integration',
    },
    {
        img: img11,
        title: 'Geolocation Services',
    },
    {
        img: img12,
        title: 'Customizable User Interface',
    }
];

const Building = () => {
    return (
        <div className='w-full flex justify-center py-20 max-sm:py-10'>
            <div className='w-[90%] flex flex-col items-center gap-10'>
                <div>
                    <h2 className='text-[#062B43] text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-md:text-[24px] font-bold text-center'>
                        Building All Mobile Features Modern Users Need
                    </h2>
                    <h4 className='text-[20px] max-xl:text-[16px] max-sm:text-[14px] text-[#175574] font-medium text-center'>
                        We incorporate all the essential features that modern users expect in a mobile app, ensuring your app is competitive and user-friendly
                    </h4>
                </div>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-20 max-xl:gap-10 max-sm:gap-5 max-sm:w-[100%] w-[80%]'>
                    {features.map((feature, index) => (
                        <div key={index} className='bg-[#fff] p-3 rounded-2xl flex items-center gap-4'>
                            <Image src={feature.img} alt={feature.title} className='my-auto max-sm:w-[50px]' />
                            <h2 className='text-[#175574] text-[20px] max-lg:text-[16px]'>
                                <span className='font-semibold'>{feature.title}</span>
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Building;
