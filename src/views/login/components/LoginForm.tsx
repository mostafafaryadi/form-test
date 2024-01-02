import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import LoginFormSubmit from './LoginFormSubmit';
import LoginFormMobileInput from './LoginFormMobileInput';
import LoginFormPasswordInput from "@/views/login/components/LoginFormPasswordInput";
import LoginFormEmailInput from "@/views/login/components/LoginFormEmailInput";

interface IProps {
}

interface ILoginForm {
  mobile: string;
  email: string,
  password: string
}



const LoginForm = (props: IProps) => {

  const [formState, setFormState] = useState(false)
  const [data, setData] = useState<ILoginForm>({
    mobile: '',
    password: '',
    email: ''
  })



  const method = useForm<ILoginForm>({
    defaultValues: {
      mobile: '',
      email: '',
      password: ''
    },
    mode: "all",
  });

  const {
    handleSubmit,
    formState: {isSubmitting},
  } = method;

  const onSubmit = async (payload: ILoginForm) => {
    setFormState(true)
    setData(payload)
  }

  return (
    <>
      <FormProvider {...method}>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[20px] font-bold py-[20px]">فرم تستی</h2>
          <div className="flex py-[20px]">
            <LoginFormMobileInput label="شماره موبایل" id="mobile" />
          </div>
          <div className="flex py-[20px]">
            <LoginFormEmailInput label="ایمیل" id="email" />
          </div>
          <div className="flex py-[20px]">
            <LoginFormPasswordInput label="رمز عبور" id="password" />
          </div>
          <div className="flex">
            <LoginFormSubmit />
          </div>
          {
            formState && (
              <div className='py-[10px]'>
                <h4>آخرین دیتای ارسال شده:</h4>
                <div>
                  Mobile:
                  {data.mobile}
                </div>
                <div>
                  Email:
                  {data.email}
                </div>
                <div>
                  Password:
                  {data.password}
                </div>
              </div>
            )
          }
        </form>
      </FormProvider>
    </>
  )
}

export default LoginForm;