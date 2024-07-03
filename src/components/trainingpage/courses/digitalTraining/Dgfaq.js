'use client'
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What is the scope of homemakers on sabbatical post completion of this digital marketing course?",
        answer: "Homemakers on sabbatical can greatly benefit from our digital marketing course online training. It provides flexible learning options and equips them with digital marketing skills to start a freelance career or secure a job in digital marketing agencies."
    },
    {
        question: "Will I be able to successfully manage online marketing for any organization?",
        answer: "Yes, our comprehensive digital marketing course online training covers all essential aspects, providing you with the knowledge and skills to manage online marketing for any organization effectively."
    },
    {
        question: "Do We Get To Work On Live Projects?",
        answer: "Yes, our digital marketing courses include live projects that offer hands-on experience, enabling you to apply theoretical knowledge to real-world scenarios."
    },
    {
        question: "What is the eligibility criterion for the Digital Marketing course to Shine As a Digital Marketer?",
        answer: "There are no strict eligibility criteria. Our digital marketing courses are suitable for beginners, working professionals, and anyone interested in learning digital marketing. A basic understanding of the internet and marketing concepts is beneficial."
    },
    {
        question: "Which course is best in digital marketing?",
        answer: "Our advanced digital marketing course is considered one of the best, covering SEO Training, Social Media Marketing Classes, Content Marketing Courses, and PPC Advertising Training."
    },
    {
        question: "What are the top 7 types of digital marketing?",
        answer: "The top 7 types of digital marketing include SEO, PPC, social media marketing, content marketing, email marketing, affiliate marketing, and influencer marketing."
    },
    {
        question: "Is digital marketing a course?",
        answer: "Yes, digital marketing is a course designed to teach various online marketing strategies and techniques to enhance brand presence and drive sales."
    },
    {
        question: "Is digital marketing good for a career?",
        answer: "Absolutely! Digital marketing is a rapidly growing field with numerous career opportunities, offering high demand for skilled professionals and competitive salaries."
    }
];




const Dgfaq = () => {
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

export default Dgfaq;
