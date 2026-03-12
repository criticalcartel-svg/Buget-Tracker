import { createContext } from "react";
import type { Actions, AppState } from "../lib/types";

type BugetTrackerProps = {
  state: AppState;
  dispatch: React.ActionDispatch<[action: Actions]>;
};

export const FormContext = createContext<BugetTrackerProps | undefined>(
  undefined,
);
