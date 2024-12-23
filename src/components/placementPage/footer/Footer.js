import React from 'react'
import Image from 'next/image'
import logo from './assets/logoht.png'
import { FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
    return (
        <>
            <div className='w-full flex justify-center text-[#175574] text-[16px] max-lg:text-[14px] h-full'>
                <div className='w-[100%] flex flex-col items-center'>
                    <div className='w-[90%] flex justify-start'>
                        <Image src={logo} className='max-sm:w-[80px]' alt='asjdfksjd' />
                    </div>
                    <div className='w-[80%] max-md:w-[90%] flex justify-between py-[30px]'>
                        <div className='flex gap-10 max-md:flex-wrap mr-[20px]'>
                            {/* <div className='flex flex-col gap-5 max-sm:gap-3'>
                                <h1 className='font-bold text-[25px] max-lg:text-[20px] max-sm:text-[16px]'>Office</h1>
                                <div>
                                    <p>India<br />919 9th floor, Shekhar<br />Central Indore,<br />MP 452001.</p>
                                </div>
                            </div> */}
                            <div className='flex flex-col gap-5 max-sm:gap-3'>
                                <h1 className='font-bold text-[25px] max-lg:text-[20px] max-sm:text-[16px]'>Useful Links</h1>
                                <ul className='flex flex-col gap-2'>
                                    <Link href="/aboutus"><li>About Us</li></Link>
                                    <Link href="/services"><li>Services</li></Link>
                                    <Link href="/expert"><li>Industry Expert</li></Link>
                                    <Link href="/blog"><li>Blogs</li></Link>
                                    <Link href="/Industries"><li>Industries</li></Link>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-5 max-sm:gap-3'>
                                <h1 className='font-bold text-[25px] max-lg:text-[20px] max-sm:text-[16px]'>Services</h1>
                                <ul className='flex flex-col gap-2'>
                                    <Link href="/training"><li>Our Solutions</li></Link>
                                    <Link href="/career"><li>Job Seekers</li></Link>
                                    <Link href="/contact"><li>Lets&apos;s Talk</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-[25px] max-lg:text-[20px] max-sm:text-[16px]'>For Employers</h1>
                                <p>+91 877-0161528</p>
                                <p>hr@hiringtech.in</p>
                                <p>business@hiringtech.in</p>
                                <p>info@hiringtech.in</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-[25px] max-lg:text-[20px] max-sm:text-[16px]'>For Employees</h1>
                                <p>+91 877-0161528</p>
                                <p>priyanka@hiringtech.in</p>
                                <p>career@hiringtech.in</p>
                                <p>Sales@hiringtech.in</p>
                            </div>
                            <div className='flex sm:hidden max-md:flex-col max-md:items-center  items-center gap-8'>
                                <h1 className='w-[100px] max-md:w-full'>Follow us on</h1>
                                <ul className='flex max-md:grid max-md:grid-cols-2 gap-5'>
                                    <Link href="https://www.linkedin.com/company/hiring-tech/"><FaLinkedin className='text-[30px]' /></Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61557941408731"><CiFacebook className='text-[30px]' /></Link>
                                    <Link href="https://www.instagram.com/hiring_tech_recruitment/"><CiInstagram className='text-[30px]' /></Link>
                                    <Link href="https://twitter.com/HiringTech1"><FaSquareXTwitter className='text-[30px]' /></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-[15px] max-xl:text-[13px] w-[90%] font-bold'>
                        <hr className="border-t-2 border-[#175574]"></hr>
                        <div className='flex justify-between items-center py-[20px]'>
                            <div className='flex max-xl:flex-col gap-2 mr-[15px]'>
                                <h1 className='max-sm:w-full'>Copyright © 2020 Hiring Tech, All rights reserved</h1>
                                <ul className='flex max-md:flex-col gap-10 max-xl:gap-5'>
                                    <Link href="/privacy-policy"><li><span className='border-l-4 border-[#175574] border-solid pr-[20px]'></span>Privacy Policy</li></Link>
                                    {/* <Link href="/"><li>Terms & Conditions</li></Link>
                                    <Link href="/"><li>Site Map</li></Link> */}
                                </ul>
                            </div>
                            <div className='flex max-md:flex-col max-sm:hidden max-md:items-center  items-center gap-8'>
                                <h1 className='w-[100px] max-md:w-full'>Follow us on</h1>
                                <ul className='flex max-md:grid max-md:grid-cols-2 gap-5'>
                                    <Link target='_blank' href="https://www.linkedin.com/company/hiring-tech/"><FaLinkedin className='text-[30px]' /></Link>
                                    <Link target='_blank' href="https://www.facebook.com/profile.php?id=61557941408731"><CiFacebook className='text-[30px]' /></Link>
                                    <Link target='_blank' href="https://www.instagram.com/hiring_tech_recruitment/"><CiInstagram className='text-[30px]' /></Link>
                                    <Link target='_blank' href="https://twitter.com/HiringTech1"><FaSquareXTwitter className='text-[30px]' /></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer