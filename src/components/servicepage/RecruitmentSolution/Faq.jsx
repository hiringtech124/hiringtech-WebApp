'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What makes Hiring Tech different from other IT recruitment agencies",
        answer: "React is a JavaScript library for building user interfaces, primarily used for developing single-page applications. It allows developers to create reusable UI components."
    },
    {
        question: "How quickly can you fill an IT position?",
        answer: "Learning React offers benefits like high demand in the job market, the ability to create dynamic and high-performing web applications, a strong community support, and compatibility with other libraries and frameworks."
    },
    {
        question: "Do you offer IT consulting services in addition to recruitment?",
        answer: "Yes, practical sessions are included in the React course to provide hands-on experience in building React applications."
    },
    {
        question: "What Tools And Technologies Will Be Used During The React Course?",
        answer: "The course will use tools and technologies like JavaScript, JSX, Node.js, npm, Babel, Webpack, and Redux."
    },
    {
        question: "What industries do you specialize in for IT recruitment?",
        answer: "Yes, the course includes opportunities to work on real-time and live projects to apply the concepts learned."
    },
    {
        question: "How Many Students Are Typically In A Batch For The React Course?",
        answer: "Batch sizes typically range from 10 to 20 students, ensuring personalised attention and better interaction."
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
