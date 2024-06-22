import Image from 'next/image'
import React from 'react'
// Image
import img from './assets/Group 112.png'
import img2 from './assets/Group 115.png'
import img3 from './assetss/1.png'
import img4 from './assetss/2.png'
import visres from './assetss/visres.png'

import './style.scss'
const Vision2 = () => {
  return (
    <>

      <div className='max-sm:hidden bg[#20AFED] font-serif px-2 flex flex-col self-center p10 pb-20 mt28 w-full mx-auto backdrop-blur-[110.60px] visin-bg'>
        <div className='w-[80%] mx-auto'>
          <div className='flex flex-col self-end max-w-full'>
            <div className='flex justify-between items-center'>
              <div className='w-[60%] pt-6'>
                <div className='flex z-10 flex-col items-start px-5 max-md:px-0 pt-1 pb-6 mb-0'>
                  <Image
                    loading='lazy'
                    src={img3}
                    alt='k'
                    className='w-full aspect[1.06] max-xl:w-[90%]'
                  />
                </div>
              </div>
              <div className='flex z-10  flex-col mt-0  w-[40%] max-lg:w-[60%] max-md:w-[70%] max-md:mt-0'>
                <h1 className='text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[25px] text-end font-bold text-[#062B43] leading-[51.2px]'>
                  Our Vision
                </h1>
                <div className='mt-2 pb-2 text-[27px] max-lg:leading-6 max-xl:text-[24px] max-lg:text-[20px] max-md:text-[16px] text-end tracking-tight text-[#175574]'>
                  Our vision is to empower individuals
                  worldwide through accessible
                  and innovative learning solutions.
                </div>
              </div>
            </div>

            <div className='translate-y-[-18%]'>
              <div className='flex justify-center items-center '>
                <div className='w-[50%] max-md:w-full'>
                  <h1 className='self-start text-start mt-16 text-[41px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[25px] font-bold text-[#062B43]  leading-[51.2px] '>
                    Our Mission
                  </h1>
                  <div className='self-start w-[90%] mt-0 mb-2.5 text-[27px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[16px] tracking-tight text-start text-[#175574] max-sm:text-[20px]'>
                    Our mission is to be the leading provider of transformative
                    education
                    and talent acquisition solutions.
                  </div>
                </div>

                <Image
                  loading='lazy'
                  src={img4}
                  alt='k'
                  className='w-[50%] max-lg:w-[45%]'
                />
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='sm:hidden flex flex-col items-center'>
        <div className='w-[100%] flex justify-center'>
          <Image src={visres} alt='res' className='w-[80%]' />
        </div>
        <div className='flex justify-center mt-10'>
          <div className='flex w-[80%]'>
            <div className=' max-md:w-full'>
              <h1 className='self-start text-start text-[20px]  font-bold text-[#062B43]  leading-[51.2px] '>
                Our Mission
              </h1>
              <div className='self-start w-[90%] mt-0 text-[14px] leading-5  tracking-tight text-start text-[#175574] '>
                Our mission is to be the leading provider of transformative
                education
                and talent acquisition solutions.
              </div>
            </div>

            <Image
              loading='lazy'
              src={img4}
              alt='k'
              className='w-[50%]'
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Vision2
