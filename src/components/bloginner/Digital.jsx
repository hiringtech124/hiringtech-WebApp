import React from 'react'
import img from './assets/22.png'
import img2 from './assets/2716353.jpg'
import img3 from './assets/a1.png'
import img4 from './assets/a2.png'
import Link from 'next/link'
import Image from 'next/image'

const Digital = () => {
  return (
    <>
      <div className='flex justify-center w-[100%] pt-10'>
        <div className='w-[90%] flex justify-between'>
          <div className='w-[70%] mx-auto h-full pb-20 relative bgwhite max-md:h-[3500px] max-md:h-full'>
            <Image
              className='w-[100%] max-lg:w-full max-lg: max-lg:left-2 h-[490.08px] left[150.62px] top-[456.12px rounded-[21.75px] max-md:mt-20'
              src={img}
              alt=''
            />

            <div className="w-[771.24px] h-[138.09px] max-lg:h-[400px] left[153.76px] top-[205.80px]  text-neutral-800 text-[46px] font-semibold font['Poppins'] leading-[69px] max-lg:w-full max-lg:left-2">
              'Digital Frontiers: Exploring the Ever-Evolving Landscape of Tech
              Innovation'
            </div>

            <div className='flex items-center font-sans'>
              <div className='bg-black text-pink-500 rounded-full w-12 h-12 flex justify-center items-center text-xs font-bold text-center'>
                <Image src='' alt='' />
              </div>
              <div className='ml-3 font-semibold text-[#014C76]'>by Aman Kapil</div>
              <div className='ml-1 font-semibold text-[#014C76]'>
                • Sun May 4, 2024
              </div>
            </div>
            <div className='flex gap-10 justify-center items-center'>
              <div className='h-full  max-lg:left-2 mt-10 max-lg:h-full max-lg:mb-8 top-[1033.50px] flex-col justify-start items-start gap-[35px] inline-flex w-[70%] text-[20px] text-[#175574] max-md:w-full max-md:p-4'>
                <h1 className='text-[30px] text-[#175574] font-semibold'>
                  Introduction
                </h1>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  Embark on a journey through the digital frontiers where innovation
                  reigns supreme and possibilities are boundless. In this series of
                  blogs, we delve into the myriad ways technology is reshaping
                  industries and transforming the way we live, work, and interact.
                  Join us as we explore the latest trends, emerging technologies,
                  and groundbreaking ideas that are shaping the future of our
                  digital world.
                </div>
                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  1. Innovating the Workplace: Technology's Impact on the Future of
                  Work
                </h2>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  From remote collaboration tools to artificial intelligence-driven
                  automation, the workplace is undergoing a seismic shift propelled
                  by technological innovation. In this blog, we'll explore how
                  emerging technologies are revolutionizing the way we work, from
                  virtual meetings and digital workspaces to AI-powered productivity
                  tools and the gig economy. Join us as we navigate the
                  ever-changing landscape of work in the digital age and uncover the
                  opportunities and challenges that lie ahead.
                  <br /> <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    2. Tech for Good: Harnessing Innovation to Drive Social Impact
                  </h2>
                  In a world facing unprecedented challenges, technology emerges as
                  a powerful force for positive change. In this blog, we'll shine a
                  spotlight on the innovative solutions and groundbreaking
                  initiatives that are harnessing the power of technology to address
                  pressing social and environmental issues. From blockchain-powered
                  supply chain transparency to AI-driven healthcare diagnostics and
                  renewable energy solutions, join us as we explore how technology
                  is driving social impact and creating a more sustainable future
                  for all.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    3. The Future of Retail: Navigating Digital Disruption in the
                    Age of E-Commerce
                  </h2>
                  In an era defined by digital disruption, the retail landscape is
                  undergoing a profound transformation. In this blog, we'll delve
                  into the latest trends and technologies shaping the future of
                  retail, from e-commerce platforms and mobile shopping apps to
                  augmented reality experiences and personalized marketing
                  strategies. Join us as we explore how retailers are adapting to
                  the digital age and reimagining the customer experience in an
                  increasingly online world.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    4. Cybersecurity in the Digital Age: Safeguarding Data in an Era
                    of Connectivity
                  </h2>
                  As our world becomes increasingly interconnected, cybersecurity
                  has never been more critical. In this blog, we'll take a deep dive
                  into the latest cybersecurity threats and trends, from ransomware
                  attacks and data breaches to emerging technologies like artificial
                  intelligence and blockchain that are reshaping the cybersecurity
                  landscape. Join us as we explore how organizations are leveraging
                  innovative cybersecurity solutions to protect sensitive data and
                  safeguard against cyber threats in the digital age.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    5: The Power of Data: Unlocking Insights in the Age of Big Data
                    and Analytics
                  </h2>
                  In the age of big data, information is power. In this blog, we'll
                  explore how organizations are harnessing the power of data
                  analytics to drive informed decision-making and gain valuable
                  insights into customer behavior, market trends, and business
                  performance. From predictive analytics and machine learning
                  algorithms to data visualization tools and cloud-based data
                  storage solutions, join us as we uncover the transformative
                  potential of data in the digital era and explore how organizations
                  can leverage data-driven strategies to gain a competitive edge in
                  today's fast-paced business landscape.
                  <br />
                </div>

                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  Conclusion
                </h2>
                <div className='w-] textneutral-900 textbase font-normal leading-normal max-lg:w-full'>
                  As we journey through the digital seas of innovation, let us
                  embrace the transformative power of technology to shape our world
                  and redefine what is possible. For in the boundless expanse of the
                  digital universe, the only limit is the horizon of our
                  imagination.
                  <br />
                </div>
              </div>


            </div>
          </div>
          <div className='p-4 w-[25%] border border-[#ABE0F8] bg-[#fff] rounded-2xl h-[1350px] flex flex-col gap-5'>
            <div className='text-[#175574] flex flex-col gap-2 text-[20px] '>
              <h2 className='font-bold text-[25px]'>Top Articles</h2>
              <Link className='hover:font-bold' href='/blog/Blockchain-Beyond-Crypto'>One of the most promising applications of blockchain is in supply chain management.</Link>
              <Link className='hover:font-bold' href='/blog/Digital-Frontiers'>Embark on a journey through the digital frontiers where innovation reigns</Link>
              <Link className='hover:font-bold' href='/blog/Tech-Odyssey'>In the vast expanse of the digital universe, where bytes dance and algorithms whisper secrets</Link>
              <Link className='hover:font-bold' href='/blog/Unveiling-the-Digital-Symphony'>Gone are the days when websites were mere static pages on the internet</Link>
            </div>
            <Link href='/contact'><Image src={img3} alt='dfsdl' /></Link>
            <Link href='/contact'><Image src={img4} alt='kjdfbkjdb' /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Digital
