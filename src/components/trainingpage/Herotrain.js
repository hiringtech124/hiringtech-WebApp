import React from 'react'
import Image from 'next/image'
import img from './trainhero.png'
const Herotrain = () => {
    return (
        <>
            <div className='w-full flex justify-center py-5 font-serif'>
                <div className='w-[90%] relative'>
                    <Image src={img} alt='hero-image' className='w-full h-[650px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[200px]' />
                    <div className='text-[#fff] absolute top-0 left-0 ml-10 max-lg:ml-5 mt-10 max-lg:mt-5'>
                        <h4 className='text-[33px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[16px] '><span className='text-[#D79442] mr-5 max-md:mr-2 font-bold'>|</span>Trainings</h4>
                        <h1 className='text-[41px] max-xl:text-[32px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] font-bold'>Transform Your Career with<br /> Industry-Leading IT Training Courses</h1>
                    </div>
                    <div className='text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] max-xl:leading-6 max-lg:leading-5 max-md:leading-4 max-sm:leading-5 max-sm:mt-5 w-[55%] max-sm:w-full sm:text-[#fff] font-medium text-justify tracking-light sm:absolute bottom-0 right-0 mb-[8%] mr-10'>
                        Unlock your potential with our comprehensive IT Training Courses. As a leading software training institute, we offer Information Technology Certification, IT Support Training, and IT Skills Development programs. Our specialized courses in HR, Digital Marketing, React JS, and React Native are designed for your IT Career Development, all delivered online.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herotrain