// import { createContext } from "react";
// import type {
//   AddTransactionsProps,
//   CheckboxProps,
//   InputProps,
// } from "./FormProvider";

// type FormContextProps = {
//   input: InputProps;
//   selected: string;
//   isOn: CheckboxProps;
//   handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   setSelected: React.Dispatch<React.SetStateAction<string>>;
//   setInput: React.Dispatch<React.SetStateAction<InputProps>>;
//   setIsOn: React.Dispatch<React.SetStateAction<CheckboxProps>>;
//   transaction: AddTransactionsProps[];
//   setTransaction: React.Dispatch<React.SetStateAction<AddTransactionsProps[]>>;
// };

// export const FormContext = createContext<FormContextProps | undefined>(
//   undefined,
// );

import { createContext } from "react";
import type { Actions, InitialStateProps } from "../../lib/types";

type BugetTrackerProps = {
  state: InitialStateProps;
  dispatch: React.ActionDispatch<[action: Actions]>;
};

export const FormContext = createContext<BugetTrackerProps | undefined>(
  undefined,
);
