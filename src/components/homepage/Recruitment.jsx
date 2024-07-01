import Image from 'next/image';
import Tickgreen from './assets/Tick1.png';
import Tickblue from './assets/Tick2.png';
import Tickviolet from './assets/Tick3.png';
import Tickblack from './assets/Tick4.png';
import Tickbrown from './assets/Tick5.png';

const ITRecruitmentServices = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold mb-2">| IT Recruitment Services:</h2>
                <h1 className="text-3xl font-bold mb-4">Tech Export Hiring Process</h1>
                <p className="mb-8">
                    Our IT recruitment services hiring process is designed to ensure that we deliver the best candidates to meet your specific requirements. Here’s how we do it:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Tickgreen} alt="Check Icon" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Understanding Your Needs</h3>
                            <p>We start by comprehensively understanding your business requirements and the specific skills and attributes you are looking for in a candidate.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Tickblack} alt="Check Icon" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Sourcing Candidates</h3>
                            <p>Utilising our extensive network and advanced recruitment tools, we source potential candidates who meet your criteria.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Tickblue} alt="Check Icon" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Screening and Assessment</h3>
                            <p>Our rigorous screening and assessment process ensures that only the most qualified candidates are shortlisted.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Tickbrown} alt="Check Icon" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Interview Coordination</h3>
                            <p>We handle all the coordination for interviews, making the process seamless and efficient for both you and the candidates.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Tickviolet} alt="Check Icon" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Offer and Onboarding</h3>
                            <p>Once the right candidate is selected, we assist with the offer process and ensure a smooth onboarding experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITRecruitmentServices;
