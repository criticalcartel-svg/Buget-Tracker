import {
  useState,
  type BaseSyntheticEvent,
  type ComponentPropsWithRef,
} from "react";

type InputProps = ComponentPropsWithRef<"input">;

export default function Input({ type, placeholder, name }: InputProps) {
  const [state, setState] = useState("");

  function handleInput(e: BaseSyntheticEvent) {
    setState(e.target.value);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => handleInput(e)}
      value={state}
    />
  );
}
