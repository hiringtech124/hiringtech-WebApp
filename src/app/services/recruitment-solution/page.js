import Mission from '@/components/servicepage/RecruitmentSolution/Mission';
import ExpertIt from '@/components/servicepage/RecruitmentSolution/Expert';
import FAQs from '@/components/servicepage/RecruitmentSolution/Faq';
import Recruitment from '@/components/servicepage/RecruitmentSolution/Itrecruitment';


export default function Home() {
    return (
        <>
            <div>
                <ExpertIt />
                <Mission />
                <Recruitment />
                <FAQs />
            </div>


        </>
    );
}
