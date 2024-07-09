"use client";
import React from 'react';
import Image from 'next/image';
import expert from './assets/expert.png';

const ExpertIt = () => {
    return (
        <div>
            <section className="w-[1440px] h-[430px] flex items-center justify-between mx-auto">
                <div className="w-[1042px]">
                    <h1 className="text-4xl font-bold leading-tight">
                        Expert IT Consulting and Recruitment: Building Tomorrow's Workforce Today
                    </h1>
                    <p className="text-lg leading-7 w-[777px] mt-4">
                        Leverage our expertise in IT Consulting and Recruitment Services, including IT Consulting Services, Technology Consulting, IT Strategy Consulting, IT Recruitment Services, and Tech Talent Acquisition, to find the perfect fit for your business. Our customized solutions in IT Staffing Solutions and IT Professional Recruitment ensure you achieve your IT goals efficiently and effectively.
                    </p>
                    <button className="w-[236px] h-[51px] bg-[#D79442] rounded-full mt-5 text-white text-lg">
                        Learn More
                    </button>
                </div>
                <Image src={expert} alt="Expert" width={328} height={281} />
            </section>

            {/* Why Choose Section */}
            <section className="text-center mt-10">
                <h2 className="text-3xl font-bold w-[662px] h-[74px] mx-auto">
                    Why Choose Our IT Consulting and Recruitment Services?
                </h2>
                <div className="grid grid-cols-3 gap-4 w-[1096px] h-[674px] mx-auto mt-8">
                    <Image src="/strategy.png" alt="IT Strategy" width={328} height={281} />
                    <Image src="/techTalent.png" alt="Tech Talent" width={328} height={281} />
                    <Image src="/customised.png" alt="Customised" width={328} height={281} />
                    <Image src="/staffing.png" alt="Staffing" width={328} height={281} />
                    <Image src="/agency.png" alt="Agency" width={328} height={281} />
                </div>
                <button className="w-[269px] h-[51px] bg-[#D79442] rounded-full mt-5 text-white text-lg">
                    Discover our Solutions
                </button>
            </section>
        </div>
    );
};

export default ExpertIt;
