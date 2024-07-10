// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'

// import Emailsub from './Emailsub'



// import './blog.scss'
// const Blog2 = () => {


//   return (
//     <>
//       <div className='w-full flex justify-center'>
//         <div className='w-[90%] h-full bakg '>
//           <h4 className='text-[22px] font-medium text-[#175574] mt-[20px]'>
//             GET THE LATEST
//           </h4>
//           <h2 className='font-bold text-[41px] text-[#062B43] tracking-tight  max-md:mt-[20px] max-sm:mt-[10px] max-lg:text-[55px] max-md:text-[40px] max-sm:text-[30px] '>
//             What&apos;s hot right now?
//           </h2>
//           <div className='blog-g w-full'>
//             <div
//               className='w-full flex flex-wrap  gap-[15px]  max-lg:gap-y-[50px] justify-center items-center mx-auto
//               max-md:gap-y-[20px] ml[90px] max-xl:ml-[50px] max-sm:ml-[0px] py-[10px] max-md:pt-[50px]  max-sm:flex max-sm:flex-col max-sm:items-center '
//             >
//               <Link href='/blog/Unveiling-the-Digital-Symphony'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-full max-md:h-full max-sm:w-[380px] max-sm:h-[550px] p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 01</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Unveiling the Digital Symphony
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Website Design and Digital Marketing as the Art of Brand
//                       Orchestration.
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//               <Link href='/blog/Exploring-the-Frontiers-of-Quantum-Computing'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn2'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 02</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Future
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Exploring the Frontiers of Quantum Computing
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//               <Link href='/blog/Blockchain-Beyond-Crypto'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn3'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 03</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Blockchain Beyond Crypto
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Exploring the Uncharted Territories .
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>

//               <Link href='/blog/Tech-chronicles'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn6'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0'>
//                     <span className='text-[50px]'> 04</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Tech Chronicles: Exploring the Digital Frontier
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Let's set sail on this adventure and discover the wonders
//                       that await us in the digital landscape.
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//               <Link href='/blog/Tech-Odyssey'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn5'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 05</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Tech Odyssey
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Let's embark on this adventure together and discover the
//                       wonders of the digital world.
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//               <Link href='/blog/Digital-Frontiers'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn4'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 06</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Digital Frontiers
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Join us as we explore the latest trends, emerging
//                       technologies, and groundbreaking ideas that are shaping the
//                       future of our digital world
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//               <Link href='/blog/unlocking-success'>
//                 <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
//                   <div className='blog-imgn7'></div>
//                   <div className='absolute bottom-0 text-left p-4 left-0 '>
//                     <span className='text-[50px]'> 07</span>
//                     <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
//                       Unlocking Success
//                     </h3>
//                     <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
//                       Navigating today&apos;s job market, especially in IT and tech, can be challenging.
//                     </p>
//                     <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
//                       Read more
//                     </h4>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>


//           <Emailsub />

//         </div>
//       </div>
//     </>
//   )
// }

// export default Blog2


'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from './assets/16.png'
import img2 from './assets/17.png'
import img3 from './assets/18.png'
import img4 from './assets/19.png'
import img5 from './assets/20.png'
import img6 from './assets/21.png'
import img7 from './assets/7adv.png'
import img8 from './assets/reactcard.svg'

const Blog2 = () => {

  const blogPosts = [
    {
      href: '/blog/Unveiling-the-Digital-Symphony',
      imgClass: img1,
      title: 'Unveiling the Digital Symphony',
      description: 'Website Design and Digital Marketing as the Art of Brand Orchestration.',
      date: '10/04/2023',
      name: 'Aditi'
    },
    {
      href: '/blog/Exploring-the-Frontiers-of-Quantum-Computing',
      imgClass: img2,
      title: 'Future',
      description: 'Exploring the Frontiers of Quantum Computing',
      date: '25/07/2023',
      name: 'Sumit'
    },
    {
      href: '/blog/Blockchain-Beyond-Crypto',
      imgClass: img3,
      title: 'Blockchain Beyond Crypto',
      description: 'Exploring the Uncharted Territories .',
      date: '15/09/2023',
      name: 'Lavesh'
    },
    {
      href: '/blog/Tech-chronicles',
      imgClass: img4,
      title: 'Tech Chronicles: Exploring the Digital Frontier',
      description: 'Let\'s set sail on this adventure and discover the wonders that await us in the digital landscape.',
      date: '06/12/2023',
      name: 'Aman'
    },
    {
      href: '/blog/Tech-Odyssey',
      imgClass: img5,
      title: 'Tech Odyssey',
      description: 'Let\'s embark on this adventure together and discover the wonders of the digital world.',
      date: '09/02/2024',
      name: 'Vijay'
    },
    {
      href: '/blog/Digital-Frontiers',
      imgClass: img6,
      title: 'Digital Frontiers',
      description: 'Join us as we explore the latest trends, emerging technologies, and groundbreaking ideas that are shaping the future of our digital world',
      date: '06/05/2024',
      name: 'Aditya'
    },
    {
      href: '/blog/unlocking-success',
      imgClass: img7,
      title: 'Unlocking Success',
      description: 'Navigating today\'s job market, especially in IT and tech, can be challenging.',
      date: '27/06/2024',
      name: 'Faizan'
    },
    {
      href: '/blog/ReactJs-reasons',
      imgClass: img8,
      title: 'Is ReactJS Worth Learning?',
      description: 'One such technology that has gained immense popularity over the years is ReactJS.',
      date: '08/07/2024',
      name: 'Kavita'
    }
  ];

  return (
    <>
      <div className='w-full flex justify-center py-10 max-sm:py-5'>
        <div className='w-[90%] h-full bakg '>
          <h4 className='text-[22px] max-sm:text-[20px] font-medium text-[#175574] '>
            GET THE LATEST
          </h4>
          <h2 className='font-bold text-[41px] text-[#062B43] tracking-tight  max-xl:text-[35px] max-md:text-[28px] max-sm:text-[24px] '>
            What&apos;s hot right now?
          </h2>
          <div className='blog-g w-full'>
            <div
              className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-10 max-sm:pt-5 justify-center mx-auto'
            >
              {blogPosts.reverse().map((post, index) => (
                <Link key={index} href={post.href}>
                  <div className={`relative text-white`}>
                    <Image src={post.imgClass} className={`rounded-2xl w-full`} />
                    <div className='absolute bottom-0 flex flex-col gap-5 max-xl:gap-1 text-left p-4 left-0 '>
                      <h3 className='font-bold text-[20px] max-xl:text-[18px] max-sm:text-[16px] tracking-tight '>
                        {post.title}
                      </h3>
                      <p className='font-medium text-[18px] max-xl:text-[16px] max-sm:text-[14px] pr-5 tracking-tight'>
                        {post.description}
                      </p>
                      <div>
                        <h4 className='font-medium'>{post.name}</h4>
                        <h4>{post.date}</h4>
                        <h4 className='font-bold text-[16px] max-xl:text-[14px] max-sm:text-[12px] tracking-tight'>
                          Read more
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* <Emailsub /> */}

        </div>
      </div>
    </>
  )
}

export default Blog2
