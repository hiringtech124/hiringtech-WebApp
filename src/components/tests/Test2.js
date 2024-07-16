// components/StreamlinedITSolutions.js
'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StreamlinedITSolutions = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });

    const getLineClass = () => {
        if (inView3) return 'h-full';
        if (inView2) return 'h-2/3';
        if (inView1) return 'h-1/3';
        return 'h-0';
    };

    return (
        <div className='w-full flex justify-center py-40'>
            <div className="relative w-[90%]">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
                    <div
                        className={`absolute left-0 top-0 w-1 bg-blue-500 transition-all duration-300 ${getLineClass()}`}
                        style={{ height: `${scrollY}px` }} // Adjust the scroll effect
                    ></div>
                </div>
                <div className="ml-6 space-y-10">
                    <div
                        ref={ref1}
                        className={`p-4 border rounded shadow-lg bg-white transition-opacity duration-500 ${inView1 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h2 className="text-xl font-bold">Comprehensive IT Consultancy Services</h2>
                        <p>
                            Hiring Tech IT Services offers advanced IT consultancy services catering to both IT and Non-IT
                            industries across India. Our expertise covers a wide range of solutions tailored to meet specific
                            industry needs.
                        </p>
                    </div>
                    <div
                        ref={ref2}
                        className={`p-4 border rounded shadow-lg bg-white transition-opacity duration-500 ${inView2 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h2 className="text-xl font-bold">Best performances</h2>
                        <p>
                            At the core of our mission is the optimization of your time, physical vitality, and mental energy,
                            enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.
                        </p>
                    </div>
                    <div
                        ref={ref3}
                        className={`p-4 border rounded shadow-lg bg-white transition-opacity duration-500 ${inView3 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h2 className="text-xl font-bold">Save time</h2>
                        <p>
                            We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing
                            you to save both time and money. This way, you can dedicate more precious moments to your loved ones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamlinedITSolutions;
