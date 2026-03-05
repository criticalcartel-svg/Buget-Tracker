import type { ComponentPropsWithoutRef } from "react";

type OptionsProps = ComponentPropsWithoutRef<"option">;

export default function Options({ ...props }: OptionsProps) {
  return <option {...props}>{props.value}</option>;
}
