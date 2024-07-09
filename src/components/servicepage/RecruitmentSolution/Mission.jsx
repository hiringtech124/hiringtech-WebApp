"use client";
import React from 'react';
import Image from 'next/image';
import mission from './assets/mission.png';
import vision from './assets/vision.png';
import values from './assets/values.png';

const Mission = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
            <section className="text-center mt-10">
                <h1 className="text-4xl font-bold text-[#062B43]">
                    Get a Significant Boost to Your Business
                </h1>
            </section>

            <section className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                <div>
                    <h2 className="text-xl font-bold">Streamlined Hiring Process</h2>
                    <p className="mt-2">
                        Our efficient hiring process in IT Consulting and Recruitment Services reduces time-to-fill, ensuring you get the right candidates quickly and efficiently.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Access to Top Talent</h2>
                    <p className="mt-2">
                        We have access to a vast pool of top IT talent through our IT Recruitment Services, providing you with the best candidates for your needs. Our Technology Consulting ensures you stay ahead of the curve.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Cost-Effective Solutions</h2>
                    <p className="mt-2">
                        Our recruitment and consulting services are designed to be cost-effective, saving you time and money in the long run. Our IT Strategy Consulting and Technology Consulting deliver results.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Customized IT Solutions</h2>
                    <p className="mt-2">
                        We offer bespoke IT solutions, including IT Strategy Consulting and Technology Consulting, that are tailored to meet the unique needs of your business, enhancing overall performance.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Industry Expertise</h2>
                    <p className="mt-2">
                        Our team of experts has deep industry knowledge and experience in IT Consulting and Recruitment Services, providing you with insightful and strategic guidance in IT Recruitment Services and Tech Talent Acquisition.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Long-Term Partnerships</h2>
                    <p className="mt-2">
                        We build long-term relationships with our clients, ensuring continuous support and success for your business through our IT Staffing Solutions and IT Job Placement services.
                    </p>
                </div>
            </section>

            <section className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between mt-10">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-[#175574]">Mission</h2>
                    <p className="mt-4">
                        To provide unparalleled IT Consulting and Recruitment Services, empowering businesses to achieve their full potential through IT Strategy Consulting, Technology Consulting, and customized IT Recruitment Services.
                    </p>
                </div>
                <Image src={mission} alt="Mission" className="w-64 h-auto lg:w-80 lg:h-auto mt-8 lg:mt-0" />
            </section>

            <section className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between mt-10">
                <Image src={vision} alt="Vision" className="w-64 h-auto lg:w-80 lg:h-auto mt-8 lg:mt-0" />
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-[#175574]">Vision</h2>
                    <p className="mt-4">
                        To provide unparalleled IT Consulting and Recruitment Services, empowering businesses to achieve their full potential through IT Strategy Consulting, Technology Consulting, and customized IT Recruitment Services.
                    </p>
                </div>
            </section>

            <section className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between mt-10">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-[#175574]">Values</h2>
                    <p className="mt-4">
                        Integrity, Excellence, Innovation, and Commitment to Client Success in IT Recruitment Services and IT Professional Recruitment.
                    </p>
                </div>
                <Image src={values} alt="Values" className="w-64 h-auto lg:w-80 lg:h-auto mt-8 lg:mt-0" />
            </section>

            <section className="w-full mx-auto mt-10">
                <h2 className="text-3xl font-bold">We Believe</h2>
                <p className="mt-4">
                    At Hiring Tech, we believe in the power of technology and the people behind it. Our mission is to bridge the gap between top tech talent and businesses that need their expertise through IT Consulting and Recruitment Services. We are dedicated to delivering customized solutions that meet your unique needs in IT Strategy Consulting and Technology Consulting, ensuring your business thrives in today’s competitive landscape. Our commitment to excellence in IT Recruitment Services drives us to continually innovate and improve our services, helping you achieve your goals.
                </p>
            </section>

            <section className="w-full mx-auto mt-10">
                <h2 className="text-3xl font-bold">End-to-End IT Recruitment: Your Complete Hiring Solution</h2>
                <p className="mt-4">
                    Our comprehensive hiring process ensures that we find the perfect hire for your business every time. From initial screening to final placement, we handle every step of the process with precision and care, including IT Professional Recruitment and IT Career Placement.
                </p>
            </section>
        </div>
    );
};

export default Mission;
