import React from 'react'
import Image from 'next/image'
import img1 from './assets/t1.png'
import img2 from './assets/t2.png'
import img3 from './assets/t3.png'
import img4 from './assets/t4.png'
import img5 from './assets/t5.png'
import img6 from './assets/t6.png'
import img7 from './assets/t7.png'
import img8 from './assets/t8.png'
import img9 from './assets/t9.png'

const technologies = [
    { img: img1, title: 'Mern Stack Developer' },
    { img: img2, title: 'UI/UX Developer' },
    { img: img3, title: 'Android Developer' },
    { img: img4, title: 'HTML/CSS Developer' },
    { img: img5, title: 'Node JS Developer' },
    { img: img6, title: 'ReactJs Developer' },
    { img: img7, title: 'IOS Developer' },
    { img: img8, title: 'MongoDb' },
    { img: img9, title: 'Firebase' }
];

const Technologiesf = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-10'>
                <div className='w-[90%]'>
                    <h2 className='text-[#175574] text-[30px] max-md:text-[20px]'><span className='text-[#D79442] font-bold'>|</span> Technologies</h2>
                    <h3 className='text-[#062B43] text-[41px] max-md:text-[30px] max-sm:text-[24px] max-sm:mb-4 font-bold'>Technology we serve</h3>
                    <p className='text-[#175574] font-medium text-[22px] max-sm:text-[14px] max-lg:text-[18px]'>At Hiring Tech, we specialize in a wide range of technologies to meet the diverse needs of the IT industry:</p>
                    <div className='grid grid-cols-3 max-md:grid-cols-2 pt-10 gap-10 max-sm:gap-4'>
                        {technologies.map((tech, index) => (
                            <div key={index} className='flex p-4 gap-5 max-md:gap-2 max-md:p-2 self-center items-center bg-[#fff] rounded-xl max-sm:rounded-lg shadow-2xl max-sm:shadow-xl'>
                                <Image src={tech.img} alt={tech.title} className='w-[80px] max-xl:w-[60px] max-md:w-[30px]' />
                                <h2 className='text-[#175574] text-[20px] max-xl:text-[16px] max-md:text-[14px] font-semibold'>{tech.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologiesf
