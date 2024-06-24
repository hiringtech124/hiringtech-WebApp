import Hr from '@/components/servicepage/Hr'
import ItConcern from '@/components/servicepage/ItConcern'
import Servicepage from '@/components/servicepage/Servicepage'
import ServiceUpdate from '@/components/servicepage/ServiceUpdate'
import Web from '@/components/servicepage/Web'
import React from 'react'
import ServicesLayout from './layout'

const Services = () => {
  return (
    <>
      <ServicesLayout>
        {/* <div>Services</div> */}
        <div className=''>
          <Servicepage />
          {/* <ServiceUpdate /> */}
          <ItConcern />
          {/* <Hr />
        <Web /> */}
        </div>
      </ServicesLayout>
    </>
  )
}

export default Services
