import React from 'react'
import Image from 'next/image'

import icon1 from "./assets/d3.png"
import icon2 from "./assets/d2.png"
import icon3 from "./assets/d3.png"
import icon4 from "./assets/d3.png"
import icon5 from "./assets/d2.png"
import icon6 from "./assets/d3.png"


const elements = [
    {
        icon: icon1,
        title: 'Industry-Recognized Certification',
        description: 'Our Digital Marketing Certification is recognized by top digital marketing agencies and employers, enhancing your career prospects. Our certification validates your digital marketing skills, making you a valuable asset in the job market.'
    },
    {
        icon: icon2,
        title: 'Hands-On Learning',
        description: 'Engage in practical projects and real-world scenarios to apply your digital marketing skills effectively. Our digital marketing courses offer extensive practical training, including live projects in SEO Training, PPC Advertising Training, and Social Media Marketing Classes.'
    },
    {
        icon: icon3,
        title: 'Expert Instructors',
        description: 'Learn from experienced professionals who are experts in the digital marketing field. Our instructors bring their extensive industry experience into the classroom, providing you with the latest digital marketing techniques and trends.'
    },
    {
        icon: icon4,
        title: 'Flexible Learning',
        description: 'Our digital marketing course online training allows you to learn at your own pace, making it convenient for working professionals and students. Whether you are a beginner or an advanced learner, our courses are designed to fit your schedule.'

    },
    {
        icon: icon5,
        title: 'Comprehensive Curriculum',
        description: 'Our curriculum covers all aspects of digital marketing, including SEO Training, PPC Advertising Training, Social Media Marketing Classes, and Content Marketing Courses. This ensures you gain a holistic understanding of digital marketing strategies.'
    },
    {
        icon: icon6,
        title: 'Placement Assistance',
        description: 'Benefit from our dedicated placement assistance to secure a job in leading digital marketing agencies. Our placement support includes resume building, interview preparation, and job placement services.'
    }
]

const Whydg = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>*Why Choose Our HR Training Program</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Choosing our **HR Training Program** means investing in your professional growth and career advancement.</p>
                <div className='w-[90%] max-xl:w-full flex flex-wrap gap-20 max-xl:gap-10 max-sm:gap-5 max-sm:pt-5   justify-center pt-10'>
                    {elements.map((element, index) => (
                        <div key={index} className='p-5 bg-[#fff] flex flex-col gap-5 max-xl:gap-2 shadow-xl rounded-xl items-center'>
                            <Image src={element.icon} alt={`icon-${index + 1}`} className='max-xl:w-[60px] mx-auto' />
                            <h3 className='text-[#252B42] text-[20px] max-xl:text-[18px] max-md:text-[16px] self-center font-medium'>{element.title}</h3>
                            <p className='text-[14px] text-[#175574] self-center text-center max-xl:leading-4 w-[250px] max-xl:w-[200px]'>{element.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Whydg
