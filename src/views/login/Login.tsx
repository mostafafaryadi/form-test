import React from 'react';
import LoginForm from './components/LoginForm';

interface IProps {
}

const Login = (props: IProps) => {
  return (
    <>
      <div className='flex h-screen justify-center items-center'>

        <div
          className="flex flex-col w-full max-w-[440px] mx-[20px] rounded-[20px] shadow-[0_0_61px_0_rgba(187,188,188,0.25)] px-[16px] md:px-[40px] py-[30px]"
        >
          <LoginForm/>
        </div>
      </div>
    </>
  )
}

export default Login;