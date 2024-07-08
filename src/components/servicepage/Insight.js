'use client'
import React, { useState, useEffect } from 'react';
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
import Link from 'next/link';

const Insight = () => {
    const images = [
        { url: img1, title: "Unveiling the Digital Symphony", desc: "Website Design and Digital Marketing as the Art of Brand Orchestration.", link: "/blog/Unveiling-the-Digital-Symphony" },
        { url: img2, title: "Future", desc: "Exploring the Frontiers of Quantum Computing", link: "/blog/Exploring-the-Frontiers-of-Quantum-Computing" },
        { url: img3, title: "Blockchain Beyond Crypto", desc: "Exploring the Uncharted Territories.", link: "/blog/Blockchain-Beyond-Crypto" },
        { url: img4, title: "Tech Chronicles: Exploring the Digital Frontier", desc: "Let's set sail on this adventure and discover the wonders that await us in the digital landscape.", link: "/blog/Tech-chronicles" },
        { url: img5, title: "Tech Odyssey", desc: "Let's embark on this adventure together and discover the wonders of the digital world.", link: "/blog/Tech-Odyssey" },
        { url: img6, title: "Digital Frontiers", desc: "Join us as we explore the latest trends, emerging technologies, and groundbreaking ideas that are shaping the future of our digital world", link: "/blog/Digital-Frontiers" },
        { url: img7, title: "Unlocking Success", desc: "Navigating today's job market, especially in IT and tech, can be challenging.", link: "/blog/unlocking-success" },
        { url: img8, title: "Unlocking Success", desc: "Navigating today's job market, especially in IT and tech, can be challenging.", link: "/blog/unlocking-success" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    const updateSlidesToShow = () => {
        if (window.innerWidth < 640) {
            setSlidesToShow(1);
        } else if (window.innerWidth < 768) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(3);
        }
    };

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? images.length - slidesToShow : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        const newSlide = currentSlide === images.length - slidesToShow ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="w-full flex justify-center py-20 max-sm:py-5">
            <div className="w-[90%]">
                <h2 className="text-[#175574] text-[30px] max-md:text-[18px]">
                    <span className="text-[#D79442] font-bold">|</span> Must Read
                </h2>
                <h3 className="text-[#062B43] text-[41px] max-md:text-[30px] max-sm:text-[24px] max-sm:mb-4 font-bold">
                    Insights and Innovations
                </h3>
                <div className="relative py-5">
                    <div className="flex space-x-4 overflow-hidden relative">
                        {images.slice(currentSlide, currentSlide + slidesToShow).map((image, index) => (
                            <div key={index} className="w-full h-[400px] max-xl:h-[300px] relative transition-all duration-500 ease-in-out">
                                <Link href={image.link}>
                                    <Image
                                        src={image.url}
                                        alt={`Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-[40px] max-sm:rounded-[30px]"
                                    />
                                    <div className='absolute left-0 bottom-0 p-5'>
                                        <h2 className='text-[20px] max-xl:text-[16px] max-lg:text-[14px] font-bold text-[#fff]'>{image.title}</h2>
                                        <h4 className='text-[16px] max-xl:text-[14px] max-lg:text-[12px] font-medium text-[#fff]'>{image.desc}</h4>
                                        <div className='flex gap-5 items-center pl-4'>
                                            <FaArrowRightLong className='text-[#D79442] text-[40px] max-xl:text-[20px]' />
                                            <p className='text-[22px] max-xl:text-[18px] max-lg:text-[16px] font-bold text-[#fff]'>Read More</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute left-[-2%] max-sm:left-[-5%] top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-3xl max-sm:rounded-lg shadow-xl"
                        onClick={prevSlide}
                    >
                        <FaArrowLeftLong className='' />
                    </button>
                    <button
                        className="absolute right-[-2%] max-sm:right-[-5%] top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-3xl max-sm:rounded-lg shadow-xl"
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
