import Image from 'next/image';
import Tickgreen from './assets/Tick1.png';
import Tickblue from './assets/Tick2.png';
import Tickviolet from './assets/Tick3.png';
import Tickblack from './assets/Tick4.png';
import Tickbrown from './assets/Tick5.png';

const steps = [
    {
        image: Tickgreen,
        title: 'Understanding Your Needs',
        description: 'We start by comprehensively understanding your business requirements and the specific skills and attributes you are looking for in a candidate.',
    },
    {
        image: Tickblack,
        title: 'Sourcing Candidates',
        description: 'Utilising our extensive network and advanced recruitment tools, we source potential candidates who meet your criteria.',
    },
    {
        image: Tickblue,
        title: 'Screening and Assessment',
        description: 'Our rigorous screening and assessment process ensures that only the most qualified candidates are shortlisted.',
    },
    {
        image: Tickbrown,
        title: 'Interview Coordination',
        description: 'We handle all the coordination for interviews, making the process seamless and efficient for both you and the candidates.',
    },
    {
        image: Tickviolet,
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
                    Our IT recruitment services hiring process is designed to ensure that we deliver the best candidates to meet your specific requirements. Here’s how we do it:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-sm:gap-3">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                            <Image src={step.image} alt="Check Icon" className="m-auto" />
                            <div className='text-[#175574] max-sm:text-[14px]'>
                                <h3 className="font-bold">{step.title}</h3>
                                <p className='max-sm:leading-4'>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITRecruitmentServices;
