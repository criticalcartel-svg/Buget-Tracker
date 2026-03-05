import { useState } from "react";
import { FormContext } from "./FormContext";

type SetInputProps = {
  name: string;
  password: string;
};

function FormProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState("boyant");
  const [input, setInput] = useState<SetInputProps>({ name: "", password: "" });

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <FormContext.Provider
      value={{ selected, handleSelect, input, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider, FormContext };
