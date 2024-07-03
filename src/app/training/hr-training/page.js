import Herohr from '@/components/trainingpage/courses/hrTrainingpage/Herohr'
import HrCurriculum from '@/components/trainingpage/courses/hrTrainingpage/HrCurriculum'
import Hrfaq from '@/components/trainingpage/courses/hrTrainingpage/Hrfaq'
import Placement from '@/components/trainingpage/courses/hrTrainingpage/Placement'
import WhyHR from '@/components/trainingpage/courses/hrTrainingpage/WhyHR'
import Enroll from '@/components/trainingpage/courses/reactpage/Enroll'
import React from 'react'

const page = () => {
    return (
        <>
            <Herohr />
            <WhyHR />
            <Placement />
            <HrCurriculum />
            <Hrfaq />
            <Enroll />
        </>
    )
}

export default page