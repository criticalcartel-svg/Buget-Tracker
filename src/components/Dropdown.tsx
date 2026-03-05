import { type ComponentPropsWithoutRef } from "react";
import Options from "./Options";
import useFormContext from "../context/FormContext/useFormContext";

type DropdownProps = ComponentPropsWithoutRef<"select">;

export default function Dropdown(props: DropdownProps) {
  const { selected, handleSelect } = useFormContext();
  return (
    <select {...props} value={selected} onChange={handleSelect}>
      <Options value="iverson" />
      <Options value="boyant" />
    </select>
  );
}
