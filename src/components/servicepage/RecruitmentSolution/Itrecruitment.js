'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from './assets/needs.png';
import img2 from './assets/talent.png';
import img3 from './assets/screening.png';
import img4 from './assets/client.png';
import img5 from './assets/placement.png';
import img6 from './assets/ongoing.png';

const Recruitment = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [coloredLineHeight, setColoredLineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            // Calculate the height for the colored line
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollRatio = position / docHeight;
            const newHeight = Math.min(scrollRatio * 100, 100); // Percentage of the height
            setColoredLineHeight(newHeight);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const stages = [
        { title: 'Needs Assessment', description: 'We work with you to understand your specific requirements and business goals, focusing on IT Consulting and Recruitment Services.', image: img1 },
        { title: 'Talent Sourcing', description: 'We use our extensive network to find top candidates that match your needs in IT Recruitment Services.', image: img2 },
        { title: 'Screening and Interviewing', description: 'We conduct thorough screenings and interviews to ensure candidate quality in IT Staffing Solutions.', image: img3 },
        { title: 'Client Interviews', description: 'We arrange for you to meet the best candidates and make the final decision for IT Job Placement.', image: img4 },
        { title: 'Placement and Onboarding', description: 'We assist with the placement and onboarding process to ensure a smooth transition in Tech Talent Acquisition.', image: img5 },
        { title: 'Ongoing Support', description: 'We provide continuous support to ensure the success of our placements in IT Recruitment Services.', image: img6 },
    ];

    const isActive = (index) => {
        if (typeof window === 'undefined') {
            return false;
        }
        const stageOffset = index * window.innerHeight / stages.length;
        return scrollPosition > stageOffset;
    };

    return (
        <div className="relative w-full max-w-5xl max-xl:max-w-4xl max-lg:max-w-3xl mx-auto py-10">
            <h1 className="text-center text-3xl max-md:text-[26px] font-bold mb-10 text-[#062B43]">IT Recruitment Simplified: Our Comprehensive Hiring Process</h1>
            <div className="relative flex flex-col items-center">
                <div className="absolute max-md:hidden h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 z-0">
                    <div
                        className="absolute top-0 left-0 w-full bg-yellow-500 z-0"
                        style={{ height: `${coloredLineHeight}%` }}
                    ></div>
                </div>
                {stages.map((stage, index) => (
                    <div key={index} className="flex flex-col md:flex-row max-md:gap-5 items-center w-full py-10 max-md:py-4 mb-10 max-md:mb-2 relative z-10">
                        {index % 2 === 0 ? (
                            <>
                                <div className="flex-1 text-[#175574] text-left max-md:text-center pl-5 max-md:pl-0 max-md:mx-2 order-2 md:order-1">
                                    <h2 className="text-[36px] max-md:text-[24px] font-semibold ">{stage.title}</h2>
                                    <p className='max-md:text-[14px]'>{stage.description}</p>
                                </div>
                                <div className="max-md:hidden flex-none w-16 h-16 flex items-center justify-center relative order-1 md:order-2">
                                    <div className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-500 ${isActive(index) ? 'bg-[#D79442]' : 'bg-gray-300'}`}>
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 pl-5 max-md:pl-0 order-3 max-md:flex max-md:justify-center md:order-3">
                                    <Image src={stage.image} alt={stage.title} className="rounded-lg max-md:w-[90%]" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-1 pl-5 max-md:pl-0  order-1 max-md:flex max-md:justify-center max-md:order-2">
                                    <Image src={stage.image} alt={stage.title} className="rounded-lg max-md:w-[90%]" />
                                </div>
                                <div className="max-md:hidden flex-none w-16 h-16 flex items-center justify-center relative order-2">
                                    <div className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-500 ${isActive(index) ? 'bg-[#D79442]' : 'bg-gray-300'}`}>
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 text-[#175574] max-md:text-center text-left pl-5 max-md:pl-0 max-md:mx-2 order-3 max-md:order-1">
                                    <h2 className="text-[36px] max-md:text-[24px] font-semibold">{stage.title}</h2>
                                    <p className='max-md:text-[14px]'>{stage.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-[#D79442] text-white px-5 py-2 rounded-full">Join our Network</button>
            </div>
        </div>
    );
};

export default Recruitment;
