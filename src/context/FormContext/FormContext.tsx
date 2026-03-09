// import { createContext } from "react";
// import type {
//   Transaction,
//   TransactionType,
//   TransactionInput,
// } from "./FormProvider";

// type FormContextProps = {
//   input: TransactionInput;
//   selected: string;
//   transactionType: TransactionType;
//   handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   setSelected: React.Dispatch<React.SetStateAction<string>>;
//   setInput: React.Dispatch<React.SetStateAction<TransactionInput>>;
//   settransactionType: React.Dispatch<React.SetStateAction<TransactionType>>;
//   transaction: Transaction[];
//   setTransaction: React.Dispatch<React.SetStateAction<Transaction[]>>;
// };

// export const FormContext = createContext<FormContextProps | undefined>(
//   undefined,
// );

import { createContext } from "react";
import type { Actions, AppState } from "../../lib/types";

type BugetTrackerProps = {
  state: AppState;
  dispatch: React.ActionDispatch<[action: Actions]>;
};

export const FormContext = createContext<BugetTrackerProps | undefined>(
  undefined,
);
