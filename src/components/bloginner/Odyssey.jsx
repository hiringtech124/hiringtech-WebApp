import React from 'react'
import img from './assets/21.png'
import img2 from './assets/2716353.jpg'
import img3 from './assets/a1.png'
import img4 from './assets/a2.png'
import Link from 'next/link'
import Image from 'next/image'

const Odyssey = () => {
  return (
    <>
      <div className='flex justify-center w-[100%] pt-10'>
        <div className='w-[90%] flex justify-between'>
          <div className='w-full max-w-7xl mx-auto h-full pb-20 relative bgwhite  max-md:h-full'>
            <Image
              className='w-[90%] max-lg:w-full max-lg: max-lg:left-2 h-[490.08px] left[150.62px] top-[456.12px rounded-[21.75px] max-md:mt-20'
              src={img}
              alt=''
            />

            <div className="w-[771.24px] h-[138.09px] max-lg:h-[400px] left[153.76px] top-[205.80px]  text-neutral-800 text-[46px] font-semibold font['Poppins'] leading-[69px] max-lg:w-full max-lg:left-2">
              'Tech Odyssey: Navigating the Digital Seas of Innovation'
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
                  In the vast expanse of the digital universe, where bytes dance and
                  algorithms whisper secrets, we embark on a voyage of discovery
                  through the realms of technological innovation. Join us as we
                  chart a course through the ever-changing landscapes of web
                  marketing, exploring the untold tales of creativity and ingenuity
                  that shape our digital world.
                </div>
                <h2 className='text-[30px] text-[#175574] font-semibold'>
                  1. Retail: Crafting Experiences in the Digital Marketplace
                </h2>
                <div className="w[] textneutral-900 textbase font-normal font['Poppins'] leading-normal max-lg:w-full">
                  In the bustling bazaars of retail, where commerce and culture
                  collide, technology emerges as the architect of a new consumer
                  journey. Envision e-commerce platforms, like bustling marketplaces
                  teeming with life, where shoppers traverse virtual aisles in
                  search of treasures untold. Picture personalized recommendations,
                  like whispered secrets shared by trusted advisors, guiding
                  consumers on a path to discovery and delight. Here, in this realm
                  of digital commerce, every click is a step toward a more immersive
                  and engaging shopping experience, every transaction a testament to
                  the power of technology to transform the way we buy and sell.
                  <br /> <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    2. Entertainment: Captivating Audiences in the Digital Theater
                  </h2>
                  Amidst the shimmering lights of the entertainment industry, where
                  dreams take flight and imagination knows no bounds, technology
                  emerges as the maestro of a new era of storytelling. Behold
                  streaming platforms, like enchanted portals to other worlds, where
                  viewers embark on epic adventures from the comfort of their own
                  homes. Picture immersive experiences, like shimmering mirages on
                  the horizon, inviting audiences to step into the heart of the
                  narrative and become part of the story themselves. Here, in this
                  realm of digital entertainment, every frame is a brushstroke on
                  the canvas of imagination, every interaction a symphony of sight
                  and sound that transcends the boundaries of reality.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    3. Hospitality: Transforming Experiences in the Digital Retreat
                  </h2>
                  In the tranquil sanctuaries of hospitality, where wanderers find
                  rest and travelers become storytellers, technology emerges as the
                  guardian of a new era of hospitality. Envision booking platforms,
                  like gateways to enchanted realms, where guests discover hidden
                  gems and embark on journeys of discovery. Picture smart hotels,
                  like living organisms attuned to the needs of their inhabitants,
                  anticipating desires and weaving comfort into every corner. Here,
                  in this realm of digital hospitality, every stay is a chapter in a
                  traveler's tale, every interaction a moment of connection that
                  transcends time and space.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    4. Real Estate: Redefining Spaces in the Digital Landscape
                  </h2>
                  In the ever-changing vistas of real estate, where dreams take
                  shape and homes become havens, technology emerges as the architect
                  of a new era of property exploration. Behold virtual tours, like
                  windows to other worlds, where buyers wander through digital
                  domains in search of their perfect abode. Picture augmented
                  reality, like a magical lens that reveals hidden potential and
                  transforms empty spaces into dream homes. Here, in this realm of
                  digital real estate, every listing is a story waiting to be told,
                  every transaction a milestone in the journey toward finding the
                  perfect place to call home.
                  <br />
                  <br />
                  <h2 className='text-[30px] text-[#175574] font-semibold'>
                    5. Travel: Embarking on Digital Expeditions
                  </h2>
                  In the boundless horizons of travel, where adventures beckon and
                  wanderlust knows no bounds, technology emerges as the navigator of
                  a new era of exploration. Envision travel apps, like compasses
                  guiding intrepid explorers through uncharted territories and
                  ancient cities alike. Picture immersive experiences, like portals
                  to distant lands where every step is a journey and every
                  destination a discovery. Here, in this realm of digital travel,
                  every itinerary is a roadmap to adventure, every memory a treasure
                  to be cherished for a lifetime.
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

export default Odyssey
