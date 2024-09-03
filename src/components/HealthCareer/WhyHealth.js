import React from 'react';
import Image from 'next/image';
import img1 from './assets/s1.png'
import img2 from './assets/s2.png'
import img3 from './assets/s3.png'
import img4 from './assets/s4.png'
import img5 from './assets/s5.png'
const WhyHealth = () => {
    const content = [
        {
            title: 'Competitive Salaries and Benefits',
            description: 'We offer attractive compensation packages that reflect your skills and experience.',
            img: img1
        },
        {
            title: 'Professional Growth and Development',
            description: 'Access opportunities for continuing education, certifications, and career advancement.',
            img: img2
        },
        {
            title: 'Collaborative and Supportive Environment',
            description: 'Work in a setting that encourages teamwork and mutual respect.',
            img: img3
        },
        {
            title: 'State-of-the-Art Facilities and Equipment',
            description: 'Utilize the latest tools and technologies to deliver exceptional care.',
            img: img4
        },
        {
            title: 'Recognition and Rewards',
            description: 'We value and celebrate outstanding performance, ensuring that your contributions are recognized.',
            img: img5
        }
    ];


    return (
        <div className='w-full flex justify-center pb-20 max-sm:pb-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Why Choose Hiring Tech for Your Healthcare Career?</h2>
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

export default WhyHealth;
