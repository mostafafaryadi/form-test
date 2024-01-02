import React, {ForwardedRef, forwardRef} from "react";
import {Control, RegisterOptions, useController} from "react-hook-form";
import {IInput} from "@/lib/input/Input";
import {Input} from "@/lib";

interface InterfaceInputReactHook extends IInput {
  id: string;
  control: Control<any>;
  defaultValue?: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  showErrorTouched?: boolean;
  maxLength?: number;
}

const InputReactHook = forwardRef((props: InterfaceInputReactHook, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    id,
    control,
    defaultValue,
    rules,
    showErrorTouched = false,
    ...rest
  } = props;

  const {
    field,
    fieldState: {error, isTouched},
  } = useController({
    name: id,
    control,
    defaultValue,
    rules,
  });

  const errorCondition = showErrorTouched ? error && isTouched : error;

  return (
    <Input
      {...rest}
      ref={ref}
      id={field.name}
      value={field.value || ""}
      onChange={(event) => {
        field.onChange({
          ...event,
          target: {
            ...event.target,
            // value: finalValue,
            value: event.target.value,
          },
        });
      }}
      onBlur={field.onBlur}
      hintText={errorCondition ? error?.message || "" : ""}
    />
  );
});

InputReactHook.displayName = "InputReactHook";

export default InputReactHook;
