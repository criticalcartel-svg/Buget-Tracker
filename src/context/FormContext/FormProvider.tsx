import { useEffect, useReducer, type ReactNode } from "react";
import { FormContext } from "./FormContext";
import { initialState, reducer } from "../Reducer";

export default function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    try {
      const savedTransaction = localStorage.getItem("transactions");
      return savedTransaction ? JSON.parse(savedTransaction) : initial;
    } catch (error) {
      console.error("Failed to load Data from localStorage :", error);
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return <FormContext value={{ state, dispatch }}>{children}</FormContext>;
}
