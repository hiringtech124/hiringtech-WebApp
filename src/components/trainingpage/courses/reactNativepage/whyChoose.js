import React from 'react'
import Image from 'next/image'

import icon1 from "./assets/n1.png"
import icon2 from "./assets/n2.png"
import icon3 from "./assets/n3.png"
import icon4 from "./assets/n4.png"
import icon5 from "./assets/n5.png"


const elements = [
    {
        icon: icon1,
        title: 'Comprehensive Curriculum',
        description: 'Our REACT NATIVE TRAINING COURSE covers everything from the fundamentals to advanced topics, including state management, navigation, native modules, and performance optimization.'
    },
    {
        icon: icon2,
        title: 'Experienced Instructors',
        description: 'Gain practical experience by working on real-world React JS projects that simulate industry scenarios. These projects allow you to apply theoretical knowledge to practical applications, honing your skills.'
    },
    {
        icon: icon3,
        title: 'Hands-on Projects',
        description: 'Access our React JS online courses at your convenience, allowing you to learn at your own pace. Whether you are a full-time professional or a student, our flexible learning options cater to your schedule.'
    },
    {
        icon: icon4,
        title: 'Flexible Learning',
        description: 'Upon completion, receive a REACT JS CERTIFICATION that adds value to your professional profile and showcases your expertise in React JS development.'

    },
    {
        icon: icon5,
        title: 'Community Support',
        description: 'Our comprehensive REACT JS TRAINING WITH PLACEMENT ASSISTANCE ensures that you are not only well-trained but also job-ready. We provide dedicated support to help you secure rewarding job opportunities in the tech industry.'
    }
]

const WhyChoose = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-center text-[#175574]'>Why Choose Hiring Tech for Your<br /> React Native Training?</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>At Hiring Tech, we pride ourselves on offering top-notch REACT NATIVE COURSES ONLINE that cater to both beginners and experienced developers. Our curriculum is designed to cover all aspects of React Native, from the basics to advanced concepts, ensuring that you become a proficient mobile app developer.</p>
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
