import React from 'react'
import Image from 'next/image'
import hero from './assetss/he.png'
import hero1 from './assetss/71.png'
// import herok from "./assets/1094546947preview.mp4";
// import herok from "./assets/1097384643preview.mp4";
import herok from './assets/hero.jpg'
import './style.scss'
import paytm from './assetss/paytm.png'
import techno from './assetss/techno.png'
import genp from './assetss/genp.png'
import Link from 'next/link'
import hres from './assetss/home2.png'

const Hero = () => {
  return (
    <>
      <div className='her-container w-full flex justify-center h-[650px] max-lg:h-full'>
        {/* <video
          controls
          preload="none"
          autoPlay
          loop
          muted
          className="hero-video"
        >
          <source src={herok} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='hero- flex  mt-10 max-sm:mt-2 gap-30 h-full w-[90%] max-md:w-[100%] max- mx-auto max-md:flex-col max-md:gap-10 max-md:px-4'>
          <div className='flex flex-col w-[67%] max-sm:w-full mt-[50px]  max-xl:mt-[10px]'>
            <h1 className='text-[41px] max-xl:text-[32px] max-lg:text-[22px] max-sm:text-[19px]  max-w-6xl max-md:w-full text-[#062B43] font-bold tracking-tight leading-[50px] max-lg:leading-[40px] max-sm:leading-[30px]'>
              Welcome to Hiring Tech - <br />India&apos;s No. 1 IT <span className='text-[#D79442]'>Recruitment </span>Agency
            </h1>
            <p className='text-left max-lg:w-full text-[22px] max-xl:text-[18px] max-lg:text-[14px] max-sm:text-[14px] font-medium mx-auto opacity-85 leading-7 max-lg:leading-5 mt-4 max-sm:mt-2 text-[#175574] '>
              Excel in your tech hiring with our expert IT consulting services. Join forces with India's top IT recruitment agency as we specialize in placing the best tech talent in key roles. Choose us for our unmatched expertise and dedication to your success.
            </p>
            {/* <p className="text-white font-medium text-[18px] mt-5">
              By way of us you can achieve what you want.
            </p> */}
            <div className='mt-10 max-sm:mt-6'>
              <Link
                href='/contact'
                className='px-8 py-3 max-lg:px-6 max-sm:px-4 max-sm:py-2 hover:bg[#8AAAE5] text-[20px] max-lg:text-[16px] max-sm:text-[14px] bg-[#D79442] hover:bg-[#CC7914] text-white hover:text-black rounded-3xl  '
              >
                Contact Us
              </Link>
            </div>
            <div className='min-[500px]:hidden w-[100%] flex justify-center mt-5'>
              <Image src={hres} className='' alt='resImg' />
            </div>
            <h3 className='justify-start text-[33px] max-xl:text-[28px] max-lg:text-[22px] max-sm:text-[18px] text-[#175574] text-xl font-medium mt-8 max-sm:mt-0 leading-[51.2px]'>
              <span className='text-[#D79442]'>|</span> We&apos;ve worked with
            </h3>
            <div className='flex gap-10 max-lg:gap-5 mt-5 max-sm:mt-2'>
              <Image src={paytm} width={100} height={30} className='max-lg:w-[80px] max-lg:h-[25px] max-sm:w-[60px] max-sm:h-[20px]' alt='paytm' />
              <Image src={techno} width={100} height={30} className='max-lg:w-[80px] max-lg:h-[25px] max-sm:w-[60px] max-sm:h-[20px]' alt='techno' />
              <Image src={genp} width={100} height={30} className='max-lg:w-[80px] max-lg:h-[25px] max-sm:w-[60px] max-sm:h-[20px]' alt='genp' />
            </div>
          </div>
          <div className='flex justify-center max-md:w-full'>
            <Image src={hero1} className='w-[600px] mb-5 h-[550px] max-xl:w-[500px] max-xl:h-[450px] max-lg:w-[450px] max-lg:h-[400px] max-[499px]:hidden' alt='hero' />
          </div>
        </div>
      </div>

      {/* div. */}
    </>
  )
}

export default Hero
