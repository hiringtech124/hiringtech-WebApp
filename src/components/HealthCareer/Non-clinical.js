'use client';
import React, { useState } from 'react';

const NonClinical = () => {
    // State to manage the active tab and animation
    const [activeTab, setActiveTab] = useState('Administrative');
    const [isAnimating, setIsAnimating] = useState(false);

    // Array of tab data
    const tabs = [
        'Administrative',
        'Support Services',
        'IT & Technology',
        'Finance & Accounting',
    ];

    // Object to map tab names to their respective content
    const tabContent = {
        'Administrative': [
            {
                title: 'Medical Receptionists', description: 'Manage patient appointments and administrative tasks in healthcare settings.'
            },
            {
                title: 'Administrative Assistants', description: ' Support healthcare operations with clerical and organizational tasks'
            },
            {
                title: 'Office Managers', description: 'Oversee the daily operations of healthcare facilities, ensuring efficiency and effectiveness.'
            },
        ],
        'Support Services': [
            {
                title: 'Food Service Workers', description: 'Ensure patients receive proper nutrition through meal preparation and delivery.'
            },
            {
                title: 'Housekeeping Staff', description: 'Maintain a clean and safe environment within healthcare facilities.'
            },
            {
                title: 'SurgeonsMaintenance Technicians', description: 'Keep healthcare facilities running smoothly by managing repairs and maintenance.'
            },
        ],
        'IT & Technology': [
            {
                title: 'Healthcare IT Project Managers', description: 'Lead technology projects that enhance healthcare delivery and efficiency.'
            },
            {
                title: 'Software Developers', description: 'Create and maintain healthcare software solutions.'
            },
            {
                title: 'Data Analysts', description: ' Analyze healthcare data to support informed decision-making and improve patient outcomes.'
            },
        ],
        'Finance & Accounting': [
            {
                title: 'Accountants', description: 'Manage the financial operations within healthcare facilities.'
            },
            {
                title: 'Financial Analysts', description: 'Provide insights into financial performance to support strategic decision-making.'
            },
            {
                title: 'Billing and Coding Specialists', description: 'Ensure accurate processing of healthcare claims and payments.'
            },
        ],
    };

    // Function to handle tab change with animation
    const handleTabChange = (tab) => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsAnimating(false);
        }, 300); // Duration should match the CSS animation duration
    };

    return (
        <>
            <div className='flex w-full justify-center py-20 max-md:py-0'>
                <div className='w-[90%] flex flex-col items-center'>
                    <h2 className='text-[41px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[20px] text-center font-bold text-[#062B43]'>
                        Comprehensive Healthcare Recruitment:<br />
                        Non-Clinical Jobs                    </h2>
                    <div className='w-full py-10'>
                        {/* Tab Navigation */}
                        <div className='flex justify-center max-lg:flex-wrap gap-20 max-lg:gap-5 w-full'>
                            {tabs.map((tab) => (
                                <p
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`border border-[#D79442] text-[20px] max-lg:text-[16px] max-md:text-[14px] text-[#062B43] hover:text-[#fff] hover:bg-[#D79442] font-medium px-4 py-2 max-md:px-3 max-md:py-1 rounded-[30px] cursor-pointer ${activeTab === tab ? 'bg-[#D79442] text-[#fff]' : ''}`}
                                >
                                    {tab}
                                </p>
                            ))}
                        </div>

                        {/* Content Panels */}
                        <div className='flex justify-center gap-20 max-lg:gap-10 max-md:flex-wrap mx-40 max-xl:mx-0 py-10'>
                            {tabContent[activeTab].map((content, index) => (
                                <div
                                    key={index}
                                    className={`w-[250px] transition-transform duration-300 ${isAnimating ? 'scale-110 opacity-80' : 'scale-100 opacity-100'
                                        }`}
                                >
                                    <h2 className='grid items-center px-3 font-medium text-[20px] max-xl:text-[16px] bg-[#F8E4E4] text-[#175574] text-center h-[120px] rounded-t-[20px]'>{content.title}</h2>
                                    <p className='text-[#175574] bg-[#fff] grid items-center px-3 text-[18px] max-xl:text-[16px] text-opacity-[0.5] text-center h-[120px] rounded-b-[20px]'>{content.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NonClinical;
