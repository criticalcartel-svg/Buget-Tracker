import { type ComponentPropsWithoutRef } from "react";

type RadioButtonProps = {
  lable: string;
} & ComponentPropsWithoutRef<"input">;

export default function RadioButton({ lable, ...props }: RadioButtonProps) {
  return (
    <p>
      <span>
        <input type="checkbox" {...props} />
      </span>
      {lable}
    </p>
  );
}
