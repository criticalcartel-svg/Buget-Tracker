import { createContext } from "react";
import type {
  AddTransactionsProps,
  CheckboxProps,
  InputProps,
} from "./FormProvider";

type FormContextProps = {
  input: InputProps;
  selected: string;
  isOn: CheckboxProps;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setInput: React.Dispatch<React.SetStateAction<InputProps>>;
  setIsOn: React.Dispatch<React.SetStateAction<CheckboxProps>>;
  transaction: AddTransactionsProps[];
  setTransaction: React.Dispatch<React.SetStateAction<AddTransactionsProps[]>>;
};

export const FormContext = createContext<FormContextProps | undefined>(
  undefined,
);
