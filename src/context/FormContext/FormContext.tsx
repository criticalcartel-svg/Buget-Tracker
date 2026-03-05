import { createContext } from "react";

type FormContextProps = {
  input: { name: string; password: string };
  selected: string;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /*setSelected: React.Dispatch<React.SetStateAction<string>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;*/
};

export const FormContext = createContext<FormContextProps | undefined>(
  undefined,
);
