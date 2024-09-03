import Benifits from '@/components/HealthCareer/Benifits'
import ClinicalJobs from '@/components/HealthCareer/ClinicalJobs'
import HealthFaq from '@/components/HealthCareer/HealthFaq'
import Hero from '@/components/HealthCareer/Hero'
import NonClinical from '@/components/HealthCareer/Non-clinical'
import WhyHealth from '@/components/HealthCareer/WhyHealth'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <ClinicalJobs />
            <NonClinical />
            <WhyHealth />
            <Benifits />
            <HealthFaq />
        </div>
    )
}

export default page