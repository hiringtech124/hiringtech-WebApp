import React from 'react'
import img from './assets/17.png'
import img2 from './assets/2716353.jpg'
import img3 from './assets/a1.png'
import img4 from './assets/a2.png'
import Link from 'next/link'
import Image from 'next/image'

const Chain = () => {
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
                  Enter the world of blockchain—a revolutionary technology that
                  promises to transform industries, disrupt traditional business
                  models, and empower individuals like never before. While
                  blockchain is often associated with cryptocurrency, its potential
                  extends far beyond digital currency to areas such as supply chain
                  management, healthcare, and voting systems. Join us as we embark
                  on a journey to explore the untapped potential of blockchain and
                  its transformative impact on the future of technology.
                </div>
                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  1. Decentralization: The Cornerstone of Blockchain Innovation
                </h2>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  At the heart of blockchain technology lies the concept of
                  decentralization—a distributed ledger that is maintained by a
                  network of computers rather than a central authority. This
                  decentralized approach offers unparalleled security, transparency,
                  and resilience, making it ideal for applications where trust is
                  paramount. From financial transactions to identity management,
                  blockchain has the potential to revolutionize the way we interact
                  with data and information, putting power back in the hands of
                  individuals and communities.
                  <br /> <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    2. Supply Chain Revolution: Enhancing Transparency and
                    Traceability
                  </h2>
                  One of the most promising applications of blockchain is in supply
                  chain management, where it has the potential to revolutionize the
                  way goods are tracked, traced, and verified throughout the supply
                  chain. By creating an immutable record of transactions, blockchain
                  enables greater transparency and accountability, reducing the risk
                  of fraud, counterfeiting, and other supply chain challenges. From
                  farm to fork, consumers can trace the journey of their products
                  and verify their authenticity with a simple scan of a QR code,
                  empowering them to make informed purchasing decisions.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    3. Healthcare Transformation: Securing Patient Data and
                    Improving Outcomes
                  </h2>
                  In the healthcare industry, data security and privacy are of
                  paramount importance. Blockchain offers a solution to these
                  challenges by providing a secure and immutable record of patient
                  data that is accessible only to authorized parties. By
                  decentralizing healthcare records and ensuring data integrity,
                  blockchain has the potential to streamline administrative
                  processes, improve interoperability between healthcare providers,
                  and enhance patient outcomes. From electronic health records to
                  clinical trials management, blockchain is poised to revolutionize
                  the way we approach healthcare.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    4. Democratic Innovation: Revolutionizing Voting Systems
                  </h2>
                  In an age of digital misinformation and electoral fraud, trust in
                  democratic institutions is more important than ever. Blockchain
                  offers a solution to these challenges by providing a secure and
                  transparent platform for voting and elections. By creating an
                  immutable record of voter transactions, blockchain ensures the
                  integrity of the electoral process and eliminates the risk of
                  tampering or manipulation. From national elections to local
                  referendums, blockchain has the potential to revolutionize the way
                  we conduct elections, restoring trust and confidence in democratic
                  systems around the world.
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
                  As we journey into the uncharted territories of blockchain
                  technology, the possibilities are endless. From supply chain
                  management to healthcare, voting systems, and beyond, blockchain
                  has the potential to revolutionize industries, empower
                  individuals, and reshape the future of technology. Join us as we
                  explore the transformative potential of blockchain and unlock the
                  limitless possibilities that await. The future is blockchain—will
                  you be a part of it?
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

export default Chain
