import type { Actions, Transaction } from "../lib/types";

const transactions: Transaction[] = [];

export default function transactionReducer(
  state: Transaction[] = transactions,
  action: Actions,
): Transaction[] {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];

    case "REMOVE_TRANSACTION":
      return state.filter((t) => t.id !== action.payload);

    case "UPDATE_TRANSACTION":
      return state.filter((t) =>
        t.id === action.payload ? action.payload : t,
      );

    case "RESET":
      return state;

    default:
      return state;
  }
}
