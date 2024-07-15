"use client";
import React from 'react';
import Image from 'next/image';
import expert from './assets/expert.png';

const ExpertIt = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
            <section className="w-full flex flex-col lg:flex-row items-center justify-between mx-auto py-8">
                <div className="lg:w-2/3">
                    <h1 className="text-4xl font-bold leading-tight">
                        Expert IT Consulting and Recruitment: Building Tomorrow's Workforce Today
                    </h1>
                    <p className="text-lg leading-7 mt-4">
                        Leverage our expertise in IT Consulting and Recruitment Services, including IT Consulting Services, Technology Consulting, IT Strategy Consulting, IT Recruitment Services, and Tech Talent Acquisition, to find the perfect fit for your business. Our customized solutions in IT Staffing Solutions and IT Professional Recruitment ensure you achieve your IT goals efficiently and effectively.
                    </p>
                    <button className="w-48 h-12 bg-[#D79442] rounded-full mt-5 text-white text-lg">
                        Learn More
                    </button>
                </div>
                <Image src={expert} alt="Expert" className="w-64 h-auto lg:w-80 lg:h-auto mt-8 lg:mt-0" />
            </section>

            <section className="text-center mt-10">
                <h2 className="text-3xl font-bold w-full mx-auto">
                    Why Choose Our IT Consulting and Recruitment Services?
                </h2>

                {/* Start of the new section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-center mb-4">Expert IT Strategy Consulting</h3>
                            <p className="text-center">Our IT Strategy Consulting services help you align your IT initiatives with your business objectives, ensuring maximum efficiency and productivity. We offer top-tier IT Consulting and Recruitment Services tailored to your needs.</p>
                        </div>
                        <div className="bg-gradient-to-b from-purple-100 to-purple-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-center mb-4">Tech Talent Acquisition</h3>
                            <p className="text-center">We specialize in Tech Talent Acquisition, identifying and attracting top IT professionals who fit your company culture and technical requirements. Our IT Recruitment Services are second to none.</p>
                        </div>
                        <div className="bg-gradient-to-b from-pink-100 to-pink-200 p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-center mb-4">Customised IT Recruitment Service</h3>
                            <p className="text-center">Our Customised IT Recruitment Service is tailored to your specific needs, providing you with the best candidates for your unique business challenges. As the leading IT Recruitment Company, we offer unparalleled IT Staffing Solutions.</p>
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex justify-center">
                            <div className="bg-gradient-to-b from-orange-100 to-orange-200 p-6 shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold text-center mb-4">IT Staffing Solutions</h3>
                                <p className="text-center">We offer comprehensive IT Staffing Solutions, from temporary staffing to full-time placements, ensuring your projects are always fully staffed with the right talent. Our IT Job Placement and IT Career Placement services are designed to meet your every need.</p>
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex justify-center">
                            <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold text-center mb-4">India’s No. 1 IT Recruitment Agency</h3>
                                <p className="text-center">Recognized as India’s leading IT Recruitment Agency, we pride ourselves on our extensive network and proven track record of successful placements in IT Recruitment Services and IT Professional Recruitment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-[#D79442] text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">Discover our Solutions</button>
                    </div>
                </div>
                {/* End of the new section */}
            </section>
        </div>
    );
};

export default ExpertIt;
