import Odyssey from '@/components/bloginner/Odyssey'
import React from 'react'
import Blog5Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
  return (
    <>
      <Blog5Layout>
        <Odyssey />
        <BlogContact />
      </Blog5Layout>
    </>
  )
}

export default page