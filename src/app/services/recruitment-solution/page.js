import Mission from '@/components/servicepage/RecruitmentSolution/Mission';
import ExpertIt from '@/components/servicepage/RecruitmentSolution/Expert';
import Itrecruitment from '@/components/servicepage/RecruitmentSolution/Itrecruitment';
import FAQs from '@/components/servicepage/RecruitmentSolution/Faq';

export default function Home() {
    return (
        <>
            <div>
                <ExpertIt />
                <Mission />
                <Itrecruitment />
                <FAQs />
            </div>


        </>
    );
}
