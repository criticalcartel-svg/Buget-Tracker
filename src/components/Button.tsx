import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  onclick?: () => void;
};

export default function Button({
  onclick,
  type,
  children,
  className,
}: ButtonProps) {
  return (
    <button type={type} onClick={onclick} className={className}>
      {children}
    </button>
  );
}
