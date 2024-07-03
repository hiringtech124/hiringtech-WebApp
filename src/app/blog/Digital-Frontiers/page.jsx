import Digital from '@/components/bloginner/Digital'
import React from 'react'
import Blog2Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
  return (
    <>
      <Blog2Layout>
        <Digital />
        <BlogContact />
      </Blog2Layout>
    </>
  )
}

export default page