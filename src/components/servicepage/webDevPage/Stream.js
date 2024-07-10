import React from 'react';
import Image from 'next/image';
import img1 from './assets/s1.svg'
import img2 from './assets/s2.svg'
import img3 from './assets/s3.svg'
import img4 from './assets/s4.svg'
import img5 from './assets/s5.svg'
import img6 from './assets/s6.svg'
const Stream = () => {
    const content = [
        {
            title: 'Initial Consultation',
            description: 'Understanding your business objectives and needs. Our team gathers detailed requirements to create a tailored project plan.',
            img: img1
        },
        {
            title: 'Strategic Planning',
            description: 'We develop a comprehensive plan outlining timelines and deliverables. This ensures the project stays on track and meets all milestones.',
            img: img2
        },
        {
            title: 'Innovative Design',
            description: 'We create visually appealing and user-friendly designs. Our focus is on enhancing user experience through intuitive navigation and attractive layouts.',
            img: img3
        },
        {
            title: 'Robust Development',
            description: 'We build your website using the latest technologies. Our development process ensures your website is scalable, secure, and high- performing.',
            img: img4
        },
        {
            title: 'Thorough Testing',
            description: 'We perform extensive testing to ensure your website is bug-free. This includes cross- device and cross - browser testing for optimal performance.',
            img: img5
        },
        {
            title: 'Launch & Maintenance',
            description: 'We deploy your website and provide ongoing support. Post- launch, we monitor and maintain your site to ensure it remains up - to - date and secure.',
            img: img6
        },
    ];

    return (
        <div className='w-full flex justify-center pb-20 max-sm:pb-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Explore Our Comprehensive Web Development Services</h2>
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

export default Stream;
