import About from '@/components/Aboutpage/About'
import Mission from '@/components/Aboutpage/Mission'
import Offer from '@/components/Aboutpage/Offer'
// import ScrollAnimation from '@/components/Aboutpage/ScrollAnimation'
import Stream from '@/components/Aboutpage/Stream'
import Team from '@/components/Aboutpage/Team'

import React from 'react'
import AboutLayout from './layout'

const page = () => {
  return (
    <>

      <AboutLayout>
        {/* <div>about page</div> */}
        <About />
        {/* <Mission /> */}
        <Stream />
        {/* <ScrollAnimation /> */}
        <Team />
        <Offer />
      </AboutLayout>
    </>
  )
}

export default page
