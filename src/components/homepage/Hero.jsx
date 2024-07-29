'use client'
import React from 'react'
import Image from 'next/image'
import herox from './assetss/heron.svg'
// import './style.scss'
import hres from './assetss/heronres.svg'
import hero from './clients/prime.png'
import hero1 from './clients/xebia.png'
import hero2 from './clients/wns.png'
import hero3 from './clients/tm.png'
import hero4 from './clients/tele.png'
import hero5 from './clients/tech.png'
import hero6 from './clients/sep.png'
import hero7 from './clients/pur.png'
import hero8 from './clients/pay.png'
import hero9 from './clients/inc.png'
import hero10 from './clients/gen.png'
import hero11 from './clients/ch.png'

import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Recruitment', 'Consultancy'];

const Hero = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 2 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  const currentText = TEXTS[index % TEXTS.length];
  const textClass = currentText === "Recruitment" ? "text-[#D79442]" : currentText === "Consultancy" ? "text-[#062B43]" : "";

  const images = [
    { img: hero },
    { img: hero1 },
    { img: hero2 },
    { img: hero3 },
    { img: hero4 },
    { img: hero5 },
    { img: hero6 },
    { img: hero7 },
    { img: hero8 },
    { img: hero9 },
    { img: hero10 },
    { img: hero11 },
  ];

  return (
    <>
      <div className='w-full flex flex-col items-center py-10 max-md:py-5 font-serif'>
        <div className='flex justify-between w-[90%] max-md:flex-col'>
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='text-[52px] drop-shadow-xl max-xl:text-[40px] max-lg:text-[32px] max-sm:text-[24px] max-w-6xl max-md:w-full text-[#062B43] font-bold tracking-tight leading-[62px] max-lg:leading-[50px] max-sm:leading-[30px]'>
              Welcome to<br /> Hiring Tech - India&apos;s No. 1<br /> IT{' '}
              <span className={`inline-flex ${textClass}`}>
                <TextTransition springConfig={presets.wobbly}>{currentText}</TextTransition>
              </span> Agency
            </h1>
            <p className='mr-20 max-md:mr-0 text-[24px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[18px] max-sm:text-[14px] font-medium opacity-85 leading-7 max-lg:leading-5 mt-4 max-sm:mt-2 text-[#175574]'>
              At Hiring Tech, we excel in IT consulting and recruitment services, delivering customised IT recruitment solutions that cater specifically to your needs. We provide top-tier tech talent with outstanding career opportunities. Our proficiency in tech & IT hiring allows us to grasp the nuances of the industry, enabling us to provide exceptional service.
            </p>
            <Image src={hres} className='md:hidden w-full' alt='resImg' />
          </div>
          <Image src={herox} className='w-[520px] max-xl:w-[450px] max-lg:w-[320px] max-md:hidden' alt='hero' />
        </div>
        <div className='w-[90%] py-10 max-md:py-5'>
          <h2 className='text-[41px] max-xl:text-[36px] max-lg:text-[30px] max-md:text-[24px] text-[#062B43] font-bold'>Our Trusted Partners</h2>
          <h3 className='text-[#175574] text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] font-medium'>TEAM . CUSTOMERS . COMMUNITY</h3>
          <div className='w-full overflow-hidden'>
            <div className='imageContainer flex justify-evenly gap-10 pt-10 w-full'>
              {images.map((image, index) => (
                <Image key={index} src={image.img} className='w-full h-[50px] max-md:h-[30px]' alt={`client${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
