import React from 'react'
import Image from 'next/image'
import laptopboy from './laptopboy.png'
import review from './review.png'
import './train.scss'

const Enjoyable = () => {
    return (
        <section className='w-full h-[590px] bgwhite flex justify-center items-center'>
            <div className='w-[90%] max-w-7xl flex justify-between items-center'>
                <div className='w-1/2'>
                    <h4 className='text-[#062B43] text-sm font-medium mb-2'>Learn smarter . not harder</h4>
                    <h2 className='text-[#062B43] text-3xl font-bold mb-4 leading-tight'>Enjoyable learning<br />experiences await you</h2>
                    <p className='text-[#062B43] text-base mb-8'>You can study wherever and whenever you want easily. We try to make it easier for you to learn and achieve your dreams</p>
                    <div className='flex mb-8'>
                        <div className='mr-8'>
                            <h3 className='text-[#062B43] text-2xl font-bold'>3,000</h3>
                            <p className='text-[#062B43] text-base'>Daily Active Users</p>
                        </div>
                        <div>
                            <h3 className='text-[#062B43] text-2xl font-bold'>85%</h3>
                            <p className='text-[#062B43] text-base'>Courses Enrolment rate</p>
                        </div>
                    </div>
                </div>
                <div className='w-[676px]'>
                    <Image src={laptopboy} width={676} height={457} alt='Laptop Boy' />
                    <div className='mt-4'>
                        <Image src={review} width={222} height={40} alt='Review' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enjoyable