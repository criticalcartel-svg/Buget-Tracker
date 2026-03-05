import { type ComponentPropsWithoutRef } from "react";
import useFormContext from "../context/FormContext/useFormContext";

export default function Input({ ...props }: ComponentPropsWithoutRef<"input">) {
  const { input, handleChange } = useFormContext();
  return (
    <input
      {...props}
      value={input[props.name as keyof input]}
      onChange={handleChange}
    />
  );
}
