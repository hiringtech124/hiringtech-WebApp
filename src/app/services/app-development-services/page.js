import Afaq from '@/components/servicepage/appDevelopment/Afaq'
import Ahero from '@/components/servicepage/appDevelopment/Ahero'
import Amisvis from '@/components/servicepage/appDevelopment/Amisvis'
import Building from '@/components/servicepage/appDevelopment/Building'
import Exploreapp from '@/components/servicepage/appDevelopment/Exploreapp'
import Streamapp from '@/components/servicepage/appDevelopment/Streamapp'
import Whyapp from '@/components/servicepage/appDevelopment/Whyapp'
import React from 'react'

const page = () => {
    return (
        <div>
            <Ahero />
            <Whyapp />
            <Exploreapp />
            <Streamapp />
            <Amisvis />
            <Building />
            <Afaq />
        </div>
    )
}

export default page