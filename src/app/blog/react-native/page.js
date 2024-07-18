import ReactNative from '@/components/bloginner/Reactnative'
import React from 'react'
import NativeLayout from './layout'
import BlogContact from '@/components/bloginner/BlogContact'

const page = () => {
    return (
        <NativeLayout>
            <div>
                <ReactNative />
                <BlogContact />
            </div>
        </NativeLayout>
    )
}

export default page