import React from 'react'
import Image from 'next/image'

import icon1 from "./assets/h1.png"
import icon2 from "./assets/h2.png"
import icon3 from "./assets/h3.png"
import icon4 from "./assets/h4.png"
import icon5 from "./assets/h5.png"
import icon6 from "./assets/h6.png"


const elements = [
    {
        icon: icon1,
        title: 'Expert Faculty',
        description: 'Learn from industry experts with extensive experience in human resource management.'
    },
    {
        icon: icon2,
        title: 'Comprehensive Curriculum',
        description: 'Our curriculum covers all key HR functions, including recruitment, performance management, employee engagement, and workplace compliance training.'
    },
    {
        icon: icon3,
        title: 'Practical Approach',
        description: 'Gain hands-on experience through real-life case studies, projects, and interactive sessions.'
    },
    {
        icon: icon4,
        title: 'Flexible Learning Options',
        description: 'Choose from online HR courses or in-person classes to fit your schedule and learning preferences.'

    },
    {
        icon: icon5,
        title: 'Networking Opportunities',
        description: 'Connect with peers and industry professionals to build your professional network.'
    },
    {
        icon: icon6,
        title: 'Certification',
        description: 'Receive a recognized human resources certification upon completion, enhancing your credentials and career prospects.'
    }
]

const WhyChoose = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>*Why Choose Our HR Training Program</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Choosing our **HR Training Program** means investing in your professional growth and career advancement.</p>
                <div className='w-[90%] max-xl:w-full flex flex-wrap gap-20 max-xl:gap-10 max-sm:gap-5 max-sm:pt-5   justify-center pt-10'>
                    {elements.map((element, index) => (
                        <div key={index} className='p-5 bg-[#fff] flex flex-col gap-5 max-xl:gap-2 shadow-xl rounded-xl items-center'>
                            <Image src={element.icon} alt={`icon-${index + 1}`} className='max-xl:w-[60px]' />
                            <h3 className='text-[#252B42] text-[20px] max-xl:text-[18px] max-md:text-[16px] self-center font-medium'>{element.title}</h3>
                            <p className='text-[14px] text-[#175574] self-center text-center max-xl:leading-4 w-[250px] max-xl:w-[200px]'>{element.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
