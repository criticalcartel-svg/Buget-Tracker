import type { Transaction } from "../lib/types";

function localStorage() {
  const transactions: Transaction[] = localStorage.getItems("transaction");
  return transactions.length === 0 ? [] : JSON.parse(transactions);
}
