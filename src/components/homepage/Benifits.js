import React from 'react'
import Image from 'next/image'
import img1 from './assets/b1.png'
import img2 from './assets/b2.png'
import img3 from './assets/b3.png'
import img4 from './assets/b4.png'
import img5 from './assets/b5.png'
import img6 from './assets/b6.png'

const benefits = [
    {
        img: img1,
        title: 'Stay Updated',
        description: 'Learn the latest tech skills demanded by top employers through a cutting-edge curriculum.'
    },
    {
        img: img2,
        title: 'Hands-On Learning',
        description: 'Gain practical experience and confidence through real-world projects.'
    },
    {
        img: img3,
        title: 'Expert Guidance',
        description: 'Receive personalized mentorship and insights from industry experts.'
    },
    {
        img: img4,
        title: 'Mock Technical Interviews',
        description: 'Prepare for success with mock technical interviews, boosting confidence in communication skills and technical know-how.'
    },
    {
        img: img5,
        title: 'Communication Skills Training',
        description: 'Comprehensive communication skills training alongside technical interview preparation to ensure complete readiness.'
    },
    {
        img: img6,
        title: 'Resume Design',
        description: 'Learn how to craft a standout resume that effectively highlights your skills and experience.'
    }
];

const Benefits = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10 max-sm:py-5'>
                <div className='w-[90%]'>
                    <h2 className='text-[#175574] text-[30px] max-md:text-[20px]'><span className='text-[#D79442] font-bold'>|</span> Benefits</h2>
                    <h3 className='text-[#062B43] text-[41px] max-md:text-[30px] max-sm:text-[26px] max-sm:mb-4 font-bold'>Placement Benefits</h3>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-4'>
                        {benefits.map((benefit, index) => (
                            <div key={index} className='flex flex-col items-start p-4 max-sm:p-0'>
                                <Image src={benefit.img} alt={benefit.title} className='w-[80px] max-md:w-[60px]' />
                                <h2 className='text-[#175574] text-[20px] max-xl:text-[18px] max-md:text-[16px] leading-6'>
                                    <span className='text-[24px] max-xl:text-[22px] max-md:text-[20px] font-semibold '>{benefit.title}</span><br />
                                    {benefit.description}
                                </h2>
                            </div>
                        ))}
                    </div>
                    {/* <div className='w-full flex justify-center py-5'>
                        <button className='text-[#fff] text-2xl max-md:text-[16px] bg-[#D79442] px-8 py-4 max-md:px-4 max-md:py-1 rounded-[40px]'>Explore more</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Benefits
