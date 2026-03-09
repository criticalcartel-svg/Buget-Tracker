import { useReducer, type ReactNode } from "react";
import { FormContext } from "./FormContext";
import { initialState, reducer } from "../Reducer";

export default function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <FormContext value={{ state, dispatch }}>{children}</FormContext>;
}
