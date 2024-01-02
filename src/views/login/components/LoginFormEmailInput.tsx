import React from "react";
import {RegisterOptions, useFormContext} from "react-hook-form";
import {InputReactHook} from "@/lib";

interface IProps {
  id: string;
  label?: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

const LoginFormEmailInput = (props: IProps) => {
  const {control} = useFormContext();
  const {id, label} = props;

  return (
    <InputReactHook
      id={id}
      control={control}
      label={label}
      classNameContainer="w-full"
      classNameInput="border-[1px] disabled:bg-grey_300 h-[40px] border-[#CCCCCC] py-1 px-2 rounded mt-2 text-[14px] w-full"
      classNameLabel="text-[14px]"
      tabIndex={1}
      autoComplete='off'
      type='text'
      classNameHint="text-red-500 text-[12px] mt-2"
      isRequired
      rules={{
        validate: (value) => {
          if (!value) return "ایمیل را وارد نمایید";
          return true;
        },
        pattern: {
          value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          message: "فرمت ایمیل صحیح نمی باشد"
        }
      }}
    />
  );
};

export default LoginFormEmailInput;
