import type { Actions, TransactionType } from "../lib/types";

export default function transactionType(
  state: TransactionType,
  action: Actions,
): TransactionType {
  switch (action.type) {
    case "SET_TRANSACTION_TYPE":
      return action.payload;

    default:
      return state;
  }
}
