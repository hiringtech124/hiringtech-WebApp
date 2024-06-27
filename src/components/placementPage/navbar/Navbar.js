"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/logoht.png'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
    let [open, setOpen] = useState(false);
    return (
        <>

            <div className='h-[100px] backdrop-blur-xl bg-white/30 max-sm:h-[50px] fixed z-50 w-full w-full bg-[#fff] flex justify-between gap-20 px-[80px] max-lg:px-[40px] pt-[40px] pb-[30px] max-md:px-[0px] max-md:justify-center max-sm:items-center'>
                <Link href="/"><Image className='max-xl:w-[120px] max-md:w-[100px] max-sm:w-[80px]' src={logo} alt='logo' /></Link>
                <ul className={`w-full text-[#175574] gap-10 max-xl:gap-7 max-lg:gap-5 justify-end items-center flex max-md:flex-col max-md:justify-center max-md:gap-10 max-md:absolute max-md:bg-black max-md:bg-opacity-95 z-[5] max-md:w-[100%] max-md:h-screen ${open ? 'top-[0%]' : 'top-[-1490px]'}`}>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] font-medium max-sm:font-bold text-center max-sm:mb-5'>Career</li></Link>
                    <Link href="/Menu" onClick={() => setOpen(!open)}><li className='text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] font-bold text-center max-sm:mb-5'>Training</li></Link>
                    <Link href="/ourCafe" onClick={() => setOpen(!open)}><li className='text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] font-medium max-sm:font-bold text-center max-sm:mb-5'>Services</li></Link>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] max-sm:font-bold font-medium text-center max-sm:mb-5'>About Us</li></Link>
                    <Link href="/about" onClick={() => setOpen(!open)}><li className='text-[25px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] max-sm:font-bold font-medium text-center max-sm:mb-5'>Insights</li></Link>
                    <Link href="/contactus" onClick={() => setOpen(!open)}><li className='text-[22px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[20px] max-sm:text-[14px] max-sm:font-bold font-medium text-center text-[#fff] px-[15px] max-lg:px-[10px] py-[5px] max-lg:py-[3px] shadow-custom rounded-3xl bg-[#D79442] transition-transform duration-300 ease-in-out transform hover:translate-y-[-4px] hover:shadow-xl'>Contact-Us</li></Link>
                </ul>
                <div onClick={() => setOpen(!open)} className='block md:hidden absolute right-[5%] z-[6] flex '>
                    {
                        open ? <FaXmark  className='text-[#fff] w-[30px] h-[30px]'/> : <GiHamburgerMenu className='text-[30px] max-sm:text-[25px]'/>
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar