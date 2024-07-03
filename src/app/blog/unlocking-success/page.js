import Success from '@/components/bloginner/UnlockingSuccess'
import React from 'react'
import Blog7Layout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
    return (
        <Blog7Layout>
            <div><Success /></div>
            <BlogContact />
        </Blog7Layout>
    )
}

export default page