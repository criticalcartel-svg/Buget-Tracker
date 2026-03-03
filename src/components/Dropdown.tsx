import {
  useState,
  type BaseSyntheticEvent,
  type ComponentPropsWithoutRef,
} from "react";

type DropdownProps = ComponentPropsWithoutRef<"select">;

export default function Dropdown({ name, id, children }: DropdownProps) {
  const [state, setState] = useState("expense");

  function handleSelect(e: BaseSyntheticEvent) {
    setState(e.target.value);
  }

  return (
    <select name={name} id={id} value={state} onChange={handleSelect}>
      {children}
    </select>
  );
}
