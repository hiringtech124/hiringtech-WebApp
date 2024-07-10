import React from 'react';
import Link from 'next/link';
const WhyDev = () => {
    const content = [
        {
            title: 'Skilled Expert',
            description: 'Our team comprises seasoned developers proficient in cutting-edge Web Development Services. Our expertise spans various programming languages and frameworks.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: 'Tailored Solutions',
            description: 'We offer personalized web development services to fit your business requirements. From initial design to final deployment, we create bespoke websites aligned with your goals.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        },
        {
            title: 'Adaptive Design',
            description: 'Enjoy a seamless user experience across all devices with our Responsive Web Design. Our designs adapt to different screen sizes, ensuring optimal performance on desktops, tablets, and smartphones.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: 'SEO Integration',
            description: 'Enhance your online visibility with our SEO-optimized web development. We implement best SEO practices to boost your website\'s search engine rankings and drive more traffic.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        },
        {
            title: 'Continuous Support',
            description: 'Benefit from our ongoing support and maintenance services. Our dedicated support team is always ready to address any issues and perform necessary updates.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        }
    ];

    return (
        <div className='w-full flex justify-center py-20 max-sm:py-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Why Choose Us for Your Web Development Needs</h2>
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
                <div className='flex justify-center pt-10 max-sm:pt-5'><Link href='/contact'><p className="text-[20px] max-sm:text-[14px] w-[250px] max-sm:w-[170px] text-center py-2 max-sm:py-1 text-[#fff] bg-[#D79442] rounded-3xl">Talk to an Export</p></Link></div>
            </div>
        </div>
    );
}

export default WhyDev;
