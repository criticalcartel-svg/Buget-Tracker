import type { Actions, AppState } from "../lib/types";
import inputReducer from "./inputReducer";
import transactionType from "./transactionTypeReducer";
import transactionReducer from "./transactionReducer";
import filterReducer from "./filterReducer";
import categoryTypeReducer from "./categoryTypeReducer";

export const initialState: AppState = {
  input: {
    title: "",
    amount: "",
    date: "",
  },
  type: "income",
  category: "",
  filters: {
    type: "All",
    category: "All",
  },
  transactions: [],
};

export default function rootReducer(
  state: AppState,
  action: Actions,
): AppState {
  return {
    input: inputReducer(state.input, action),
    type: transactionType(state.type, action),
    transactions: transactionReducer(state.transactions, action),
    category: categoryTypeReducer(state.category, action),
    filters: filterReducer(state.filters, action),
  };
}
