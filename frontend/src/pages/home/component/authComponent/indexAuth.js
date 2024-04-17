import React from 'react'
import AuthContainer from '../../container/authContainer'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
const Index = () => {
    return (
        <div class="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6">
            <nav class="flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8">
                <h1>
                    <div class="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
                        <div>ChatGPT&hairsp;<span class="font-circle">V4</span></div>
                    </div>
                </h1>
            </nav>
        <AuthContainer />
            <div class="mt-10 flex flex-col justify-center ">
                <div class="flex justify-center text-gray-300 md:mb-3">
                <FlutterDashIcon/> ChinmayAI
                </div>
                <div class="flex gap-3 py-3 text-xs text-token-text-tertiary"><a rel="noreferrer" class="cursor-pointer font-normal underline" target="_blank" href="#">Terms of use</a><span class="text-token-text-tertiary">|</span><a rel="noreferrer" class="cursor-pointer font-normal underline" target="_blank" href="#">Privacy policy</a></div>
            </div>
        </div>
    )
}

export default Index;