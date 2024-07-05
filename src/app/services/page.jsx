import Hr from '@/components/servicepage/Hr'
import ItConcern from '@/components/servicepage/ItConcern'
import Servicepage from '@/components/servicepage/Servicepage'
import ServiceUpdate from '@/components/servicepage/ServiceUpdate'
import Web from '@/components/servicepage/Web'
import React from 'react'
import ServicesLayout from './layout'
import SerHero from '@/components/servicepage/SerHero'
import Join from '@/components/servicepage/Join'
import Insight from '@/components/servicepage/Insight'

const Services = () => {
  return (
    <>
      <ServicesLayout>
        <SerHero />
        {/* <div>Services</div> */}
        <div className=''>
          {/* <Servicepage /> */}
          {/* <ServiceUpdate /> */}
          <ItConcern />
          {/* <Hr />
        <Web /> */}
        </div>
        <Join />
        <Insight />
      </ServicesLayout>
    </>
  )
}

export default Services
