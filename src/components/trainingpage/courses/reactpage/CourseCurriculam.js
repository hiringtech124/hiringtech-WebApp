import React from 'react'
import Image from 'next/image'
import img1 from './assets/c1.png'
import img2 from './assets/c2.png'
const CourseCurriculam = () => {
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
                                <span className='font-bold'>Components and Props:</span> Learn how to create reusable components, manage props, and ensure seamless data flow within your application.<br /><br />
                                <span className='font-bold'>State and Lifecycle:</span> Explore state management, lifecycle methods, and best practices for maintaining application stability.<br /><br />
                                <span className='font-bold'>Handling Events:</span> Master the art of handling user inputs and events to create interactive and responsive applications.<br /><br />
                                <span className='font-bold'>Conditional Rendering:</span> Implement techniques for conditional component rendering to enhance user experience and interface responsiveness. </h2>
                        </div>
                        <Image src={img1} className='m-auto max-lg:w-[400px] max-sm:w-[300px]' alt='img1' />
                    </div>
                    <div className='flex flex-row-reverse justify-between max-md:flex-col max-md:flex-col-reverse pt-20 max-md:pt-5'>
                        <div className='w-[50%] max-md:w-full'>
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-lg:leading-6 mx-auto text-[#175574] font-medium'><span className='font-bold'>Forms:</span> Develop proficiency in form handling, including state management, input validation, and user interaction.<br /><br />
                                <span className='font-bold'>Lifting State Up:</span>  Learn how to manage state across components, ensuring centralized data management for enhanced application efficiency.<br /><br />
                                <span className='font-bold'>Composition vs Inheritance:</span> Explore different code reuse strategies and component structuring techniques for optimized development workflows.<br /><br />
                                <span className='font-bold'>Introduction to React JS:</span> Gain an understanding of the fundamentals of React, its advantages, and its role in modern web development.<br /><br />
                                <span className='font-bold'>React Router:</span> Master navigation and routing in single-page applications using React Router, enhancing application functionality and user experience. </h2>
                        </div>
                        <Image src={img2} className='m-auto max-lg:w-[400px] max-sm:w-[250px]' alt='img1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCurriculam