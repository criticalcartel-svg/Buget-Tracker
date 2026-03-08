import { type ComponentPropsWithoutRef } from "react";
import useFormContext from "../context/FormContext/useFormContext";

type RadioButtonProps = {
  lable: string;
} & ComponentPropsWithoutRef<"input">;

export default function RadioButton({ lable, ...props }: RadioButtonProps) {
  const { isOn, handleRadioButton } = useFormContext();
  const name = lable.toLocaleLowerCase();
  return (
    <p>
      <span>
        <input
          type="checkbox"
          {...props}
          name={name}
          checked={isOn[name as keyof isOn]}
          onChange={handleRadioButton}
        />
      </span>
      {lable}
    </p>
  );
}
