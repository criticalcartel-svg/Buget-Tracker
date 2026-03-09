import { type ComponentPropsWithRef } from "react";

type TransactionInput = {
  name?: string;
  lable?: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ lable, ...props }: TransactionInput) {
  return (
    <>
      {lable ? <p>{lable}</p> : null}
      <input {...props} />
    </>
  );
}
