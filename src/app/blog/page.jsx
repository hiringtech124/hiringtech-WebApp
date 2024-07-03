import Blog from '@/components/blog/Blog'
import Blog2 from '@/components/blog/Blog2'
import React from 'react'
import InsightLayout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
  return (
    <>
      <InsightLayout>
        {/* <div>page</div> */}
        {/* <Blog /> */}
        <Blog2 />
        <BlogContact />
      </InsightLayout>
    </>
  )
}

export default page
