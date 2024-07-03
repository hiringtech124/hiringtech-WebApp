import Symphony from '@/components/bloginner/Symphony'
import React from 'react'
import Blog6Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
  return (
    <>
      <Blog6Layout>
        <Symphony />
        <BlogContact />
      </Blog6Layout>
    </>
  )
}

export default page
