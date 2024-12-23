import Image from 'next/image'
import React from 'react'

import img from './assets/Border.svg'
const Whyus = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='whye\s py-10 w-[90%] bgcareer'>
          <div className=' mx-auto flex justify-center items-center gap-20 max-md:gap-5 max-md:flex-wrap'>
            <div className='flex flex-col w-[50%] max-md:w-full'>
              <h2 className='text-[36px] max-md:text-[24px] text-[#062B43] font-bold'>
                Why you Should Join Our Awesome Team
              </h2>
              <p className='text-[14px] text-[#175574] font-semibold'>
                We want to feel like home when you are working & for that we have
                curated a great set of benefits for you.
              </p>
            </div>
            <div className='flex gap-8 items-center justify-center w-[60%] max-md:w-[80%] max-md:grid max-md:grid-cols-2 max-md:gap-x-20'>
              <div className='cardone flex flex-col gap-4 max-md:items-center'>
                {/* <Image src={img} alt="k" /> */}
                <div className='bg-[#FFEEED] p-4  w-[74px]'>
                  <svg
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.8294 27.9255C32.6405 26.7357 31.2513 25.7645 29.7254 25.0566C31.8772 23.3134 33.2499 20.6535 33.2499 17.6706C33.2499 12.4078 28.8609 8.09013 23.598 8.17088C18.4158 8.25162 14.2405 12.4742 14.2405 17.6706C14.2405 20.6535 15.618 23.3134 17.765 25.0566C16.2389 25.764 14.8496 26.7352 13.661 27.9255C11.0675 30.5237 9.59506 33.9531 9.50006 37.6105C9.49879 37.6612 9.50768 37.7116 9.52621 37.7588C9.54474 37.806 9.57253 37.8491 9.60794 37.8854C9.64336 37.9217 9.68568 37.9505 9.73241 37.9702C9.77914 37.9899 9.82934 38 9.88006 38H12.54C12.7443 38 12.9153 37.8385 12.92 37.6343C13.0103 34.8793 14.1265 32.3002 16.0883 30.3432C17.0921 29.3341 18.2862 28.534 19.6013 27.9894C20.9164 27.4447 22.3265 27.1664 23.75 27.1703C26.6427 27.1703 29.3644 28.296 31.4117 30.3432C33.3687 32.3002 34.4849 34.8793 34.5799 37.6343C34.5847 37.8385 34.7556 38 34.9599 38H37.6199C37.6706 38 37.7208 37.9899 37.7675 37.9702C37.8143 37.9505 37.8566 37.9217 37.892 37.8854C37.9274 37.8491 37.9552 37.806 37.9737 37.7588C37.9923 37.7116 38.0011 37.6612 37.9999 37.6105C37.9049 33.9531 36.4324 30.5237 33.8294 27.9255ZM23.75 23.7504C22.1255 23.7504 20.596 23.1187 19.4512 21.9692C18.8768 21.3993 18.423 20.7194 18.1169 19.9703C17.8109 19.2211 17.6589 18.418 17.67 17.6089C17.6843 16.0509 18.3065 14.5452 19.3942 13.429C20.5342 12.2605 22.059 11.6098 23.6882 11.5908C25.2985 11.5765 26.8612 12.2035 28.0107 13.3292C29.1887 14.4834 29.8347 16.0271 29.8347 17.6706C29.8347 19.295 29.2029 20.8198 28.0534 21.9692C27.4895 22.5359 26.8188 22.985 26.0801 23.2908C25.3414 23.5965 24.5494 23.7527 23.75 23.7504ZM11.8513 18.9246C11.8085 18.5113 11.7848 18.0933 11.7848 17.6706C11.7848 16.9154 11.856 16.1791 11.989 15.4619C12.0223 15.2909 11.932 15.1152 11.7753 15.0439C11.1293 14.7542 10.5356 14.3552 10.0226 13.8517C9.41807 13.2656 8.9424 12.5599 8.6259 11.7797C8.30939 10.9995 8.159 10.1619 8.18432 9.32034C8.22707 7.79564 8.83981 6.34693 9.90856 5.25446C11.0818 4.05275 12.6588 3.39726 14.3355 3.41626C15.8508 3.43051 17.3138 4.01475 18.4205 5.05022C18.7957 5.40171 19.1187 5.79119 19.3895 6.20918C19.4845 6.35643 19.6697 6.41818 19.8312 6.36118C20.6672 6.07144 21.5507 5.86719 22.458 5.7722C22.724 5.7437 22.876 5.4587 22.7572 5.22121C21.2135 2.16705 18.0595 0.0581128 14.4115 0.0011145C9.14381 -0.0796331 4.75484 4.23799 4.75484 9.49609C4.75484 12.479 6.12758 15.1389 8.27932 16.8821C6.76883 17.5803 5.37709 18.5446 4.17059 19.751C1.56761 22.3492 0.0951182 25.7786 0.000118778 29.4408C-0.00114901 29.4914 0.00774306 29.5419 0.0262713 29.5891C0.0447995 29.6363 0.0725889 29.6793 0.108002 29.7156C0.143415 29.7519 0.185736 29.7807 0.232469 29.8004C0.279203 29.8201 0.329405 29.8303 0.380116 29.8302H3.04485C3.2491 29.8302 3.4201 29.6687 3.42485 29.4645C3.5151 26.7096 4.63134 24.1304 6.59308 22.1735C7.98957 20.777 9.69956 19.808 11.5663 19.3378C11.7515 19.2903 11.875 19.1146 11.8513 18.9246Z'
                      fill='#001833'
                    />
                  </svg>
                </div>

                <h1 className='text-[16px] text-[#062B43] font-bold'>Team work</h1>
              </div>
              <div className='cardone flex flex-col gap-4 max-md:items-center'>
                <div className='bg-[#F1F7E8] p-4 w-[74px]'>
                  <svg
                    width='38'
                    height='36'
                    viewBox='0 0 38 36'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M38.0002 35.6429H27.1431V0.357178H38.0002V35.6429ZM29.8574 32.9286H35.2859V3.07146H29.8574V32.9286Z'
                      fill='#001833'
                    />
                    <path
                      d='M24.4284 35.6429H13.5713V11.2144H24.4284V35.6429ZM16.2856 32.9286H21.7141V13.9286H16.2856V32.9286Z'
                      fill='#001833'
                    />
                    <path
                      d='M10.8571 35.6429H0V19.3572H10.8571V35.6429ZM2.71429 32.9286H8.14286V22.0715H2.71429V32.9286Z'
                      fill='#001833'
                    />
                  </svg>
                </div>
                <h1 className='text-[16px] text-[#062B43] font-bold'>Upgrate Skills</h1>
              </div>
              <div className='cardone flex flex-col gap-4 max-md:items-center'>
                <div className='bg-[#EFF2F5] p-4 w-[74px]'>
                  <svg
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.2856 12.2144H13.5713V27.1429H16.2856V12.2144Z'
                      fill='#001833'
                    />
                    <path
                      d='M24.4286 12.2144H21.7144V27.1429H24.4286V12.2144Z'
                      fill='#001833'
                    />
                    <path
                      d='M19 9.03243e-07C21.5318 -0.000782084 24.0379 0.5075 26.3693 1.49463C28.7008 2.48176 30.8099 3.92758 32.5714 5.74614V9.03243e-07H35.2857V10.8571H24.4286V8.14285H31.1084C28.5658 5.31925 25.1147 3.47518 21.3542 2.93081C17.5936 2.38644 13.7612 3.17613 10.5223 5.1628C7.28331 7.14946 4.84232 10.2076 3.62307 13.8064C2.40382 17.4052 2.48331 21.3173 3.84774 24.8636C5.21217 28.4099 7.77538 31.3664 11.0924 33.2198C14.4094 35.0733 18.2707 35.7066 22.006 35.0099C25.7413 34.3133 29.1146 32.3305 31.5405 29.406C33.9663 26.4814 35.2914 22.7997 35.2857 19H38C38 22.7578 36.8857 26.4313 34.7979 29.5558C32.7102 32.6804 29.7428 35.1156 26.271 36.5537C22.7992 37.9918 18.9789 38.368 15.2933 37.6349C11.6076 36.9018 8.22217 35.0922 5.56498 32.435C2.90778 29.7778 1.09821 26.3923 0.365088 22.7067C-0.368031 19.0211 0.00823238 15.2008 1.4463 11.729C2.88436 8.25722 5.31964 5.28982 8.44417 3.20208C11.5687 1.11433 15.2422 9.03243e-07 19 9.03243e-07Z'
                      fill='#001833'
                    />
                  </svg>
                </div>
                <h1 className='text-[16px] text-[#062B43] font-bold '>Secured Future</h1>
              </div>
              <div className='cardone flex flex-col gap-4 max-md:justify-center  max-md:items-center'>
                <div className='bg-[#E7F2FF] p-4 w-[90px]'>
                  <svg
                    width='58'
                    height='46'
                    viewBox='0 0 58 46'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.617 21.2903C45.8268 23.0895 46.7389 25.1093 47.2612 27.2716C46.9784 27.2577 46.6912 27.25 46.4 27.25C39.2867 27.25 32.9717 30.6457 29.0019 35.8817C27.2129 33.5161 24.948 31.5341 22.3427 30.0662C19.0674 28.2208 15.3659 27.2507 11.6003 27.25H11.6C11.3088 27.25 11.0216 27.2577 10.7388 27.2716C11.2611 25.1093 12.1732 23.0895 13.383 21.2903L28.4466 27.2692L29 27.4888L29.5534 27.2692L44.617 21.2903ZM29 1.61364L53.9308 11.5L28.9996 21.3865L7.9183 13.0379L5.83508 12.2129L5.8359 12.1935L4.84332 11.8012L4.07512 11.4976L29 1.61364ZM5.8029 12.9711L5.86734 14.4958L7.13527 44.5H4.465L5.79065 13.2598L5.8029 12.9711ZM29 7.125C28.0252 7.125 27.0635 7.31503 26.2894 7.6961C25.6049 8.03305 24.6 8.77902 24.6 10.0625C24.6 11.346 25.6049 12.0919 26.2894 12.4289C27.0635 12.81 28.0252 13 29 13C29.9748 13 30.9365 12.81 31.7106 12.4289C32.3951 12.0919 33.4 11.346 33.4 10.0625C33.4 8.77902 32.3951 8.03305 31.7106 7.6961C30.9365 7.31503 29.9748 7.125 29 7.125Z'
                      stroke='#001833'
                      strokeWidth='3'
                    />
                  </svg>
                </div>
                <h1 className='text-[16px] text-[#062B43] font-bold'>Learning Opportunity</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whyus
