import React from 'react'
import Image from 'next/image'

import icon1 from "./assets/k1.png"
import icon2 from "./assets/k2.png"
import icon3 from "./assets/k3.png"
import icon4 from "./assets/k4.png"
import icon5 from "./assets/k5.png"
import icon6 from "./assets/k6.png"
import icon7 from "./assets/k7.png"
import icon8 from "./assets/k8.png"


const elements = [
    {
        icon: icon1,
        title: 'Introduction to Human Resource Management',
        description: 'This  provides an overview , its functions, and its strategic role in organizations. You will learn about the evolution  and the key responsibilities of HR professionals'
    },
    {
        icon: icon2,
        title: 'Recruitment and Selection',
        description: 'Explore the recruitment and selection process, including job analysis, sourcing candidates, conducting interviews, and making hiring decisions. Learn best practices for attracting and retaining top talent.'
    },
    {
        icon: icon3,
        title: 'Training and Development',
        description: 'Understand the importance of **employee development courses**. This module covers training needs analysis, designing effective training programs, and evaluating their impact on performance.'
    },
    {
        icon: icon4,
        title: 'Performance Management',
        description: 'Learn how to implement effective performance management systems. This module includes goal setting, performance appraisals, feedback techniques, and strategies for improving employee performance'

    },
    {
        icon: icon5,
        title: 'Compensation and Benefits',
        description: 'Gain insights into designing and managing compensation and benefits programs.Topics include salary structures, incentive plans, health benefits, and ensuring compliance with legal requirements'
    },
    {
        icon: icon6,
        title: 'Employee Relations and Compliance',
        description: 'This module focuses on managing employee relations and ensuring workplace compliance. Learn about labor laws, conflict resolution, disciplinary procedures.'
    },
    {
        icon: icon7,
        title: 'Strategic HR Management',
        description: 'Explore how HR can contribute to organizational strategy. Topics include workforce planning, talent management, change management, and aligning HR practices with business goals.'
    },
    {
        icon: icon8,
        title: 'HR Analytics and Metrics',
        description: 'Learn how to leverage HR analytics to make data-driven decisions. This module covers key HR metrics, data collection methods, and using analytics to improve HR processes and outcomes.'
    }
]

const HrCurriculum = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>Why Choose Hiring Tech for Your<br /> React Native Training?</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>At Hiring Tech, we pride ourselves on offering top-notch REACT NATIVE COURSES ONLINE that cater to both beginners and experienced developers. Our curriculum is designed to cover all aspects of React Native, from the basics to advanced concepts, ensuring that you become a proficient mobile app developer.</p>
                <div className='w-[90%] max-xl:w-full flex flex-wrap gap-10 max-xl:gap-10 max-sm:gap-5 max-sm:pt-5   justify-center pt-10'>
                    {elements.map((element, index) => (
                        <div key={index} className='p-5 bg-[#fff] flex flex-col gap-5 max-xl:gap-2 shadow-xl rounded-xl items-center'>
                            <Image src={element.icon} alt={`icon-${index + 1}`} className='max-xl:w-[60px]' />
                            <h3 className='text-[#252B42] mx-auto w-[250px] flex justify-center text-[20px] max-xl:text-[18px] max-md:text-[16px] self-center font-medium'>{element.title}</h3>
                            <p className='text-[14px] text-[#175574] self-center text-center max-xl:leading-4 w-[250px] max-xl:w-[200px]'>{element.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HrCurriculum
