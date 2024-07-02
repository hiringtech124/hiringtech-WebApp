import React from 'react'
import Image from 'next/image'
import icon1 from './assets/op1.png'
import icon2 from './assets/op2.png'
import icon3 from './assets/op3.png'
import icon4 from './assets/op4.png'


const elements = [
    {
        icon: icon1,
        title: 'React JS Developer',
        description: 'Specialise in building dynamic user interfaces and web applications using React JS, leveraging its powerful capabilities for front-end development.'
    },
    {
        icon: icon2,
        title: 'Front End Developer',
        description: 'Focus on creating visually appealing and interactive user experiences by combining design elements with React JS functionalities.'
    },
    {
        icon: icon3,
        title: 'Full Stack Developer',
        description: 'Seamlessly integrate React JS for front-end development and expand your skills to include back-end technologies, offering full-stack development expertise.'
    },
    {
        icon: icon4,
        title: 'UI/UX Designer',
        description: 'Upon completion, receive a REACT JS CERTIFICATION that adds value to your professional profile and showcases your expertise in UI UX development.'
    }
]

const Opportunities = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-[#175574]'>Career Opportunities After Completing the React JS Course</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>By completing our REACT JS TRAINING COURSE, you position yourself for diverse career opportunities in the ever-evolving tech industry. Key roles you can pursue after mastering React JS include:</p>
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

export default Opportunities
