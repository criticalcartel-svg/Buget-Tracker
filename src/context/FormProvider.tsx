import { useEffect, useReducer, type ReactNode } from "react";
import { FormContext } from "./FormContext";
import rootReducer, { initialState } from "../reducers/rootReducer";

export default function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState, (initial) => {
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
