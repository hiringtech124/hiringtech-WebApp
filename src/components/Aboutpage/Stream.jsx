import Image from 'next/image'
import React from 'react'
import image from './asstes/miso.png'
import img1 from './asstes/ab1.png'
import img2 from './asstes/ab2.png'
import img3 from './asstes/ab3.png'

const Stream = () => {
  return (
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
// 'use client';
// import { useEffect, useState } from 'react';

// const Timeline = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//   const [documentHeight, setDocumentHeight] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const handleResize = () => {
//       setWindowHeight(window.innerHeight);
//       setDocumentHeight(document.body.scrollHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const items = [
//     {
//       title: "Comprehensive IT Consultancy Services",
//       description: "Hiring Tech IT Services offers advanced IT consultancy services catering to both IT and Non-IT industries across India. Our expertise covers a wide range of solutions tailored to meet specific industry needs.",
//     },
//     {
//       title: "Best performances",
//       description: "At the core of our mission is the optimization of your time, physical vitality, and mental energy, enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.",
//     },
//     {
//       title: "Save time",
//       description: "We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.",
//     },
//     // Add more items as needed
//   ];

//   const getProgress = (index) => {
//     if (windowHeight === 0 || documentHeight === 0) return 0;
//     const totalHeight = documentHeight - windowHeight;
//     const currentProgress = scrollY / totalHeight;
//     const step = 1 / items.length;
//     return currentProgress > step * index ? 1 : currentProgress > step * (index - 1) ? (currentProgress - step * (index - 1)) / step : 0;
//   };

//   return (
//     <div className="relative w-full flex justify-center mx-auto py-12">
//       <div className="w-[90%]">
//         <h1 className="text-heading-color text-3xl font-bold mb-8">Streamlined IT Solutions</h1>
//         <div className="relative pl-12">
//           <div className="absolute top-0 left-6 w-1 h-full bg-gray-300"></div>
//           <div
//             className="absolute top-0 left-6 w-1 bg-line-color transition-all duration-300"
//             style={{ height: `${getProgress(items.length - 1) * 100}%` }}
//           ></div>
//           {items.map((item, index) => (
//             <div key={index} className={`relative mb-8 pl-8 transition-all duration-300 ${getProgress(index) > 0 ? 'text-blog-text-color' : 'text-gray-400'}`}>
//               <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-line-color"></div>
//               <h2 className="text-xl font-bold">{item.title}</h2>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


