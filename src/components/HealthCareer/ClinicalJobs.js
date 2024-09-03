'use client';
import React, { useState } from 'react';

const ClinicalJobs = () => {
    // State to manage the active tab and animation
    const [activeTab, setActiveTab] = useState('Nursing');
    const [isAnimating, setIsAnimating] = useState(false);

    // Array of tab data
    const tabs = [
        'Nursing',
        'Physicians',
        'Allied Health',
        'Other Clinical Roles',
    ];

    // Object to map tab names to their respective content
    const tabContent = {
        'Nursing': [
            { title: 'Registered Nurses (RNs)', description: 'Provide essential patient care in diverse healthcare settings.' },
            { title: 'Licensed Practical Nurses (LPNs)', description: 'Support RNs and physicians in delivering high-quality healthcare.' },
            { title: 'Certified Nursing Assistants (CNAs)', description: 'Assist with daily patient care activities and basic healthcare needs.' },
        ],
        'Physicians': [
            { title: 'Primary Care Physicians', description: 'Deliver comprehensive care and manage overall patient health.' },
            { title: 'Specialist Physicians (e.g., Cardiology, Oncology)', description: 'Provide expert care in specialized medical fields.' },
            { title: 'Surgeons', description: 'Perform advanced surgical procedures, contributing to critical patient outcomes.' },
        ],
        'Allied Health': [
            { title: 'Physical Therapists (PTs)', description: 'Help patients recover and improve physical mobility through tailored therapy plans.' },
            { title: 'Occupational Therapists (OTs)', description: 'Assist patients in developing skills needed for daily living and working.' },
            { title: 'Speech-Language Pathologists (SLPs)', description: 'Address communication and swallowing disorders in patients.' },
        ],
        'Other Clinical Roles': [
            { title: 'Medical Laboratory Technicians', description: 'Conduct vital tests and analyses to support diagnostic processes.' },
            { title: 'Radiologic Technologists', description: 'Perform imaging procedures to aid in patient diagnosis and treatment.' },
            { title: 'Respiratory Therapists', description: 'Provide essential care for patients with respiratory conditions.' },
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
            <div className='flex w-full justify-center py-20 max-md:py-10'>
                <div className='w-[90%] flex flex-col items-center'>
                    <h2 className='text-[41px] max-xl:text-[38px] max-lg:text-[30px] max-sm:text-[20px] text-center font-bold text-[#062B43]'>
                        Comprehensive Healthcare Recruitment:<br />Clinical Jobs
                    </h2>
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

export default ClinicalJobs;
