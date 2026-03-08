import { type ComponentPropsWithRef } from "react";
import useFormContext from "../context/FormContext/useFormContext";

type InputProps = {
  name: string;
  lable?: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ name, lable, ...props }: InputProps) {
  const { input, handleChange } = useFormContext();

  const valueKey = input[name as keyof input];
  return (
    <>
      {lable ? <p>{lable}</p> : null}
      <input name={name} {...props} value={valueKey} onChange={handleChange} />
    </>
  );
}
