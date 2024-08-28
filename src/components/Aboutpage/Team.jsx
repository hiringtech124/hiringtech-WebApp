// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import devesh from './team/dev.png'
// import shruti from './team/shr.png'
// import dev from './team/kl.png'
// import sudh from './team/sud.png'
// import faiz from './team/fai.png'
// import abhii from './team/abhi.png'
// import jat from './team/jat.png'
// import lavesh from './team/lavesh.png'
// import sumit from './team/Sumit.png'
// import lokesh from './team/Lokesh.png'

// import './about.scss'

// const Team = () => {
//   return (
//     <>
//       <section className='mb-28 pt-20 max-w-[1240px] mx-auto'>
//         <h2 className='text-4xl font-bold mb-10 text-[#062b43]'>
//           Meet Our Team
//         </h2>
//         <div className='flex gap-10 max-md:gap-0 flex-wrap justify-center items-center max-md:justify-center max-md:items-center '>
//           <div className='bg-white rounded-lg group shadow-md p-2 max-w-[300px] max-md:max-w-[200px]'>
//             <Image src={lavesh} width={300} height={300} alt='hero' />
//             <div className='flex justify-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Lavesh Jain
//                 </h3>
//                 <p className='text-gray-700 font-medium'>
//                   CEO and Director
//                 </p>
//                 <p className='text-gray-700 font-medium text-[14px] leading-4'>At the pinnacle of corporate mastery, our CEO and Director of Hiring Technology unite leadership with cutting-edge tech for unparalleled success.</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/lavesh-jain-7a2174173/'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={abhii} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Abhidutt Sharma
//                 </h3>
//                 <p className='text-gray-700 font-medium'>Lead Instructor</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='http://linkedin.com/in/abhidatt-sharma'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={devesh} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Devesh Kumar
//                 </h3>
//                 <p className='text-gray-700 font-medium'>Senior Manager</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/devesh-kumar-shukla-ba98ba245'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={shruti} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Shruti Dixit
//                 </h3>
//                 <p className='text-gray-700 font-medium'>Talent Acquisition</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='http://www.linkedin.com/in/shruti-dixit-23b1021b7'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>



//           <div className='bg-white rounded-lg group shadow-md p-2 max-w-[300px] max-md:max-w-[200px]'>
//             <Image src={dev} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Devayani Deshmukh
//                 </h3>
//                 <p className='text-gray-700 font-medium'>UI/UX Specialist</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='http://linkedin.com/in/devayani-deshmukh-a29451297'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>


//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px]  group'>
//             <Image src={sudh} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Sudhanshu Gupta
//                 </h3>
//                 <p className='text-gray-700 font-medium'>
//                   React Native Developer
//                 </p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/sudhanshu-gupta-0b2787216'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={faiz} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Faizan Hussain
//                 </h3>
//                 <p className='text-gray-700 font-medium'> Front End Developer </p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/faizan-husain'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={lokesh} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Lokesh Agrawal
//                 </h3>
//                 <p className='text-gray-700 font-medium'>Application Developer</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/lokesh-kumar-768a5a22b/'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={sumit} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Sumit Rai
//                 </h3>
//                 <p className='text-gray-700 font-medium'>Front End Intern</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/sumit-rai-64358321b/'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>

//           <div className='bg-white rounded-lg shadow-md p-2 max-w-[300px] max-md:max-w-[200px] group'>
//             <Image src={jat} width={300} height={300} alt='hero' />
//             <div className='flex justify-center items-center relative'>
//               <div>
//                 <h3 className='text-[20px] text-[#175574] font-bold my-2'>
//                   Jatin Kumar
//                 </h3>
//                 <p className='text-gray-700 font-medium'>UI/UX Design Intern</p>
//               </div>

//               <Link
//                 target='_blanck'
//                 href='https://www.linkedin.com/in/jatinkumar05'
//                 className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
//               >
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   x='0px'
//                   y='0px'
//                   width='30'
//                   height='30'
//                   viewBox='0 0 50 50'
//                   fill='#175574'
//                 >
//                   <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Team
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import devesh from './team/dev.png'
import shruti from './team/shr.png'
import dev from './team/kl.png'
import sudh from './team/sud.png'
import faiz from './team/fai.png'
import abhii from './team/abhi.png'
import jat from './team/jat.png'
import lavesh from './team/lavesh.png'
import sumit from './team/Sumit.png'
import poonam from './team/poonam1.svg'
import Ayushi from './team/Ayushi.svg'
import Priya from './team/Priya.svg'
import siddhi from './team/siddhi.svg'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// import './about.scss'

