import DgPlacement from '@/components/trainingpage/courses/digitalTraining/DgPlacement'
import Dgfaq from '@/components/trainingpage/courses/digitalTraining/Dgfaq'
import HeroDg from '@/components/trainingpage/courses/digitalTraining/HeroDg'
import Jobdg from '@/components/trainingpage/courses/digitalTraining/Jobdg'
import Whydg from '@/components/trainingpage/courses/digitalTraining/Whydigital'
import Enroll from '@/components/trainingpage/courses/reactpage/Enroll'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroDg />
            <Whydg />
            <Jobdg />
            <DgPlacement />
            <Dgfaq />
            <Enroll />
        </div>
    )
}

export default page