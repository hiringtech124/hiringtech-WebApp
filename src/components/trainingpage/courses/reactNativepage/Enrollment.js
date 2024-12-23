import React from 'react'
import Image from 'next/image'
import img from './assets/enroll1.png'
const Enrollment = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex max-md:flex-col-reverse max-md:gap-10 items-center justify-between'>
                    <h2 className='text-[#175574] w-[70%] max-md:w-[100%] text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px]'><span className='font-bold text-[30px] max-xl:text-[25px] max-lg:text-[22px] max-md:text-[20px]'>Enroll Today!</span><br /><br />
                        <span>Take the first step towards a rewarding career in mobile app development by enrolling in our REACT NATIVE ONLINE TRAINING COURSES at Hiring Tech. Whether you're a beginner looking to break into the tech industry or an experienced developer seeking to enhance your skills, our courses provide the perfect opportunity to achieve your goals.</span><br /><br />
                        <span>Join thousands of satisfied learners who have successfully transitioned into high-paying roles in the tech industry. With our 100% placement guarantee, expert instructors, and comprehensive curriculum, you'll be well-equipped to excel in your career.</span><br /><br />
                        <span className='font-bold'>Start your journey today and become a proficient React Native developer with Hiring Tech's React Native Training Course!</span>
                    </h2>
                    <Image src={img} className='my-auto' alt='kjdfksdbj' />
                </div>
            </div>
        </>
    )
}

export default Enrollment