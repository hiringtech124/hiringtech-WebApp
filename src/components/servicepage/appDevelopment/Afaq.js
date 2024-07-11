'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What is an average duration of a mobile project? Are there any ways to speed up the development if I need to launch an app ASAP?",
        answer: "The average duration of a mobile project can vary from 15 days to 6 months, depending on the complexity. To expedite the process, consider a phased development approach or prioritize key features for the initial launch."
    },
    {
        question: "How can I track the progress of my project?",
        answer: "We provide regular updates, detailed reports, and access to project management tools to keep you informed about the progress."
    },
    {
        question: "Do you help organize a smooth transfer of an app development project from a different vendor?",
        answer: "Yes, we assist in a seamless transition by thoroughly understanding the existing codebase and ensuring a smooth handover."
    },
    {
        question: "Do you work with security-sensitive apps?",
        answer: "Absolutely. We prioritize security and implement robust measures to protect sensitive data."
    },
    {
        question: "What is a service in app development?",
        answer: "Services in app development include design, coding, testing, deployment, and maintenance of mobile applications."
    },
    {
        question: "What are mobile app services?",
        answer: "Mobile app services encompass the end-to-end process of creating, deploying, and maintaining mobile applications."
    },
    {
        question: "How much should I pay for app development?",
        answer: "The cost varies based on the complexity, features, and platform."
    }
];



const Afaq = () => {
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

export default Afaq;
