import React from 'react'
import SignIn from '../component/authComponent/signin';
import Signup from '../component/authComponent/signup';
import "../container/styles.css";

const AuthContainer = () => {
    return (
        <div className="authContainer">
            <h2 className="text">Get started</h2>
            <div class="mt-5 w-full max-w-[440px]">
                <div class="grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
                    <SignIn />
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default AuthContainer;