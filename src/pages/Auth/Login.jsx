import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {
  return (
    <div>
        <div className='lg: w-[70%] h-3/4 md:h-full flex flex-col'>
            <h1 className='text-xl font-semibold text-black'>Welcome Back</h1>
            <p className='text-xs text-state-700 mt-[5px] mb-6'>
                Please enter your details to log in
            </p>
        </div>
    </div>
  )
}

export default Login