'use client'
import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import img1 from './assets/magic.png';
import img2 from './assets/crypto.png';
import img3 from './assets/quanta.png';
import img4 from './assets/dgsym.png';
import img5 from './assets/techtale.png';
import img6 from './assets/dgfront.png';
import img7 from './assets/odyssey.png';
import img8 from './assets/techtale2.png';

const Insight = () => {
    const images = [
        { url: img1, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img2, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img3, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img4, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img5, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img6, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img7, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
        { url: img8, title: "7 Advantages of Using a Recruitment Agency", desc: "What Are the Benefits of Recruitment?" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? images.length - 3 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        const newSlide = currentSlide === images.length - 3 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-[90%]">
                <h2 className="text-[#175574] text-[30px] max-md:text-[20px]">
                    <span className="text-[#D79442] font-bold">|</span> Must Read
                </h2>
                <h3 className="text-[#062B43] text-[41px] max-md:text-[30px] max-sm:text-[26px] max-sm:mb-4 font-bold">
                    Insights and Innovations
                </h3>
                <div className="relative py-5">
                    <div className="flex space-x-4 overflow-hidden relative">
                        {images.slice(currentSlide, currentSlide + 3).map((image, index) => (
                            <div key={index} className="w-full h-[400px] relative transition-all duration-500 ease-in-out">
                                <Image
                                    src={image.url}
                                    alt={`Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-[40px]"
                                />
                                <div className='absolute left-0 bottom-0 p-5'>
                                    <h2 className='text-[20px] font-bold text-[#fff]'>{image.title}</h2>
                                    <h4 className='text-[16px] font-medium text-[#fff]'>{image.desc}</h4>
                                    <div className='flex gap-5 items-center pl-4'>
                                        <FaArrowRightLong className='text-[#D79442] text-[40px]' />
                                        <p className='text-[22px] font-bold text-[#fff]'>Read More</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute left-[-2%] top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded-3xl shadow-xl"
                        onClick={prevSlide}
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        className="absolute right-[-2%] top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded-3xl shadow-xl"
                        onClick={nextSlide}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Insight;