const Team = () => {
  const [showDescription, setShowDescription] = useState(false);

  const teamMembers = [
    {
      img: lavesh,
      name: 'Lavesh Jain',
      title: 'CEO and Director',
      description: 'At the pinnacle of corporate mastery, our CEO and Director of Hiring Technology unite leadership with cutting-edge tech for unparalleled success.',
      linkedin: 'https://www.linkedin.com/in/lavesh-jain-7a2174173/'
    },
    {
      img: abhii,
      name: 'Abhidutt Sharma',
      title: 'Lead Instructor',
      linkedin: 'http://linkedin.com/in/abhidatt-sharma'
    },
    {
      img: devesh,
      name: 'Devesh Kumar',
      title: 'Senior Manager',
      linkedin: 'https://www.linkedin.com/in/devesh-kumar-shukla-ba98ba245'
    },
    {
      img: shruti,
      name: 'Shruti Dixit',
      title: 'Talent Acquisition',
      linkedin: 'http://www.linkedin.com/in/shruti-dixit-23b1021b7'
    },
    {
      img: dev,
      name: 'Devayani Deshmukh',
      title: 'UI/UX Specialist',
      linkedin: 'http://linkedin.com/in/devayani-deshmukh-a29451297'
    },
    {
      img: siddhi,
      name: 'Siddhi Lad',
      title: 'UI/UX Designer',
      linkedin: 'https://www.linkedin.com/in/siddhi-lad-130600-'
    },
    {
      img: sudh,
      name: 'Sudhanshu Gupta',
      title: 'React Native Developer',
      linkedin: 'https://www.linkedin.com/in/sudhanshu-gupta-0b2787216'
    },
    {
      img: faiz,
      name: 'Faizan Hussain',
      title: 'Front End Developer',
      linkedin: 'https://www.linkedin.com/in/faizan-husain'
    },
    {
      img: poonam,
      name: 'Poonam Sengar',
      title: 'Application Developer',
      linkedin: 'https://www.linkedin.com/in/poonam-sengar-048b5718b'
    },
    {
      img: sumit,
      name: 'Sumit Rai',
      title: 'Front End Intern',
      linkedin: 'https://www.linkedin.com/in/sumit-rai-64358321b/'
    },
  ]

  return (
    <>
      <div className='flex justify-center w-full'>
        <section className='mb-20 max-sm:mb-10 max-sm:pt-5 pt-10 w-[90%] mx-auto'>
          <h2 className='text-[41px] max-xl:text-[30px] max-md:text-[24px] font-bold mb-10 text-[#062b43]'>
            Meet Our Team
          </h2>
          <div className='flex gap-10 max-sm:gap-5 flex-wrap justify-center items-center'>
            {teamMembers.map((member, index) => (
              <div key={index} className='w-[350px] max-sm:w-[250px] group p-2'>
                <Image src={member.img} width={300} height={300} className='max-sm:w-[200px]' alt={member.name} />
                <div className='flex justify-center relative'>
                  <div>
                    <h3 className='text-[20px] text-[#175574] text-center font-bold my-2'>
                      {member.name}
                    </h3>
                    <p className='text-gray-700 font-medium'>{member.title}</p>
                    {/* {member.name === 'Lavesh Jain' && (
                      <>
                        <button onClick={() => setShowDescription(!showDescription)} className='mt-2  text-gray-700 font-medium'>
                          {showDescription ? <IoIosArrowUp className='text-[30px]' /> : <IoIosArrowDown className='text-[30px]' />}
                        </button>
                        {showDescription && (
                          <p className='text-gray-700 font-medium text-[14px] leading-4'>{member.description}</p>
                        )}
                      </>
                    )}
                    {member.name !== 'Lavesh Jain' && member.description && (
                      <p className='text-gray-700 font-medium text-[14px] leading-4'>{member.description}</p>
                    )} */}
                  </div>
                  <Link
                    target='_blank'
                    href={member.linkedin}
                    className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 50 50'
                      fill='#175574'
                    >
                      <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Team

