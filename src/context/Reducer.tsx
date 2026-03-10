import type { Actions, AppState } from "../lib/types";

export const initialState: AppState = {
  input: {
    title: "",
    amount: "",
    date: "",
  },
  type: "income",
  category: "",
  filters: {
    filterByType: "All",
    filterByCategory: "All",
  },
  transactions: [],
};

export function reducer(state: AppState, action: Actions): AppState {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: { ...state.input, ...action.payload },
      };

    case "SET_TRANSACTION_TYPE":
      return {
        ...state,
        type: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "SET_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };

    case "RESET":
      return {
        ...initialState,
        transactions: state.transactions,
      };

    default:
      throw new Error("Action is undefined");
  }
}
