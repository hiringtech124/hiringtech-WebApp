'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What course is best for HR?",
        answer: "The best course for HR depends on your career goals. Our comprehensive **HR Training Program** is designed to cover all essential HR functions and provide practical experience."
    },
    {
        question: "Is HR a high paying job?",
        answer: "HR can be a high-paying field, especially for senior roles such as HR managers, directors, and specialists in areas like compensation and benefits or HR analytics."
    },
    {
        question: "Which HR certification is best?",
        answer: "The best **HR certification** depends on your career goals and current experience. Popular certifications include the Professional in Human Resources (PHR) and Senior Professional in Human Resources (SPHR) offered by HRCI, and the SHRM Certified Professional (SHRM-CP) and SHRM Senior Certified Professional (SHRM-SCP) from SHRM. Our program offers a recognized certification that enhances your credentials and career prospects."
    },
    {
        question: "Can I become an HR professional without a degree?",
        answer: "Yes, it is possible to become an HR professional without a degree, though many employers prefer candidates with a degree in human resources or a related field. Certifications, practical experience, and professional training programs, like ours, can also significantly boost your employability in the HR field."
    },
    {
        question: "How about placement assistance?",
        answer: "We provide comprehensive placement assistance, including resume building, interview preparation, job search support, career counseling, industry connections, and continuous support until you secure a job that matches your career goals."
    },
    {
        question: "What about the technical support after the completion of the course?",
        answer: "After completing the course, you will have access to our technical support team for any course-related queries or issues. We are committed to ensuring your success even after the training ends."
    },
    {
        question: "How about the discount offer on this course?",
        answer: "We occasionally offer discounts and promotional offers for our courses. Please check our website or contact our admissions team for information on current discounts and offers."
    },
    {
        question: "What about fees installment options, if any?",
        answer: "Yes, we offer flexible payment options, including installment plans to help manage the cost of the course. Contact our admissions team for details on available payment plans."
    },
    {
        question: "Do you provide any corporate training discounts for the team?",
        answer: "Yes, we offer special discounts for corporate training programs tailored to your team’s specific needs. Contact us for more information on group rates and customized training solutions."
    },
    {
        question: "Do we get a practical session for this course?",
        answer: "Yes, our course includes practical sessions, case studies, and hands-on projects to ensure you gain real-world experience and practical knowledge in **HR management**."
    }
];



const Hrfaq = () => {
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

export default Hrfaq;
