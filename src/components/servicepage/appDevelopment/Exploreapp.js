import React from 'react';
const Exploreapp = () => {
    const content = [
        {
            title: 'Progressive Web Application Development',
            description: 'Progressive Web Apps (PWAs) combine the best features of web and mobile applications. They offer fast loading times, offline functionality, and a native app-like experience on the web.'
        },
        {
            title: 'React Native Application Development',
            description: 'React Native is a popular framework for building mobile applications using JavaScript and React. It allows developers to create cross-platform apps that work on both iOS and Android.'
        },
        {
            title: 'Flutter Application Development',
            description: 'Flutter, developed by Google, is an open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.'
        },
        {
            title: 'iOS Application Development',
            description: 'Our iOS App Development services focus on creating high-quality, user-friendly applications for Apple\'s iOS platform. We leverage the latest technologies.'
        },
        {
            title: 'Android Application Development',
            description: 'We specialize in Android App Development, creating robust and scalable applications for the Android platform. Our developers are proficient in Java and Kotlin and use the latest tools and frameworks.'
        },
        {
            title: 'E-commerce App Development',
            description: 'Our E-commerce App Development services are designed to help businesses establish a strong mobile presence and drive online sales. We create feature-rich e-commerce apps with seamless payment integrations.'
        }
    ];

    return (
        <div className='w-full flex justify-center pb-20 max-sm:pb-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Related Web Development Services & Solutions</h2>
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

export default Exploreapp;
