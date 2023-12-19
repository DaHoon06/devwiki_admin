import React, {InputHTMLAttributes, ReactElement} from "react";

type BaseType = string | number | readonly string[] | undefined;
interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  input: T;
}
export const Input = <T extends BaseType>({ type, input, onChange, ...props }: InputProps<T>): ReactElement => {
  return <input {...props} type={type} onChange={onChange} value={input} />
}

