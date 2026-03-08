import { useState } from "react";
import { FormContext } from "./FormContext";

export type InputProps = { title: ""; amount: ""; date: "" };

export type CheckboxProps = { income: false; expense: false };

export type AddTransactionsProps = {
  id: number;
  title: string;
  amount: string;
  isOn: {
    income: boolean;
    expense: boolean;
  };
  selected: string;
  date: string;
};

function FormProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState<InputProps>({
    title: "",
    amount: "",
    date: "",
  });
  const [isOn, setIsOn] = useState<CheckboxProps>({
    income: false,
    expense: false,
  });
  const [transaction, setTransaction] = useState<AddTransactionsProps[]>([]);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>) {
    setIsOn((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  }

  return (
    <FormContext.Provider
      value={{
        selected,
        setSelected,
        handleSelect,
        input,
        setInput,
        handleChange,
        isOn,
        setIsOn,
        handleRadioButton,
        transaction,
        setTransaction,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider, FormContext };
