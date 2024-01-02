import React from 'react';

interface IProps {
}

const LoginFormSubmit = (props: IProps) => {
  return (
    <button
      type='submit'
      className="text-[14px] !m-0 bg-blue-500 text-white w-full rounded h-[52px] !py-auto"
    >
      ثبت
    </button>
  )
}

export default LoginFormSubmit;