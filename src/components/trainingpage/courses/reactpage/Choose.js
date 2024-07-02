import React from 'react'
import Image from 'next/image'
// import icon1 from "./assets/iconone.png"
// import icon2 from "./assets/icontwo.png"
// import icon3 from "./assets/iconthree.png"
// import icon4 from "./assets/iconfour.png"
// import icon5 from "./assets/iconfive.png"
// sdjfdj

const elements = [
    {
        // icon: icon1,
        title: 'Expert Instructors',
        description: 'Learn React JS from INDUSTRY EXPERTS with years of experience in React JS development. Our instructors are not just skilled teachers but practicing professionals who bring real-world expertise into the classroom.'
    },
    {
        // icon: icon2,
        title: 'Hands-on Projects',
        description: 'Gain practical experience by working on real-world React JS projects that simulate industry scenarios. These projects allow you to apply theoretical knowledge to practical applications, honing your skills.'
    },
    {
        // icon: icon3,
        title: 'Flexible Learning',
        description: 'Access our React JS online courses at your convenience, allowing you to learn at your own pace. Whether you are a full-time professional or a student, our flexible learning options cater to your schedule.'
    },
    {
        // icon: icon4,
        title: 'Certification',
        description: 'Upon completion, receive a REACT JS CERTIFICATION that adds value to your professional profile and showcases your expertise in React JS development.'
    },
    {
        // icon: icon5,
        title: '100% Placement Program',
        description: 'Our comprehensive REACT JS TRAINING WITH PLACEMENT ASSISTANCE ensures that you are not only well-trained but also job-ready. We provide dedicated support to help you secure rewarding job opportunities in the tech industry.'
    }
]

const Choose1 = () => {
    return (
        <div className='w-full flex justify-center h-full py-10 max-sm:py-5'>
            <div className='w-[90%] flex flex-col items-center gap-5 max-sm:gap-2'>
                <h2 className='font-bold text-[30px] max-xl:text-[26px] max-lg:text-[24px] max-md:text-[22px] text-[#175574]'>Why Choose Our React JS Training Course?</h2>
                <p className='text-[22px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] max-sm:text-justify text-[#175574] text-center font-medium'>Our REACT JS TRAINING COURSE is meticulously structured to cover everything from the basics to advanced topics, ensuring a deep understanding of React JS. Here&apos;s what makes our course stand out:</p>
                <div className='w-[90%] max-xl:w-full flex flex-wrap gap-20 max-xl:gap-10 max-sm:gap-5 max-sm:pt-5   justify-center pt-10'>
                    {elements.map((element, index) => (
                        <div key={index} className='p-5 bg-[#fff] flex flex-col gap-5 max-xl:gap-2 shadow-xl rounded-xl items-center'>
                            {/* <Image src={element.icon} alt={`icon-${index + 1}`} className='max-xl:w-[60px]' /> */}
                            <h3 className='text-[#252B42] text-[20px] max-xl:text-[18px] max-md:text-[16px] self-center font-medium'>{element.title}</h3>
                            <p className='text-[14px] text-[#175574] self-center text-center max-xl:leading-4 w-[250px] max-xl:w-[200px]'>{element.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Choose1
