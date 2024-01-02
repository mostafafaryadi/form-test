import {DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import classNames from "classnames";

export interface IInputClassNames {
  classNameLabel?: string;
  classNameInput?: string;
  classNameContainer?: string;
  classNameHint?: string;
  classNameInputContainer?: string;
}

export interface IInput
  extends DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, "className">, HTMLInputElement>,
    IInputClassNames {
  id: string;
  label?: string | JSX.Element;
  hintText?: string;
  isRequired?: boolean;
}

const Input = forwardRef((props: IInput, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    id,
    classNameContainer,
    classNameInput = "",
    classNameInputContainer,
    classNameLabel,
    classNameHint,
    label,
    hintText,
    isRequired,
    ...rest
  } = props;

  const input = classNames({
    "w-full bg-transparent focus:outline-none": true,
    [classNameInput]: classNameInput,
  });

  return (
    <div className={classNameContainer}>
      {label ? (
        <label htmlFor={id} className={classNameLabel}>
          {label} {isRequired ? <span className="text-red-600">*</span> : null}
        </label>
      ) : null}
      <div className={classNameInputContainer}>
        <input ref={ref} id={id} name={id} className={input} {...rest} />
      </div>
      {hintText ? <p className={classNameHint}>{hintText}</p> : null}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
