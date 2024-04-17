import React from 'react'
import About from '../component/about'
import IndexAuth from '../component/authComponent/indexAuth'

const Index = () => {
    return (
        <>
            <div class="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
                {/* rightside aboutus page */}
                <About />
                {/* Getstarted like login signup button page */}
                <IndexAuth />
            </div>

        </>

    )
}

export default Index