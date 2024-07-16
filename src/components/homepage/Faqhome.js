'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faq1 = [
    {
        question: "What kind of technologies do you specialize in?",
        answer: "We specialize in connecting you with top talent in areas like React.js, Next.js, React Native, and MySQL."
    },
    {
        question: "How is your talent pool different?",
        answer: "Our pre-vetted candidates go through a rigorous screening process to ensure they possess the specific skills and experience you need."
    },
    {
        question: "How can you help me reduce hiring time?",
        answer: "By utilizing pre-screening processes and training modules, we bring the best candidates to you, saving you valuable time and resources."
    }
];

const faq2 = [
    {
        question: "What kind of job opportunities do you offer?",
        answer: "We partner with leading tech companies to provide exclusive job openings across various industries and specializations."
    },
    {
        question: "How does your service benefit me?",
        answer: "We train you with demanding skills and connect you with top companies seeking to hire the best talent."
    },
    {
        question: "How do I get started?",
        answer: "Join the free demo class by filling out this form. Afterwards, you can begin your training to equip yourself with the skills before getting placed."
    }
];

const Faqhome = () => {
    const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleToggle1 = (index) => {
        setActiveIndex1(activeIndex1 === index ? null : index);
    };

    const handleToggle2 = (index) => {
        setActiveIndex2(activeIndex2 === index ? null : index);
    };

    return (
        <div className='w-full flex justify-center py-10 max-sm:py-5'>
            <div className="w-[50%] max-xl:w-[65%] max-lg:w-[80%] max-md:w-[90%] mx-auto p-4 max-md:p-0">
                <h1 className="text-3xl text-[#175574] text-center max-xl:text-[30px] max-md:text-[28px] max-sm:text-[24px] font-bold mb-4">FAQs</h1>

                <h3 className='text-[30px] max-sm:text-[20px] max-lg:text-[26px] flex items-center font-bold text-[#062B43] py-5'><span className='text-[#D79442] font-bold mr-3'>|</span>For Companies</h3>
                {faq1.map((faq, index) => (
                    <div key={index} className="mb-4 max-lg:mb-1">
                        <button
                            onClick={() => handleToggle1(index)}
                            className="flex justify-between items-center border border-[#D9D9D9] w-full p-4 max-lg:p-3 bg-[#fff] rounded-lg focus:outline-none"
                        >
                            <span className='font-medium text-start max-xl:text-[18px] max-lg:text-[14px]'>Q. {faq.question}</span>
                            {activeIndex1 === index ? (
                                <FiChevronUp className="w-6 h-6" />
                            ) : (
                                <FiChevronDown className="w-6 h-6" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex1 === index ? 'max-h-[1000px]' : 'max-h-0'
                                }`}
                        >
                            <div className="p-4 bg-white border rounded-lg mt-2 max-xl:text-[18px] max-lg:text-[14px]">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}

                <h3 className='text-[30px] max-sm:text-[20px] max-lg:text-[26px] flex items-center font-bold text-[#062B43] py-5'><span className='text-[#D79442] font-bold mr-3'>|</span>For Tech Talent</h3>
                {faq2.map((faq, index) => (
                    <div key={index} className="mb-4 max-lg:mb-1">
                        <button
                            onClick={() => handleToggle2(index)}
                            className="flex justify-between items-center border border-[#D9D9D9] w-full p-4 max-lg:p-3 bg-[#fff] rounded-lg focus:outline-none"
                        >
                            <span className='font-medium text-start max-xl:text-[18px] max-lg:text-[14px]'>Q. {faq.question}</span>
                            {activeIndex2 === index ? (
                                <FiChevronUp className="w-6 h-6" />
                            ) : (
                                <FiChevronDown className="w-6 h-6" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex2 === index ? 'max-h-[1000px]' : 'max-h-0'
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

export default Faqhome;
