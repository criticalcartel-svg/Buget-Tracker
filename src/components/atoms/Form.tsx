import { type ComponentPropsWithoutRef } from "react";

export default function Form({ ...props }: ComponentPropsWithoutRef<"form">) {
  return <form {...props}>{props.children}</form>;
}
