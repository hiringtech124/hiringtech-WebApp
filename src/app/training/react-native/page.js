import Enrollment from '@/components/trainingpage/courses/reactNativepage/Enrollment'
import Hero from '@/components/trainingpage/courses/reactNativepage/Hero'
import Job from '@/components/trainingpage/courses/reactNativepage/Job'
import NativeFaq from '@/components/trainingpage/courses/reactNativepage/NativeFaq'
import Syllabus from '@/components/trainingpage/courses/reactNativepage/Syllabus'
import WhyChoose from '@/components/trainingpage/courses/reactNativepage/whyChoose'
import Enroll from '@/components/trainingpage/courses/reactpage/Enroll'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <WhyChoose />
            <Job />
            <Syllabus />
            <Enrollment />
            <NativeFaq />
            <Enroll />
        </>
    )
}

export default page