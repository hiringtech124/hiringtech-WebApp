import Mission from '@/components/servicepage/RecruitmentSolution/Mission';
import ExpertIt from '@/components/servicepage/RecruitmentSolution/ExpertIt';
import Itrecruitment from '@/components/servicepage/RecruitmentSolution/Itrecruitment';
import FAQs from '@/components/servicepage/RecruitmentSolution/FAQs';

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
