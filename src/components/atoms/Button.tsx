import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  types: "primary" | "secondary";
};

export default function Button({ types, ...props }: ButtonProps) {
  return (
    <button {...props} className={`px-4 py-2 rounded-md ${types}`}>
      {props.children}
    </button>
  );
}
