import ExpertIt from '@/components/servicepage/RecruitmentSolution/Expert';
import FAQs from '@/components/servicepage/RecruitmentSolution/Faq';
import Itrecruitment from '@/components/servicepage/RecruitmentSolution/Itrecruitment';
import Mission from '@/components/servicepage/RecruitmentSolution/Mission';

export default function Home() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <ExpertIt />
            <Mission />
            <Itrecruitment />
            <FAQs />
        </div>
    );
}
