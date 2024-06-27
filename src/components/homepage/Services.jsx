import React from 'react'
import Image from 'next/image'

// import img from "./asstes/training.png";
import img from './assets/training.png'
import img2 from './assets/concern.png'
import img3 from './assets/hr.png'
import img4 from './assets/web.png'
import img5 from './assets/arrow.png'
import img6 from './assetss/44.png'
import img7 from './assetss/45.png'
import img8 from './assetss/46.png'
import img9 from './assetss/47.png'

const Services = () => {

  const data = [
    {
      img: img6,
      title: "Tech Training",
      detail: "In our tech training consultancy, we provide comprehensive programs tailored to the ever-evolving tech landscape. read more"
    },
    {
      img: img7,
      title: "IT Concerns",
      detail: "Hiring tech service is working as placement consultant service company serving the needs of the client. read more"
    },
    {
      img: img8,
      title: "HR training",
      detail: "We offer comprehensive programs tailored to empower professionals in human resources management. read more"
    },
    {
      img: img9,
      title: "Web Services",
      detail: "In our web development training consultancy, a comprehensive programs designed to equip individuals with the skills. read more"
    }
  ]

  return (
    <>
      {/* <div className='home-service w-full max-lg:h-full'>
        <div className='mx-auto w-[80%] max-sm:w-full'>
          <div className='servidc mb-20 max-sm:mb-5  max-sm:p-4'>
            <h3 className='self-start text-[#175574] text-xl max-sm:text-[18px] font-bold leading-[51.2px]'>
              <span className='text-[#D79442]'>|</span> Services
            </h3>
            <h1 className='self-start text-[#062B43] text-[41px] max-sm:text-[28px] font-bold leading-[51.2px]'>
              Our Services
            </h1>
          </div>
          <div className='flex justify-start items-center gap-4 flex-wrap max-lg:justify-center max-lg:h-full max-md:grid max-md:grid-cols-2 max-md:p-4'>
            <a
              class='mb-[17px] service-cards w-[23.451%] p-[20px] flex-col items-start gap-[46.12px] inline-flex  transition-all text-black hover:shadow-xl transition-all max-md:w-full  rounded-md'
              href='/services'
            >
              <div class='justify-center items-center inline-flex w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex max-md:justify-center max-md:items-center'>
                  <Image
                    src={img6}
                    className='mix-blenddifference w-full'
                    alt='hero'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] max-sm:h-full h[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px] group-hover:underline grouphover:textwhite">
                    Tech Training
                  </div>
                  <div class="w[300px] opacity-80  text-[18px] font-normal  font['Graphik'] leading-normal  max-[1310px]:w-full">
                    Hiring tech service is working as placement consultant
                    service company serving the needs of the client.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px]  relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />


                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[23.451%] h[350px] p-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client
 hoverbg-[#062b43] hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full  rounded-md
 
'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img7}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    IT concerns.
                  </div>
                  <div class="w[300px]  leading[150%] opacity-80  text-[18px]  font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    We offer comprehensive programs tailored to empower
                    professionals in human resources management.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[23.451%] [350px] p-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client
  hoverbg-[#062b43] hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full   rounded-md'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img8}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    HR training
                  </div>
                  <div class="w[300px]  leading[150%] opacity-80  text-[18px] font-normal  font['Graphik'] leading-normal  max-[1310px]:w-full">
                    In our web development training consultancy, a comprehensive
                    programs designed to equip individuals with the skills.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[23.451%] h[350px] pl-[20px] pr-[10px] py-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full  rounded-md'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img9}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px]  max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    Web services
                  </div>
                  <div class="w[300px] leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    Hiring Tech Services is working as a placement consultant
                    service company serving the needs of the clients.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] border border-black justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> */}


      <div className='w-full flex justify-center font-serif'>
        <div className='w-[80%] max-sm:w-[95%] flex flex-col items-start gap-10'>
          <div className=''>
            <h3 className='text-[#175574] text-[20px] font-bold leading-[51.2px]'>
              <span className='text-[#D79442]'>|</span> Services
            </h3>
            <h2 className='text-[#062B43] text-[41px] max-sm:text-[30px] font-bold leading-[51.2px]'>
              Our Services
            </h2>
          </div>
          <div className='grid w-full items-center grid-cols-4 max-lg:grid-cols-2 max-sm:gap-x-2 max-lg:gap-y-10 max-sm:gap-y-5'>
            {data.map((data, index) => (
              <a key={index} className=' p-[20px] max-sm:p-[10px] w-[250px] place-self-center h-[370px] max-xl:w-[200px] max-xl:h-[350px] max-[450px]:w-[140px] max-[450px]:h-[280px]  bg-custom-gradient flex-col items-center gap-5 max-sm:gap-2 inline-flex  text-black hover:shadow-xl transition-all rounded-3xl max-sm:rounded-lg'
                href='/services'>
                <Image src={data.img} alt='img' />
                <h2 className="letter-spacing-4 text-[#062B43] text-[24px] max-xl:text-[22px] max-sm:text-[16px] font-bold hover:underline">{data.title}</h2>
                <p className='text-center text-[14px] max-sm:text-[12px] max-sm:leading-4 max-xl:leading-5'>{data.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
