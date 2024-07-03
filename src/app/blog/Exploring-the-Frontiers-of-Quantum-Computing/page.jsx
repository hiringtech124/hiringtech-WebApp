import Future from '@/components/bloginner/Future'
import React from 'react'
import Blog3Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
  return (
    <>
      <Blog3Layout>
        <Future />
        <BlogContact />
      </Blog3Layout>
    </>
  )
}

export default page
