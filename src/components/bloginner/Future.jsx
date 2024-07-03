import React from 'react'
import img from './assets/19.png'
import img2 from './assets/2716353.jpg'
import img3 from './assets/a1.png'
import img4 from './assets/a2.png'
import Link from 'next/link'
import Image from 'next/image'

const Future = () => {
  return (
    <>
      <div className='flex justify-center w-[100%] pt-10'>
        <div className='w-[90%] flex justify-between'>
          <div className='w-[70%] mx-auto h-full pb-20 relative bgwhite  max-md:h-full'>
            <Image
              className='w-[100%] max-lg:w-full max-lg: max-lg:left-2 h-[490.08px] left[150.62px] top-[456.12px rounded-[21.75px] max-md:mt-20'
              src={img}
              alt=''
            />

            <div className="w-[771.24px] h-[138.09px] max-lg:h-[400px] left[153.76px] top-[205.80px]  text-neutral-800 text-[46px] font-semibold font['Poppins'] leading-[69px] max-lg:w-full max-lg:left-2">
              Blockchain-Beyond-Crypto
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
                  Step into the world of quantum computing, where the boundaries of
                  traditional computing are shattered, and the possibilities are
                  limitless. In this cutting-edge field of IT, quantum mechanics
                  meets information theory to create a paradigm shift that promises
                  to revolutionize industries, solve complex problems, and unlock
                  new frontiers of innovation. Join us on a journey as we delve into
                  the fascinating world of quantum computing and explore its
                  transformative potential.
                </div>
                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  1. Quantum Computing: A Leap into the Unknown
                </h2>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  Quantum computing represents a fundamental departure from
                  classical computing, harnessing the principles of quantum
                  mechanics to perform computations at speeds that were once thought
                  impossible. Unlike traditional binary bits, which can only exist
                  in one of two states (0 or 1), quantum bits, or qubits, can exist
                  in multiple states simultaneously, enabling quantum computers to
                  process vast amounts of data in parallel. This groundbreaking
                  technology holds the key to solving some of the most complex
                  problems in science, medicine, finance, and beyond.
                  <br /> <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    2. Quantum Supremacy: Pushing the Limits of Computational Power
                  </h2>
                  In October 2019, Google claimed to have achieved quantum
                  supremacy—the moment when a quantum computer performs a task that
                  is practically impossible for classical computers to replicate.
                  While the milestone sparked both excitement and skepticism within
                  the scientific community, it underscored the transformative
                  potential of quantum computing. With quantum computers poised to
                  tackle problems that were previously thought to be intractable,
                  the race to achieve quantum supremacy is heating up, with major
                  players in the tech industry investing billions of dollars into
                  quantum research and development.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    3. Quantum Algorithms: Unraveling the Mysteries of Optimization
                    and Simulation
                  </h2>
                  One of the most promising applications of quantum computing lies
                  in the realm of optimization and simulation. From optimizing
                  supply chains and financial portfolios to simulating complex
                  chemical reactions and materials properties, quantum algorithms
                  have the potential to revolutionize a wide range of industries. By
                  harnessing the power of quantum parallelism and entanglement,
                  these algorithms can explore vast solution spaces in a fraction of
                  the time it would take classical computers, paving the way for
                  faster, more efficient problem-solving.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    4. Quantum Security: Fortifying the Foundations of Cybersecurity
                  </h2>
                  In an increasingly interconnected world, cybersecurity has never
                  been more important. Quantum computing has the potential to
                  disrupt traditional cryptographic methods by rendering many of
                  today's encryption algorithms obsolete. However, it also offers
                  new opportunities for securing data through the use of
                  quantum-resistant encryption techniques, such as quantum key
                  distribution (QKD). By leveraging the principles of quantum
                  mechanics to secure communications channels, quantum security
                  promises to usher in a new era of cybersecurity that is virtually
                  unbreakable.
                  <br />
                  <br />
                  5. Travel: Embarking on Digital Expeditions In the boundless
                  horizons of travel, where adventures beckon and wanderlust knows
                  no bounds, technology emerges as the navigator of a new era of
                  exploration. Envision travel apps, like compasses guiding intrepid
                  explorers through uncharted territories and ancient cities alike.
                  Picture immersive experiences, like portals to distant lands where
                  every step is a journey and every destination a discovery. Here,
                  in this realm of digital travel, every itinerary is a roadmap to
                  adventure, every memory a treasure to be cherished for a lifetime.
                  <br />
                </div>

                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  Conclusion
                </h2>
                <div className='w-] textneutral-900 textbase font-normal leading-normal max-lg:w-full'>
                  As we stand on the brink of a quantum revolution, the
                  possibilities are endless. From solving complex optimization
                  problems to fortifying the foundations of cybersecurity, quantum
                  computing holds the key to a future of unprecedented innovation
                  and discovery. While the road ahead may be fraught with
                  challenges, the potential rewards are too great to ignore. Join us
                  as we embark on a journey into the quantum realm and unlock the
                  mysteries of the universe. The future is quantum—will you be a
                  part of it?
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

export default Future
