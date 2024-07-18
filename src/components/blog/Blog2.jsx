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
import img9 from './assets/nativecard.svg'

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
    },
    {
      href: '/blog/react-native',
      imgClass: img9,
      title: 'Kickstart Your Mobile App Development',
      description: "A Beginner's Guide to React Native",
      date: '18/07/2024',
      name: 'Rahul'
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
