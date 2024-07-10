import React from 'react';
const Explore = () => {
    const content = [
        {
            title: 'Creative Website Design & Redesign',
            description: 'Craft visually appealing and modern websites or give your existing site a fresh, updated look.'
        },
        {
            title: 'E-commerce Solutions',
            description: 'Develop robust and user-friendly online stores to enhance your online sales and customer experience.'
        },
        {
            title: 'Bespoke Web Development',
            description: 'Tailor-made web solutions designed specifically to meet your unique business requirements.'
        },
        {
            title: 'Modern Website Overhaul',
            description: 'Comprehensive website redesign services to modernize your existing site for better performance and user experience.'
        },
        {
            title: 'ReactJS Development Services',
            description: 'Build dynamic and responsive web applications using the powerful ReactJS framework.'
        },
        {
            title: 'AngularJS Development Services',
            description: 'Develop scalable and efficient web applications with our expertise in AngularJS.'
        },
    ];

    return (
        <div className='w-full flex justify-center pb-20 max-sm:pb-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Explore Our Comprehensive Web Development Services</h2>
                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-10 max-md:gap-x-5 max-sm:gap-5 pt-10 mx-20 max-xl:mx-0'>
                    {content.map((item, index) => (
                        <div key={index} className={`p-8 max-md:p-4 rounded-2xl shadow-xl max-sm:shadow-lg`}>
                            <h3 className='font-normal text-[#175574] text-[16px] max-sm:text-[14px] text-center'>
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

export default Explore;
