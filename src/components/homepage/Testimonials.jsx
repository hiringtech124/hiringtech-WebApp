'use client'
import React from 'react'
import Image from 'next/image'
import hero from './assets/profile.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style.scss'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const testimonialsData = [
  {
    name: 'Shivam',
    text: 'Thank you Hiring Tech for your Unwavering Dedication and Commitment to help candidates like me find the right career path. With their help of Hiring tech the selection process was very smooth and I totally recommend them.',
    bgColor: '#D794421A',
    textColor: 'text-black',
  },
  {
    name: 'Rishab Mishra',
    text: "Landing a position at Houseeazy through Hiring Tech's support was a career milestone. With a 9.5 LPA package, their personalized guidance and advanced technology streamlined the process seamlessly.",
    bgColor: 'bg-cyan-800',
    textColor: 'text-white',
  },
  {
    name: 'Rahul',
    text: 'Thank you Hiring Tech for your Unwavering Dedication and Commitment to help candidates like me find the right career path. With their help of Hiring tech the selection process was very smooth and I totally recommend them.',
    bgColor: '#ABE0F84D',
    textColor: 'text-black',
  },
  {
    name: 'Raj',
    text: 'At Hiring Tech you get tremendous opportunities to elevate your career. Especially through their training program.',
    bgColor: 'bg-cyan-800',
    textColor: 'text-white',
  },
  {
    name: 'Riya Thakur',
    text: 'A fantastic organisation! Great support from beginning to end of the hiring process. The team are really informed and go the extra mile at every stage. Always keeps me 100% up to date with the process; I was never left wondering where we were at in each phase of the entire recruitment process.',
    bgColor: '',
    textColor: 'text-black',
  },
  {
    name: 'Ishita Sisodiya',
    text: 'One of the best consultants in Indore, I would definitely recommend to everyone who is searching for a job they should definitely contact Hiring Tech. My experience is so great, Lavesh sir helped me a lot to crack the interview. Thank you for your support without you it was not possible at all.',
    bgColor: 'bg-cyan-800',
    textColor: 'text-white',
  },
  {
    name: 'Ravi Sharma',
    text: "Collaborating with Hiring Tech has been a game-changer for our organization. Their professionalism, attention to detail, and commitment to excellence have transformed our project outcomes. Hiring Tech's advanced technology and personalized approach ensured that we connected with the right talent seamlessly.",
    bgColor: '',
    textColor: 'text-black',
  },
  {
    name: 'Abhimanyu Singh',
    text: "Our experience partnering with Hiring Tech has been nothing short of outstanding. Their team's expertise and dedication have significantly streamlined our recruitment process, resulting in the successful acquisition of top-tier talent for our organization. From the initial consultation to the final placement, Hiring Tech demonstrated a deep understanding of our requirements.",
    bgColor: 'bg-cyan-800',
    textColor: 'text-white',
  },
]

const Testimonials = () => {
  return (
    <>
      <div className='client w-full visionbg pt-10 pb-3'>
        <div className='testiminilas w-[90%] max-sm:w-[90%] mx-auto'>
          <h2 className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
            <span className='text-[#D79442]'>|</span> Testimonials
          </h2>
          <div className='servidc mb-20 max-sm:p-0'>
            <h2 className='self-start text-[#062B43] text-[41px] max-sm:text-[24px] font-bold leading-[51.2px]'>
              Client Testimonials
            </h2>
            <h3 className='self-start text-[#175574] text-xl max-sm:text-[16px] font-bold leading-[23.2px]'>
              Discover what our clients had to say about their experience working with us.
            </h3>
          </div>
        </div>
        <div className='flx w-[80%] max-sm:w-[100%] mx-auto px-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              310: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper p-10 m-10 h-[500px] max-sm:h-[400px]'
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col w[33%] max-md:ml-0 max-md:w-full h-[400px] max-sm:h-[320px]'>
                  <div className={`flex flex-col grow px-4 py-5 max-sm:py-2 ${testimonial.bgColor} border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-0`}>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt={testimonial.name}
                        className='w-16 h-16 rounded-full top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className={`font-bold ${testimonial.textColor}`}>{testimonial.name}</div>
                      </div>
                    </div>
                    <div className={`mt-12 max-sm:mt-5 text-[16px] max-sm:text-[14px] max-sm:leading-5 leading9 ${testimonial.textColor} max-md:mt-10`}>
                      {testimonial.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
