import Options from "./Options";
import { type ComponentPropsWithoutRef } from "react";
import useFormContext from "../context/FormContext/useFormContext";

type DropdownProps = ComponentPropsWithoutRef<"select">;

const categoryList = [
  "Food",
  "Transport",
  "Entertainment",
  "Bills",
  "Freelance",
  "Salary",
  "Shopping",
  "Others",
];

export default function Dropdown(props: DropdownProps) {
  const { selected, handleSelect } = useFormContext();
  return (
    <select {...props} value={selected} onChange={handleSelect}>
      {categoryList.map((category) => (
        <Options value={category} key={category} />
      ))}
    </select>
  );
}
