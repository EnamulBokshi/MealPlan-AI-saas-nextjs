import React from 'react'
import { SignUp } from '@clerk/nextjs'
function SignUpComponent() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <SignUp signInFallbackRedirectUrl={'/create-profile'}/>
    </div>
  )
}

export default SignUpComponent