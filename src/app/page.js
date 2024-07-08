import Vision2 from '@/components/home2/Vision2'
import About2 from '@/components/home2/About2'
import Testimonials from '@/components/homepage/Testimonials'
import Clients from '@/components/homepage/Clients'
import Hero from '@/components/homepage/Hero'
import Services from '@/components/homepage/Services'
import ITRecruitmentServices from '@/components/homepage/Recruitment'
import Benifits from '@/components/homepage/Benifits'
import Technologiesf from '@/components/homepage/Technologiesf'
import Last from '@/components/homepage/Last'


export default function Home() {
  return (
    <>
      <Hero />
      <ITRecruitmentServices />
      <Vision2 />
      <About2 />
      <Services />
      <Benifits />
      <Clients />
      <section className='relative'>
        <Testimonials />
      </section>
      <Technologiesf />
      <Last />
    </>
  )
}




