'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "Q. What types of healthcare jobs does Hiring Tech offer?",
        answer: "Hiring Tech offers a wide range of healthcare job opportunities, including clinical roles such as nurses, physicians, and allied health professionals, as well as non-clinical roles in administration, IT, finance, and support services."
    },
    {
        question: "Q. How do I apply for a job through Hiring Tech?",
        answer: "You can apply for a job by visiting our website and browsing the available positions in the healthcare division. Once you find a suitable role, click on the job listing and follow the application instructions."
    },
    {
        question: "Q.  What qualifications are required for clinical jobs?",
        answer: "Qualifications vary depending on the specific role. For example, Registered Nurses (RNs) typically need a nursing degree and a valid license, while Physicians require a medical degree and board certification in their specialty."
    },
    {
        question: "Q.  Does Hiring Tech provide opportunities for career growth?",
        answer: "Yes, Hiring Tech is committed to your professional development. We offer opportunities for continuing education, certifications, and career advancement to help you grow in your career."
    },
    {
        question: "Q. What benefits does Hiring Tech offer to healthcare employees?",
        answer: "We offer a comprehensive benefits package that includes medical, dental, and vision insurance, a 401(k) retirement plan, paid time off, holidays, and employee wellness programs. "
    },
    {
        question: "Q. Are there opportunities for non-clinical roles in healthcare?",
        answer: "Absolutely! Hiring Tech offers a variety of non-clinical roles in areas such as administration, IT, finance, and support services. These roles are essential to the smooth operation of healthcare facilities."
    },
    {
        question: "Q. What makes Hiring Tech a great place to work?",
        answer: "At Hiring Tech, we provide competitive salaries, state-of-the-art facilities, and a collaborative environment that fosters teamwork and respect. We also recognize and reward outstanding performance."
    },
    {
        question: "Q. How does Hiring Tech support employee wellness?",
        answer: "We offer employee wellness programs designed to support your physical and mental well-being, including fitness initiatives, mental health resources, and healthy living workshops."
    },
    {
        question: "Q. Can I apply for multiple positions at Hiring Tech?",
        answer: "Yes, you can apply for multiple positions that match your qualifications and interests. We encourage you to explore various opportunities within our healthcare division."
    },
    {
        question: "Q. How does Hiring Tech ensure a smooth hiring process?",
        answer: "Our recruitment team works closely with candidates to ensure a seamless hiring process. From initial application to onboarding, we are here to support you every step of the way."
    }
];



const HealthFaq = () => {
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
                            <span className='font-medium text-start max-xl:text-[18px] max-lg:text-[14px]'>{faq.question}</span>
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

export default HealthFaq;
