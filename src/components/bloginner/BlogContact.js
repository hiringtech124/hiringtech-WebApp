import React from 'react'
import Image from 'next/image'
import img1 from './assets/bgc.png'
const BlogContact = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20'>
                <div className='w-[90%] flex justify-between max-md:flex-col max-md:items-center max-md:gap-5'>
                    <Image src={img1} alt='bg img' className='w-[600px] my-auto max-xl:w-[450px] max-lg:w-[350px]' />
                    <div className='w-[40%] max-md:w-[70%] max-sm:w-full flex flex-col gap-5 max-lg:gap-2'>
                        <h2 className='text-[#175574] text-[25px] max-xl:text-[20px] max-lg:text-[16px]'>Register for our email newsletter to get the freshest takes, straight to your inbox.</h2>
                        <div className="flex justify-center items-center">
                            <div className="flex items-center bg-white rounded-full shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 text-[20px] max-xl:text-[16px] max-lg:text-[14px] py-2 px-4 bg-[#ABE0F8]-400 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-[#D79442] text-[20px] max-xl:text-[16px] max-lg:text-[14px] text-white py-2 px-6 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <input
                                id="consentCheckbox"
                                type="checkbox"
                                className=" h-10 w-10 cursor-pointer text-[#D79442] rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="consentCheckbox" className="ml-5 text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px]">
                                I consent to processing of my personal data entered above for the purpose of receiving the newsletter.
                            </label>
                        </div>
                        <p className='text-[#175574] text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>For further details on how your personal data will be processed and how your consent can be managed, refer to the Hiring Tech Privacy Notice.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogContact