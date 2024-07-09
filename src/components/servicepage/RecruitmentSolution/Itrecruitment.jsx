"use client";
import React from 'react';
import Image from 'next/image';
import needs from './assets/needs.png';
import talent from './assets/talent.png';
import screening from './assets/screening.png';
import client from './assets/client.png';
import placement from './assets/placement.png';
import ongoing from './assets/ongoing.png';

const Itrecruitment = () => {
    return (
        <div className="w-[1120px] mx-auto h-[2253px]">
            <h1 className="text-3xl font-bold w-[1091px] mx-auto text-center my-8">
                IT Recruitment Simplified: Our Comprehensive Hiring Process
            </h1>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full border-l-2 border-[#D79442] transform -translate-x-1/2"></div>

                {/* Section 1 */}
                <div className="flex justify-between items-center mb-10">
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Needs Assessment</h2>
                        <p className="mt-4">
                            We work with you to understand your specific requirements and business goals, focusing on IT Consulting and Recruitment Services.
                        </p>
                    </div>
                    <Image src={needs} alt="Needs Assessment" width={450} height={300} />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        1
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex justify-between items-center mb-10">
                    <Image src={talent} alt="Talent Sourcing" width={450} height={300} />
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Talent Sourcing</h2>
                        <p className="mt-4">
                            We use our extensive network to find top candidates that match your needs in IT Recruitment Services.
                        </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        2
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex justify-between items-center mb-10">
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Screening and Interviewing</h2>
                        <p className="mt-4">
                            We conduct thorough screenings and interviews to ensure candidate quality in IT Staffing Solutions.
                        </p>
                    </div>
                    <Image src={screening} alt="Screening and Interviewing" width={450} height={300} />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        3
                    </div>
                </div>

                {/* Section 4 */}
                <div className="flex justify-between items-center mb-10">
                    <Image src={client} alt="Client Interviews" width={450} height={300} />
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Client Interviews</h2>
                        <p className="mt-4">
                            We arrange for you to meet the best candidates and make the final decision for IT Job Placement.
                        </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        4
                    </div>
                </div>

                {/* Section 5 */}
                <div className="flex justify-between items-center mb-10">
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Placement and Onboarding</h2>
                        <p className="mt-4">
                            We assist with the placement and onboarding process to ensure a smooth transition in Tech Talent Acquisition.
                        </p>
                    </div>
                    <Image src={placement} alt="Placement and Onboarding" width={450} height={300} />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        5
                    </div>
                </div>

                {/* Section 6 */}
                <div className="flex justify-between items-center mb-10">
                    <Image src={ongoing} alt="Ongoing Support" width={450} height={300} />
                    <div className="w-[450px]">
                        <h2 className="text-2xl font-bold">Ongoing Support</h2>
                        <p className="mt-4">
                            We provide continuous support to ensure the success of our placements in IT Recruitment Services.
                        </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D79442] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        6
                    </div>
                </div>

                {/* Join Our Network Button */}
                <div className="flex justify-center mt-10">
                    <button className="bg-[#D79442] text-white rounded-full w-[224px] h-[51px]">
                        Join our Network
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Itrecruitment;
