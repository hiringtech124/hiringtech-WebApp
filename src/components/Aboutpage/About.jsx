import React from 'react'

import Image from 'next/image'


import './about.scss'

import imgm from './asstes/23.png'
import res from './asstes/aboutres.png'

import { MdLightbulb } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { AiFillLike } from "react-icons/ai";

const About = () => {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[90%] h-full pt-10 max-md:pt-5 relative'>
        <Image src={imgm} alt='top img' className='w-full max-[850px]:w-[95%] max-md:hidden' />
        <Image src={res} alt='res img' className='w-full md:hidden' />
        <div className=' absolute top-[5%] left-[0%] max-sm:top-[3%] flex flex-col gap-2 max-xl:gap-0'>
          <h3 className='self-start text-left text-[#062B43] text-xl  max-xl:text-[18px] max-sm:text-[16px] font-bold leading-[51.2px] max-sm:leading-7'>
            <span className='text-[#D79442]'>|</span> Our Expertise
          </h3>
          <h1 className='self-start text-[#062B43] text-[41px] max-xl:text-[30px] max-lg:text-[26px] max-sm:text-[22px] max-[350px]:text-[20px] font-bold leading-[51.2px] max-lg:leading-6 max-sm:leading-8'>
            Why choose us?
          </h1>
        </div>
        <div className='max-md:hidden absolute top-[10%] right-[5%] flex flex-col gap-2 max-xl:gap-0'>
          <h3 className='self-start text-[#062B43] text-[25px] max-xl:text-[20px] max-lg:text-[18px]  font-bold leading-[51.2px] text-left'>
            1. Focused Training
          </h3>
          <p className='self-start text-[#175574] text-[18px] max-xl:text-[14px] max-lg:text-[12px] font-normal text-left leading-[20px] max-lg:leading-[15px]'>
            Learn web development <br /> essentials like React.js, JavaScript,<br />
            HTML, and CSS from our experts.
          </p>
        </div>
        <div className='max-md:hidden absolute top-[70%] left-[20%] max-[850px]:left-[17%] flex flex-col gap-2 max-xl:gap-0'>
          <h3 className='self-start text-[#062B43] text-[25px] max-xl:text-[20px] max-lg:text-[18px] font-bold leading-[51.2px] text-left'>
            2. Supportive Guidance
          </h3>
          <p className='self-start text-[#175574] text-[18px] max-xl:text-[14px] max-lg:text-[12px] font-normal text-left leading-[20.2px] max-lg:leading-[15px]'>
            Get valuable feedback and <br />guidance from our instructors to<br />
            overcome challenges and reach <br />your potential.
          </p>
        </div>
        <div className='max-md:hidden absolute top-[70%] right-[0%]'>
          <h3 className='self-start text-[#062B43] text-[25px] max-xl:text-[20px] max-lg:text-[18px] font-bold leading-[51.2px] text-left'>
            3.Hands-On Experience
          </h3>
          <p className='self-start text-[#175574] text-[18px] max-xl:text-[14px] max-lg:text-[12px] font-normal text-left leading-[20.2px] max-lg:leading-[15px]'>
            Gain practical skills through<br /> real-world projects and<br /> exercises.
          </p>
        </div>

        <div className='md:hidden flex gap-5 py-10 max-sm:mt-5 max-sm:py-3'>
          <MdLightbulb className='text-[80px]  text-[#D79442]' />
          <div className=''>
            <h3 className='self-start text-[#062B43] text-[25px] max-sm:text-[20px]   font-bold text-left'>
              1. Focused Training
            </h3>
            <p className='self-start text-[#175574] text-[18px] max-sm:text-[16px] font-normal text-left '>
              Learn web development essentials like React.js, JavaScript,
              HTML, and CSS from our experts.
            </p>
          </div>
        </div>
        <div className='md:hidden flex gap-5 py-10 max-sm:py-3'>
          <SiCodementor className='text-[80px]  text-[#D79442]' />
          <div className=''>
            <h3 className='self-start text-[#062B43] text-[25px] max-sm:text-[20px]   font-bold text-left'>
              2. Supportive Guidance
            </h3>
            <p className='self-start text-[#175574] text-[18px] max-sm:text-[16px] font-normal text-left '>
              Get valuable feedback and guidance from our instructors to
              overcome challenges and reach your potential.
            </p>
          </div>
        </div>
        <div className='md:hidden flex gap-5 py-10 max-sm:py-3'>
          <AiFillLike className='text-[40px]  text-[#D79442]' />
          <div className=''>
            <h3 className='self-start text-[#062B43] text-[25px] max-sm:text-[20px]   font-bold text-left'>
              3.Hands-On Experience
            </h3>
            <p className='self-start text-[#175574] text-[18px] max-sm:text-[16px] font-normal text-left '>
              Gain practical skills through real-world projects and exercises.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
