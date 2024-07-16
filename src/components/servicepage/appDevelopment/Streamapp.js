import React from 'react';
import Image from 'next/image';
import img1 from './assets/s1.svg'
import img2 from './assets/s2.svg'
import img3 from './assets/s3.svg'
import img4 from './assets/s4.svg'
import img5 from './assets/s5.svg'
const Streamapp = () => {
    const content = [
        {
            title: 'Expert Team',
            description: 'Our team of skilled developers and designers are experts in the latest technologies and trends.',
            img: img1
        },
        {
            title: 'Tailored Solutions',
            description: 'We deliver custom solutions that cater to your unique business needs.',
            img: img2
        },
        {
            title: 'Quality Assurance',
            description: 'Our rigorous QA processes ensure your app is reliable and high-performing.',
            img: img3
        },
        {
            title: 'Client-Centric Approach',
            description: 'We prioritize our clients needs, providing exceptional service and support throughout the project.',
            img: img4
        },
        {
            title: 'Proven Track Record',
            description: 'With numerous successful projects, we have a proven track record of delivering high-quality mobile apps.',
            img: img5
        }
    ];


    return (
        <div className='w-full flex justify-center pb-20 max-sm:pb-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Why Choose Us for Custom Mobile Application Development Services?</h2>
                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-10 max-md:gap-x-5 max-sm:gap-5 pt-10 mx-20 max-xl:mx-0'>
                    {content.map((item, index) => (
                        <div key={index} className={` max-md:px-4 flex flex-col gap-5 rounded-2xl `}>
                            <Image src={item.img} alt="img" className='max-sm:w-[40px]' />
                            <h3 className='font-normal text-[#175574] text-[16px] max-sm:text-[14px]'>
                                <span className='font-semibold text-[20px] max-sm:text-[16px]'>{item.title}</span><br />
                                {item.description}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Streamapp;