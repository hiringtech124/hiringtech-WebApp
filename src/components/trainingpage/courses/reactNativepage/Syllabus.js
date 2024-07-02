import React from 'react'
import Image from 'next/image'
import img1 from './assets/s1.png'
import img2 from './assets/s2.png'
const Syllabus = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-[#175574]'>Course Syllabus</h2>
                        <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Our REACT NATIVE ONLINE TRAINING COURSES are meticulously structured to ensure a comprehensive understanding of the framework. Here&apos;s a glimpse of our course syllabus:</p>
                    </div>
                    <div className='flex justify-between max-md:flex-col max-md:flex-col-reverse pt-20 max-md:pt-5'>
                        <div className='w-[50%] max-md:w-full'>
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-lg:leading-6 mx-auto text-[#175574] font-medium'><span className='font-bold'>Introduction to React JS:</span> Gain an understanding of the fundamentals of React, its advantages, and its role in modern web development.<br /><br />
                                <span className='font-bold'> Introduction to React Native:</span> Overview of React Native, Setting up the development environment, Understanding the React Native architecture.<br /><br />
                                <span className='font-bold'>Building Components:</span> Styling components using Flexbox, Creating responsive layouts, Using external libraries for styling.<br /><br />
                                <span className='font-bold'>Navigation:</span> Implementing navigation with React Navigation, Stack, tab, and drawer navigation, Deep linking and navigation patterns.<br /><br />
                                <span className='font-bold'>State Management:</span> Introduction to Redux and Context API, Managing application state with Redux, Middleware and asynchronous actions. </h2>
                        </div>
                        <Image src={img1} className='m-auto max-lg:w-[400px] max-sm:w-[300px]' alt='img1' />
                    </div>
                    <div className='flex flex-row-reverse justify-between max-md:flex-col max-md:flex-col-reverse pt-20 max-md:pt-5'>
                        <div className='w-[50%] max-md:w-full'>
                            <h2 className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-lg:leading-6 mx-auto text-[#175574] font-medium'><span className='font-bold'>Forms:</span> Develop proficiency in form handling, including state management, input validation, and user interaction.<br /><br />
                                <span className='font-bold'>Working with APIs:</span>  Fetching data using REST API, Handling asynchronous operations, Integrating with GraphQL APIs.<br /><br />
                                <span className='font-bold'>Testing and Debugging:</span> Writing unit and integration tests, Using Jest and Enzyme for testing, Debugging techniques and tools.<br /><br />
                                <span className='font-bold'>Deployment and Maintenance:</span> Preparing apps for deployment, Publishing apps to the App Store and Google Play, Maintaining and updating applications.<br /><br />
                                <span className='font-bold'>Native Modules and APIs:</span> Using native device capabilities, Bridging native code with React Native, Exploring native modules and plugins. <br /><br />
                                <span className='font-bold'>Performance Optimization:</span> Identifying and fixing performance bottlenecks, Best practices for optimizing React Native apps, Profiling and debugging tools
                            </h2>

                        </div>
                        <Image src={img2} className='m-auto max-lg:w-[400px] max-sm:w-[250px]' alt='img1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Syllabus