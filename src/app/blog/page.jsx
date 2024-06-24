import Blog from '@/components/blog/Blog'
import Blog2 from '@/components/blog/Blog2'
import React from 'react'
import InsightLayout from './layout'

const page = () => {
  return (
    <>
      <InsightLayout>
        {/* <div>page</div> */}
        {/* <Blog /> */}
        <Blog2 />
      </InsightLayout>
    </>
  )
}

export default page
