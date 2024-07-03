import Chain from '@/components/bloginner/Chain'
import React from 'react'
import Blog1Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const Blockchain = () => {
  return (
    <>
      <Blog1Layout>
        <Chain />
        <BlogContact />
      </Blog1Layout>
    </>
  )
}

export default Blockchain
