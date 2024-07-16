'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What makes Hiring Tech different from other IT recruitment agencies",
        answer: "We offer customized IT Recruitment Services and have a proven track record of successful placements. Our deep industry knowledge and extensive network in IT Consulting Services and Technology Consulting set us apart."
    },
    {
        question: "How quickly can you fill an IT position?",
        answer: "Our streamlined hiring process allows us to fill positions quickly, typically within a few weeks, through our IT Recruitment Services and Tech Talent Acquisition."
    },
    {
        question: "Do you offer IT consulting services in addition to recruitment?",
        answer: "Yes, we provide comprehensive IT Consulting Services, including IT Strategy Consulting and Technology Consulting."
    },
    {
        question: "What industries do you specialize in for IT recruitment?",
        answer: "We specialize in a wide range of industries, including technology, finance, healthcare, and more, with our IT Consulting and Recruitment Services."
    },
    {
        question: "How do you ensure the quality of candidates?",
        answer: "We conduct rigorous screening and interview processes to ensure that we provide only the highest quality candidates in IT Professional Recruitment."
    },
    {
        question: "Can you provide temporary IT staffing solutions?",
        answer: "Yes, we offer flexible IT Staffing Solutions, including temporary, contract, and full-time placements through our IT Recruitment Services and IT Job Placement."
    },
];

const FAQs = () => {
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

export default FAQs;
