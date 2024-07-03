import React from 'react'
import Image from 'next/image'
import img1 from './assets/c1.png'
import img2 from './assets/c2.png'
const DgPlacement = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-[#175574]'>Comprehensive Best React JS Online Course Curriculum</h2>
                        <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'> Our React JS online course curriculum is designed to provide a solid foundation and deep dive into advanced topics, ranging from the basics to specialized concepts. Here's an overview of the modules covered in our course</p>
                    </div>
                    <div className='flex justify-between max-md:flex-col max-md:flex-col-reverse pt-20 max-md:pt-5'>
                        <div className='w-[50%] max-md:w-full'>
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-lg:leading-6 mx-auto text-[#175574] font-medium'><span className='font-bold'>Introduction to React JS:</span> Gain an understanding of the fundamentals of React, its advantages, and its role in modern web development.<br /><br />
                                <span className='font-bold'>Resume Building:</span> Get expert advice on creating an impactful resume tailored to the digital marketing industry. Highlight your digital marketing skills, including SEO Training, PPC Advertising Training, and Social Media Marketing Classes, to stand out to potential employers in digital marketing agencies.<br /><br />
                                <span className='font-bold'>Interview Preparation:</span> Receive training and tips to excel in job interviews. Our program includes mock interviews and feedback sessions to boost your confidence and ensure you effectively showcase your knowledge from our Digital Marketing Courses, Content Marketing Course, and Digital Marketing Certification.<br /><br />
                                <span className='font-bold'>Job Placement:</span> Access our extensive network of digital marketing agencies and companies looking to hire skilled professionals. Our connections with industry leaders ensure that you find the best opportunities to apply your digital marketing skills in real-world settings.<br /><br />
                            </h2>
                        </div>
                        <Image src={img1} className='m-auto max-lg:w-[400px] max-sm:w-[300px]' alt='img1' />
                    </div>
                    <div className='flex flex-row-reverse justify-between max-md:flex-col max-md:flex-col-reverse pt-20 max-md:pt-5'>
                        <div className='w-[50%] max-md:w-full'>
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-lg:leading-6 mx-auto text-[#175574] font-medium'><span className='font-bold'>Forms:</span> Develop proficiency in form handling, including state management, input validation, and user interaction.<br /><br />
                                <span className='font-bold'>Career Counseling:</span>  Personalized guidance to help you choose the right career path in digital marketing. Whether you're interested in SEO Training, PPC Advertising Training, or becoming a specialist in Social Media Marketing Classes, our counselors will help you navigate your options and set achievable career goals.<br /><br />
                                <span className='font-bold'>Internship Opportunities:</span>Gain practical experience through internships with leading digital marketing firms. These internships allow you to apply what you've learned in our Digital Marketing Courses, enhance your resume, and build valuable industry connections.<br /><br />
                                <span className='font-bold'>Continuous Support:</span> Benefit from ongoing support even after course completion to ensure your career growth. Our commitment to your success doesn&apos;t end with your certification; we provide continuous learning opportunities, Digital Marketing Workshops, and updates on industry trends to keep your skills sharp<br /><br />
                            </h2>
                        </div>
                        <Image src={img2} className='m-auto max-lg:w-[400px] max-sm:w-[250px]' alt='img1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DgPlacement