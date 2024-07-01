import Image from 'next/image';
import Image1 from './assets/logo1.png';
import Image2 from './assets/logo2.png';
import Image3 from './assets/logo3.png';
import Image4 from './assets/logo4.png';
import Image5 from './assets/logo5.png';
import Image6 from './assets/logo6.png';

const TechExportHiringProcess = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Tech Export Hiring Process</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image1} alt="Stay Updated" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Stay Updated:</h3>
                            <p>Learn the latest tech skills demanded by top employers through a cutting-edge curriculum.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image2} alt="Hands-On Learning" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Hands-On Learning:</h3>
                            <p>Gain practical experience and confidence through real-world projects.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image3} alt="Expert Guidance" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Expert Guidance:</h3>
                            <p>Receive personalized mentorship and insights from industry experts.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image4} alt="Mock Technical Interviews" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Mock Technical Interviews:</h3>
                            <p>Prepare for success with mock technical interviews, boosting confidence in communication skills and technical know-how.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image5} alt="Communication Skills Training" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Communication Skills Training:</h3>
                            <p>Comprehensive communication skills training alongside technical interview preparation to ensure complete readiness.</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow w-full">
                        <Image src={Image6} alt="Resume Design" width={35} height={35} className="mr-4" />
                        <div>
                            <h3 className="font-bold">Resume Design:</h3>
                            <p>Learn how to craft a standout resume that effectively highlights your skills and experience.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600">Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default TechExportHiringProcess;
