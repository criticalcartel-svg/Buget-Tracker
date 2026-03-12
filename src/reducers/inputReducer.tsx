import type { Actions, TransactionInput } from "../lib/types";

const input = { title: "", amount: "", date: "" };

export default function inputReducer(
  state: TransactionInput,
  action: Actions,
): TransactionInput {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, ...action.payload };

    case "RESET":
      return { ...input };

    default:
      return state;
  }
}
