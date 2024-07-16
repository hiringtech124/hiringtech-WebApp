import BlogContact from '@/components/bloginner/BlogContact'
import Reactblog from '@/components/bloginner/Reactblog'
import React from 'react'
import ReactLayout from './layout'

const page = () => {
    return (
        <div>
            <ReactLayout>
                <Reactblog />
                <BlogContact />
            </ReactLayout>
        </div>
    )
}

export default page