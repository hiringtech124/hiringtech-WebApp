import Image from 'next/image'
import React from 'react'
import image from './asstes/miso.png'
import img1 from './asstes/ab1.png'
import img2 from './asstes/ab2.png'
import img3 from './asstes/ab3.png'

const Stream = () => {
  return (
    // <>
    //   <div className='min-h-screen pt-10'>
    //     <div className='max-w-[1240px] mx-auto'>
    //       <div className='flex flex-wrap gap-8 px-4'>
    //         <div className='mb-5 mt-10 w-full'>
    //           <h2 className='text-[#062B43] text-[55px] font-bold leading-[51.2px] sm:text-[40px]'>
    //             Streamlined IT Solutions
    //           </h2>
    //         </div>
    //         <div className='flex flex-col w-full'>
    //           <div className='border-[#D79442] border-3 mt-5 w-full p-3 bg-[#abe1f8b0] rounded-2xl'>
    //             <div className='flex gap-4'>
    //               <div className='w-14 h-14'>
    //                 <svg
    //                   xmlns='http://www.w3.org/2000/svg'
    //                   width='57'
    //                   height='53'
    //                   viewBox='0 0 57 53'
    //                   fill='none'
    //                 >
    //                   <g className='mix-blend-multiply'>
    //                     <rect
    //                       width='56.3891'
    //                       height='52.7426'
    //                       rx='10'
    //                       transform='matrix(-1 0 0 1 57 0.078125)'
    //                       fill='#ABE1F8'
    //                     />
    //                   </g>
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(0.880781 0.473384 -0.448173 0.893877 45.1963 24.8887)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(0.880927 0.473095 -0.448454 0.893726 47.3115 27.9197)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(0.88113 0.472691 -0.448836 0.893521 49.4248 30.9506)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(-0.880782 -0.473384 -0.448173 0.893877 20.8457 11.7358)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(-0.880927 -0.473095 -0.448454 0.893726 17.2432 11.6799)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(-0.88113 -0.472691 -0.448836 0.893522 13.6406 11.6241)'
    //                     fill='#0684C1'
    //                   />
    //                 </svg>
    //               </div>

    //               <h2 className='text-[28px] text-[#036A9D] font-bold'>
    //                 Comprehensive IT Consultancy Services:
    //               </h2>
    //             </div>

    //             <div className='mt-5'>
    //               <p className='text-[26px] text-[#175574]'>
    //                 Hiring Tech IT Services offers advanced IT consultancy
    //                 services catering to both IT and Non-IT industries across
    //                 India. Our expertise covers a wide range of solutions
    //                 tailored to meet specific industry needs.
    //               </p>
    //             </div>
    //           </div>
    //           <div className='border-[#D79442] border-3 mt-10 w-full p-3 bg-[#abe1f8b0] rounded-2xl'>
    //             <div className='flex gap-4'>
    //               <div className='w-14 h-14'>
    //                 <svg
    //                   xmlns='http://www.w3.org/2000/svg'
    //                   width='57'
    //                   height='53'
    //                   viewBox='0 0 57 53'
    //                   fill='none'
    //                 >
    //                   <g className='mix-blend-multiply'>
    //                     <rect
    //                       width='56.3891'
    //                       height='52.7426'
    //                       rx='10'
    //                       transform='matrix(-1 0 0 1 57 0.078125)'
    //                       fill='#ABE1F8'
    //                     />
    //                   </g>
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(0.880781 0.473384 -0.448173 0.893877 45.1963 24.8887)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(0.880927 0.473095 -0.448454 0.893726 47.3115 27.9197)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(0.88113 0.472691 -0.448836 0.893521 49.4248 30.9506)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(-0.880782 -0.473384 -0.448173 0.893877 20.8457 11.7358)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(-0.880927 -0.473095 -0.448454 0.893726 17.2432 11.6799)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(-0.88113 -0.472691 -0.448836 0.893522 13.6406 11.6241)'
    //                     fill='#0684C1'
    //                   />
    //                 </svg>
    //               </div>

    //               <h2 className='text-[28px] text-[#036A9D] font-bold'>
    //                 Best performances
    //               </h2>
    //             </div>

    //             <div className='mt-5'>
    //               <p className='text-[26px] text-[#175574]'>
    //                 At the core of our mission is the optimization of your time,
    //                 physical vitality, and mental energy, enabling you to
    //                 concentrate more effectively on your objectives and excel in
    //                 your professional endeavors.
    //               </p>
    //             </div>
    //           </div>

    //           <div className='border-[#D79442] border-3 mt-10 w-full p-3 bg-[#abe1f8b0] rounded-2xl'>
    //             <div className='flex gap-4'>
    //               <div className='w-14 h-14'>
    //                 <svg
    //                   xmlns='http://www.w3.org/2000/svg'
    //                   width='57'
    //                   height='53'
    //                   viewBox='0 0 57 53'
    //                   fill='none'
    //                 >
    //                   <g className='mix-blend-multiply'>
    //                     <rect
    //                       width='56.3891'
    //                       height='52.7426'
    //                       rx='10'
    //                       transform='matrix(-1 0 0 1 57 0.078125)'
    //                       fill='#ABE1F8'
    //                     />
    //                   </g>
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(0.880781 0.473384 -0.448173 0.893877 45.1963 24.8887)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(0.880927 0.473095 -0.448454 0.893726 47.3115 27.9197)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(0.88113 0.472691 -0.448836 0.893521 49.4248 30.9506)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38485'
    //                     height='15.0044'
    //                     transform='matrix(-0.880782 -0.473384 -0.448173 0.893877 20.8457 11.7358)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.38765'
    //                     height='11.6785'
    //                     transform='matrix(-0.880927 -0.473095 -0.448454 0.893726 17.2432 11.6799)'
    //                     fill='#0684C1'
    //                   />
    //                   <rect
    //                     width='2.39194'
    //                     height='8.35155'
    //                     transform='matrix(-0.88113 -0.472691 -0.448836 0.893522 13.6406 11.6241)'
    //                     fill='#0684C1'
    //                   />
    //                 </svg>
    //               </div>

    //               <h2 className='text-[28px] text-[#036A9D] font-bold'>
    //                 Save time
    //               </h2>
    //             </div>

    //             <div className='mt-5'>
    //               <p className='text-[26px] text-[#175574]'>
    //                 We take care of the entire process, from meal preparation to
    //                 packaging and doorstep delivery, allowing you to save both
    //                 time and money. This way, you can dedicate more precious
    //                 moments to your loved ones.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className='w-full flex justify-center font-serif py-20 max-sm:py-5'>
        <div className='w-[90%] flex flex-col gap-5'>
          <h2 className='text-[#062B43] text-[55px] max-xl:text-[42px] max-lg:text-[36px] max-md:text-[30px] max-sm:text-[24px] font-bold border-b-4 border-[#D79442]'>Streamlined IT Solutions</h2>
          <div className='flex flex-col gap-10 max-md:gap-5 pt-10'>
            <div className='flex flex-col gap-3 border-2 border-[#D79442] rounded-[40px] p-4'>
              <div className='flex items-center gap-4'>
                <Image src={img1} alt='sdnfld' className='max-md:w-[40px]' />
                <h3 className='text-[#175574] text-[28px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-bold'>Comprehensive IT Consultancy Services:</h3>
              </div>
              <p className='text-[#175574] text-[24px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] font-medium'>Hiring Tech IT Services offers advanced IT consultancy services catering to both IT and Non-IT industries across India. Our expertise covers a wide range of solutions tailored to meet specific industry needs.Hiring Tech IT Services offers advanced IT consultancy services catering to both IT and Non-IT industries across India. Our expertise covers a wide range of solutions tailored to meet specific industry needs.</p>
            </div>
            <div className='flex flex-col gap-3 border-2 border-[#D79442] rounded-[40px] p-4'>
              <div className='flex items-center gap-4'>
                <Image src={img2} alt='sdnfld' className='max-md:w-[40px]' />
                <h3 className='text-[#175574] text-[28px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-bold'>Best performances</h3>
              </div>
              <p className='text-[#175574] text-[24px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] font-medium'>At the core of our mission is the optimization of your time, physical vitality, and mental energy, enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.</p>
            </div>
            <div className='flex flex-col gap-3 border-2 border-[#D79442] rounded-[40px] p-4'>
              <div className='flex items-center gap-4'>
                <Image src={img3} alt='sdnfld' className='max-md:w-[40px]' />
                <h3 className='text-[#175574] text-[28px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-bold'>Save time</h3>
              </div>
              <p className='text-[#175574] text-[24px] max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] font-medium'>We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Stream
