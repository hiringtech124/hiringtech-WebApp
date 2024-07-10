import Explore from '@/components/servicepage/webDevPage/Explore'
import Fullstack from '@/components/servicepage/webDevPage/Fullstack'
import HeroWeb from '@/components/servicepage/webDevPage/HeroWeb'
import Mis_Vis_Val from '@/components/servicepage/webDevPage/Mis_Vis_Val'
import Stream from '@/components/servicepage/webDevPage/Stream'
import WhyDev from '@/components/servicepage/webDevPage/WhyDev'
import Custom from '@/components/servicepage/webDevPage/Custom'
import React from 'react'
import FaqW from '@/components/servicepage/webDevPage/FaqW'

const page = () => {
    return (
        <div>
            <HeroWeb />
            <WhyDev />
            <Explore />
            <Stream />
            <Mis_Vis_Val />
            <Fullstack />
            <Custom />
            <FaqW />
        </div>
    )
}

export default page