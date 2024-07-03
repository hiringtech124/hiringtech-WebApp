import React from 'react'
import img from './assets/20.png'
import img2 from './assets/2716353.jpg'
import img3 from './assets/a1.png'
import img4 from './assets/a2.png'
import Link from 'next/link'
import Image from 'next/image'

const Techf = () => {
  return (
    <>
      <div className='flex justify-center w-[100%] pt-10'>
        <div className='w-[90%] flex justify-between'>
          <div className='w-[70%] mx-auto h-full pb-20 relative bgwhite max-md:h-full'>
            <Image
              className='w-[100%] max-lg:w-full max-lg: max-lg:left-2 h-[490.08px] left[150.62px] top-[456.12px rounded-[21.75px] max-md:mt-20'
              src={img}
              alt=''
            />

            <div className="w-[771.24px] h-[138.09px] max-lg:h-[400px] left[153.76px] top-[205.80px]  text-neutral-800 text-[46px] font-semibold font['Poppins'] leading-[69px] max-lg:w-full max-lg:left-2">
              'Tech Chronicles: Exploring the Digital Frontier'
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
                  Welcome to "Tech Chronicles," where we embark on a journey through
                  the digital frontier, uncovering fascinating tales of innovation
                  and discovery. Join us as we delve into the world of technology,
                  exploring its impact on diverse aspects of our lives and
                  unraveling the mysteries of the digital realm. In this series of
                  blogs, we'll traverse uncharted territories, from the depths of
                  artificial intelligence to the heights of space exploration, and
                  everything in between. Let's set sail on this adventure and
                  discover the wonders that await us in the digital landscape.
                </div>
                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  1: The Rise of Virtual Reality: Immersive Experiences in the
                  Digital Age
                </h2>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  Step into the realm of virtual reality, where the boundaries
                  between the physical and digital worlds blur into existence. From
                  immersive gaming experiences to virtual travel adventures and
                  interactive storytelling, we'll explore the fascinating world of
                  VR technology and its potential to transform entertainment,
                  education, and beyond. Join us as we dive deep into the virtual
                  realm and unlock the secrets of this groundbreaking technology.
                  <br /> <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    2. The Power of Biotechnology: Transforming Healthcare and
                    Beyond
                  </h2>
                  Explore the frontiers of biotechnology, where science and
                  technology converge to unlock the secrets of life itself. From
                  gene editing and personalized medicine to bioinformatics and
                  synthetic biology, we'll delve into the cutting-edge innovations
                  that are revolutionizing healthcare, agriculture, and
                  environmental sustainability. Join us as we unravel the mysteries
                  of biotechnology and discover its potential to shape the future of
                  humanity.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    3. Cryptocurrency Chronicles: Navigating the World of Digital
                    Currency
                  </h2>
                  Venture into the realm of cryptocurrency, where digital assets and
                  blockchain technology are reshaping the landscape of finance and
                  economics. From Bitcoin and Ethereum to decentralized finance
                  (DeFi) and non-fungible tokens (NFTs), we'll explore the
                  intricacies of this rapidly evolving ecosystem and its
                  implications for the future of money, investment, and beyond. Join
                  us as we decode the world of cryptocurrency and uncover its
                  potential to revolutionize the way we transact and interact
                  online.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    4. The Promise of Quantum Computing: Unlocking the Power of the
                    Quantum Realm
                  </h2>
                  Peer into the quantum realm, where the laws of physics take on a
                  surreal and mind-bending form. From quantum computers and
                  cryptography to quantum teleportation and entanglement, we'll
                  explore the strange and fascinating world of quantum mechanics and
                  its potential to revolutionize computing, communication, and
                  scientific discovery. Join us as we journey into the quantum
                  frontier and uncover the mysteries of this cutting-edge technology
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    5. The Future of Mobility: Navigating the Road to Autonomous
                    Vehicles
                  </h2>
                  Embark on a journey into the future of transportation, where
                  autonomous vehicles and electric mobility are reshaping the way we
                  move and commute. From self-driving cars and flying taxis to
                  hyperloop trains and electric scooters, we'll explore the latest
                  innovations in transportation technology and their potential to
                  transform urban mobility, reduce traffic congestion, and combat
                  climate change. Join us as we navigate the road to the future of
                  mobility and discover the possibilities that lie ahead.
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

export default Techf
