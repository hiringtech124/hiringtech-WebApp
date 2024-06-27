import Footer from '@/components/placementPage/footer/Footer'
import Hero from '@/components/placementPage/hero/Hero'
import Industry from '@/components/placementPage/industries/Industry'
import Partners from '@/components/placementPage/partners/Partners'
import Placed from '@/components/placementPage/placedStd/Placed'
import Review from '@/components/placementPage/reviews/Review'
import React from 'react'

const page = () => {
    return (
        <div className='font-serif'>
            <Hero />
            <Placed />
            <Industry />
            <Partners />
            <Review />
        </div>
    )
}

export default page