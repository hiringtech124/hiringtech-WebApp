import Choose1 from '@/components/trainingpage/courses/reactpage/Choose'
import CourseCurriculam from '@/components/trainingpage/courses/reactpage/CourseCurriculam'
import Enroll from '@/components/trainingpage/courses/reactpage/Enroll'
import FaqComponent from '@/components/trainingpage/courses/reactpage/FAQ'
import Hero from '@/components/trainingpage/courses/reactpage/Hero'
import Opportunities from '@/components/trainingpage/courses/reactpage/Opportunities'
import Placement from '@/components/trainingpage/courses/reactpage/Placement'
import React from 'react'
import ReactjsLayout from './layout'

const page = () => {
    return (
        <div>
            <ReactjsLayout>
                <Hero />
                <Choose1 />
                <CourseCurriculam />
                <Placement />
                <Opportunities />
                <FaqComponent />
                <Enroll />
            </ReactjsLayout>
        </div>
    )
}

export default page
