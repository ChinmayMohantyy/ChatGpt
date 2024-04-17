import React from 'react'

const About = () => {
    return (
        <div class="relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8 bg-amber-50">
            <nav class="left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8">
                <h1>
                    <div class="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
                        <div>Venture <span class="font-circle">AI</span></div>
                    </div>
                </h1>
            </nav>
            <div class="flex flex-col text-[32px] leading-[1.2] md:text-[40px]" aria-hidden="true">
                <div class="absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10 opacity-100 translate-y-[calc(-50%-1em)] delay-[500ms]">
                    <div class="relative font-bold">Artificial intelligence</div>
                    <div class="relative">
                        <div class="absolute left-0 top-0 max-w-[650px] transition-opacity duration-300"><span class="inline transition-opacity duration-300">for</span><span class="inline transition-opacity duration-300"> my</span><span class="inline transition-opacity duration-300"> fantasy</span><span class="inline transition-opacity duration-300"> AI</span><span class="inline transition-opacity duration-300"> team</span><span class="inline-block font-circle delay-[300ms] scale-0 transition-transform duration-300"><span>&hairsp;</span>●</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About