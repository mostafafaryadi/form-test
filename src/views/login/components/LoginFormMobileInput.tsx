import React from "react";
import {InputReactHook} from "@/lib";
import {useFormContext} from "react-hook-form";

interface IProps {
  id: string;
  label?: string;
}

const LoginFormMobileInput = (props: IProps) => {
  const {control} = useFormContext();
  const {id, label} = props;

  return (
      <InputReactHook
        id={id}
        control={control}
        label={label}
        classNameContainer="w-full"
        classNameInput="border-[1px] h-[40px] border-[#CCCCCC] py-1 px-2 rounded mt-2 text-[14px] w-full"
        classNameLabel="text-[14px]"
        tabIndex={1}
        autoComplete='off'
        classNameHint="text-red-500 text-[12px] mt-2"
        isRequired
        rules={{
          required: {
            value: true,
            message: "لطفا شماره موبایل را وارد نمایید",
          },
          pattern: {
            value: /(^(989|09|9|۹۸۹|۰۹|۹))(\d{9}$|[۰۱۲۳۴۵۶۷۸۹]{9}$)/,
            message: "فرمت شماره تلفن صحیح نمی باشد",
          },
        }}
      />
  );
};

export default LoginFormMobileInput;
