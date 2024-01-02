import { InputReactHook } from "@/lib";
import React, {useState} from "react";
import {useFormContext} from "react-hook-form";

interface IProps {
  id: string;
  label?: string;
}

const LoginFormPasswordInput = (props: IProps) => {
  const {control} = useFormContext();
  const {id, label} = props;

  return (
    <InputReactHook
      id={id}
      control={control}
      label={label}
      classNameContainer="w-full"
      classNameInput="h-[40px] py-1 pr-2 pl-1 text-[14px] w-full"
      classNameInputContainer="flex border-[1px] border-[#CCCCCC] py-1 pr-1 pl-2 rounded mt-2  w-full"
      classNameLabel="text-[14px]"
      tabIndex={1}
      classNameHint="text-red-500 text-[12px] mt-2"
      type={'password'}
      autoComplete='new-password'
      isRequired
      rules={{
        validate: (value) => {
          if (!value) return "رمز عبور خود را وارد کنید";
          return true;
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: "رمز عبور باید شامل حروف بزرگ و کوچک، عدد، کاراکتر ویژه و حداقل طول آن هشت کاراکتر باشد"
        }
      }}
    />
  );
};

export default LoginFormPasswordInput;
