import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Signup = () => {
    const { loginWithRedirect, isLoading, user } = useAuth0();

    const handleSignUp = async () => {
        try {
            await loginWithRedirect({
                authorizationParams:{
                    screen_hint:"signup",
                },
                appState: {
                    returnTo: "/chat",
                },
            });
        } catch (error) {
            console.log(error, "error");
        }

    };
    return (
        <>
            {!isLoading && !user &&
                (
                    <button class="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
                    onClick={handleSignUp}
                    >
                        <div class="relative -top-[1px]">Sign up</div>
                    </button>
                )
            }
        </>

    )
}

export default Signup