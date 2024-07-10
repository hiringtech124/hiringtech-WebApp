'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What are web development services?",
        answer: "Web development services include creating, maintaining, and optimizing websites to meet business needs and provide a great user experience."
    },
    {
        question: "What do web development services include?",
        answer: "They typically encompass front-end and back-end development, database development, website design, SEO optimization, and ongoing maintenance and support."
    },
    {
        question: "What is the cost of web development?",
        answer: "The cost varies based on the complexity of the project, technologies used, and specific client requirements. We provide customized quotes based on your needs."
    },
    {
        question: "Why should I hire a web development company?",
        answer: "Hiring a web development company ensures a professional, high-quality website that meets your business needs. Our expertise, experience, and dedication to quality ensure your website is built to the highest standards."
    }
];


const FaqW = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full flex justify-center py-10 max-sm:py-5'>
            <div className="w-[50%] max-xl:w-[65%] max-lg:w-[80%] max-md:w-[90%] mx-auto p-4 max-md:p-0">
                <h1 className="text-2xl text-[#175574] max-xl:text-[30px] max-md:text-[28px] max-sm:text-[24px] font-bold mb-4">FAQs</h1>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4 max-lg:mb-1">
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex justify-between items-center border border-[#D9D9D9] w-full p-4 max-lg:p-3 bg-[#fff] rounded-lg focus:outline-none"
                        >
                            <span className='font-medium text-start max-xl:text-[18px] max-lg:text-[14px]'>Q. {faq.question}</span>
                            {activeIndex === index ? (
                                <FiChevronUp className="w-6 h-6" />
                            ) : (
                                <FiChevronDown className="w-6 h-6" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                }`}
                        >
                            <div className="p-4 bg-white border rounded-lg mt-2 max-xl:text-[18px] max-lg:text-[14px]">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqW;
