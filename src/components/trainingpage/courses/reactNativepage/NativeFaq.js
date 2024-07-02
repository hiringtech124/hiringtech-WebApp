'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What is React Native?",
        answer: "React Native is an open-source framework created by Facebook that allows developers to build mobile applications using JavaScript and React. It enables code reuse across iOS and Android platforms."
    },
    {
        question: "Who should take a React Native training course?",
        answer: "React Native training courses are ideal for:\nJavaScript developers looking to expand their skills into mobile development.\nFront-end developers familiar with React who want to build mobile apps.\nMobile developers interested in using a cross-platform framework."
    },
    {
        question: "What prerequisites are needed for a React Native course?",
        answer: "Typically, you should have a basic understanding of JavaScript and React. Familiarity with mobile app development concepts can be helpful but is not required."
    },
    {
        question: "How long does it take to complete a React Native course?",
        answer: "The duration of React Native courses can vary widely. Some introductory courses can be completed in a few hours, while more comprehensive programs may take several weeks or months."
    },
    {
        question: "What will I learn in a React Native training course?",
        answer: "A React Native training course usually covers:\nBasics of React Native and its components.\nSetting up the development environment.\nBuilding and styling user interfaces.\nNavigation and routing.\nHandling state and props.\nIntegrating with APIs.\nDebugging and testing.\nPublishing apps to App Store and Google Play."
    },
    {
        question: "Can I build both iOS and Android apps with React Native?",
        answer: "Yes, React Native is designed to build cross-platform applications for both iOS and Android using a single codebase."
    },
    {
        question: "How do React Native courses handle updates to the framework?",
        answer: "We at Hiring tech regularly update their course content to reflect the latest changes and improvements in the framework."
    },
    {
        question: "Do React Native courses include hands-on projects?",
        answer: "Yes, we provide hands-on projects. Hands-on projects help you apply what you've learned. These projects range from simple apps to more complex, full-featured applications."
    },
    {
        question: "Will I get a certificate after completing a React Native course?",
        answer: "Yes, you will get a certificate of completion."
    },
    {
        question: "Can I get a job after completing a React Native course?",
        answer: "Completing a React Native course can significantly enhance your job prospects, especially if you have prior experience in JavaScript and mobile development."
    }
];


const NativeFaq = () => {
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

export default NativeFaq;
