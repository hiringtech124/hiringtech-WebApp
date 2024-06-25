import Accordian from '@/components/careerpage/Accordian'
import CareerHero from '@/components/careerpage/CareerHero'
import Dummy from '@/components/careerpage/Dummy'
import JobsPage from '@/components/careerpage/JobsPage'
import Whyus from '@/components/careerpage/Whyus'
import React from 'react'
import CareerLayout from './layout'

const Career = () => {
  return (
    <>
      <CareerLayout>
        {/* \<div>Career</div> */}
        <CareerHero />
        {/* <Accordian/> */}
        <Whyus />
        <JobsPage />
        {/* <Dummy /> */}
      </CareerLayout>
    </>
  )
}

export default Career
