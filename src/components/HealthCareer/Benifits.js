import React from 'react';
import Link from 'next/link';
const Benifits = () => {
    const content = [
        {
            title: 'Medical, Dental, and Vision Insurance',
            description: 'Comprehensive health coverage for you and your family.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: '401(k) Retirement Plan',
            description: 'Secure your future with our retirement savings plan, including company match options',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        },
        {
            title: 'Paid Time Off and Holidays',
            description: 'Secure your future with our retirement savings plan, including company match options',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#F7D7FF]'
        },
        {
            title: 'Employee Wellness Programs',
            description: ' Participate in programs designed to support your physical and mental well-being.',
            bgColor: 'bg-gradient-to-b from-[#FFF7F7] to-[#E2E6FA]'
        }
    ];


    return (
        <div className='w-full flex justify-center py-20 max-sm:py-10'>
            <div className='w-[90%]'>
                <h2 className='text-[41px] max-xl:text-[34px] max-lg:text-[28px] max-sm:text-[20px] text-[#062B43] font-bold text-center'>Comprehensive Employee Benefits</h2>
                <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-10 max-md:gap-x-5 max-sm:gap-5 pt-10 mx-20 max-xl:mx-0'>
                    {content.map((item, index) => (
                        <div key={index} className={`p-8 max-md:p-4 ${item.bgColor} rounded-2xl shadow-xl    max-sm:shadow-lg`}>
                            <h3 className='font-normal text-[#175574] text-[16px] max-sm:text-[14px] text-center'>
                                <span className='font-semibold text-[20px] max-sm:text-[16px]'>{item.title}</span><br />
                                {item.description}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Benifits;
