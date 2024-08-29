
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import devesh from './team/dev.png'
import shruti from './team/shr.png'
import dev from './team/kl.png'
import sudh from './team/sud.png'
import faiz from './team/fai.png'
import abhii from './team/abhi.png'
import lavesh from './team/lavesh.png'
import sumit from './team/Sumit.png'
import poonam from './team/poonam.png'
import sidhant from './team/sidhant.png'
import junaid from './team/junaid.png'
import siddhi from './team/siddhi.png'


// import './about.scss'

const Team = () => {

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
      img: junaid,
      name: 'Junaid Shaikh',
      title: 'UI/UX Designer Intern',
      linkedin: 'https://www.linkedin.com/in/junaid-shaikh-b6a75b192/'
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
      title: 'Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/faizan-husain'
    },
    {
      img: sidhant,
      name: 'Siddhant Deo',
      title: 'Full Stack Developer Intern',
      linkedin: 'https://www.linkedin.com/in/sidhant-deo-568574118/'
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

