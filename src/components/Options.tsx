import type { ComponentPropsWithoutRef } from "react";

type OptionsProps = ComponentPropsWithoutRef<"option">;

export default function Options({ value }: OptionsProps) {
  return <option value={value}>{value}</option>;
}
