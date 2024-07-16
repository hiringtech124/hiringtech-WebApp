import React from 'react';
import Link from 'next/link';
const Whyapp = () => {
    const content = [
        {
            title: 'Versatile Platform Expertise',
            description: 'We offer iOS, Android, and Cross-Platform App Development, ensuring broad reach and compatibility across all devices.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: 'Customised Solutions',
            description: 'Our Custom Mobile App Development services are tailored to meet your unique business requirements, providing personalized solutions that drive success.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        },
        {
            title: 'Innovative Designs',
            description: 'We focus on delivering intuitive and engaging app designs that enhance user experience and satisfaction.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: 'Robust Development Process',
            description: 'Our development process includes rigorous testing and quality assurance, ensuring a high-quality, bug-free app.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        },
        {
            title: 'End-to-End Services',
            description: 'From concept to deployment, we provide comprehensive support, including post-launch maintenance and updates.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        }
    ];


    return (
        <div className='w-full flex justify-center py-20 max-sm:py-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Why Choose Our Mobile App Development Services?</h2>
                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-10 max-md:gap-x-5 max-sm:gap-5 pt-10 mx-20 max-xl:mx-0'>
                    {content.map((item, index) => (
                        <div key={index} className={`p-8 max-md:p-4 ${item.bgColor} rounded-2xl shadow-xl    max-sm:shadow-lg`}>
                            <h3 className='font-normal text-[#175574] text-[16px] max-sm:text-[14px] text-center'>
                                <span className='font-semibold text-[20px] max-sm:text-[16px]'>{item.title}</span><br />
                                {item.description}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pt-10 max-sm:pt-5'><Link href='/contact'><p className="text-[20px] max-sm:text-[14px] w-[250px] max-sm:w-[170px] text-center py-2 max-sm:py-1 text-[#fff] bg-[#D79442] rounded-3xl">Talk to our Export</p></Link></div>
            </div>
        </div>
    );
}

export default Whyapp;
