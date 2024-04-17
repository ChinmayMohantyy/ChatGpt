import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const SignIn = () => {
    const { loginWithRedirect, isLoading, user } = useAuth0();

    const handleLogin = async () => {
        try {
            await loginWithRedirect({
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
                    <button class="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]" data-testid="login-button"
                    onClick={handleLogin}
                    >
                        <div class="relative -top-[1px]">Log in</div>
                    </button>
                )
            }

        </>

    )
}

export default SignIn