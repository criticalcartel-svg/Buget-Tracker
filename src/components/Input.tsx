import { type ComponentPropsWithRef } from "react";

type InputProps = {
  name?: string;
  lable?: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ lable, ...props }: InputProps) {
  return (
    <>
      {lable ? <p>{lable}</p> : null}
      <input {...props} />
    </>
  );
}
