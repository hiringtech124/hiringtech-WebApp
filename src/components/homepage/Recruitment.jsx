import Image from 'next/image';
import Tick1 from './assets/f1.svg';
import Tick2 from './assets/f2.svg';
import Tick3 from './assets/f3.png';
import Tick4 from './assets/f4.svg';
import Tick5 from './assets/f2.svg';

const steps = [
    {
        image: Tick1,
        title: 'Understanding Your Needs',
        description: 'We start by comprehensively understanding your business requirements and the specific skills and attributes you are looking for in a candidate.',
    },
    {
        image: Tick2,
        title: 'Sourcing Candidates',
        description: 'Utilising our extensive network and advanced recruitment tools, we source potential candidates who meet your criteria.',
    },
    {
        image: Tick3,
        title: 'Screening and Assessment',
        description: 'Our rigorous screening and assessment process ensures that only the most qualified candidates are shortlisted.',
    },
    {
        image: Tick4,
        title: 'Interview Coordination',
        description: 'We handle all the coordination for interviews, making the process seamless and efficient for both you and the candidates.',
    },
    {
        image: Tick5,
        title: 'Offer and Onboarding',
        description: 'Once the right candidate is selected, we assist with the offer process and ensure a smooth onboarding experience.',
    },
];

const ITRecruitmentServices = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] mx-auto py-8">
                {/* <h2 className="text-xl font-semibold mb-2 text-[#175574]"><span className='text-[#D79442] font-bold mr-5 max-sm:mr-1'>|</span> IT Recruitment Services:</h2> */}
                <h1 className="text-[41px] max-lg:text-[30px] max-sm:text-2xl font-bold mb-4 max-sm:mb-2 text-[#062B43]">How We Hire?</h1>
                <p className="mb-8 text-[#175574] text-[20px] max-sm:text-[14px]">
                    Our IT recruitment services hiring process is designed to ensure that we deliver the best candidates to meet your specific requirements. Here&apos;s how we do it:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-sm:gap-3">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center p-4 max-sm:p-2 bg-white rounded-lg shadow w-full">
                            <Image src={step.image} alt="Check Icon" className="w-[100px] max-md:w-[60px]" />
                            <div className='text-[#175574] max-sm:text-[16px]'>
                                <h3 className="font-bold">{step.title}</h3>
                                <p className='max-sm:leading-4 max-sm:text-[14px]'>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITRecruitmentServices;
