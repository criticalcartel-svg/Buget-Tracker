export type TransactionInput = { title: string; amount: string; date: string };

export type TransactionType = "income" | "expense";

export type Category = string;

export type Filters = {
  type: string;
  category: string;
};

export type Transaction = {
  id: number;
  title: string;
  amount: string;
  transactionType: string;
  categoryType: string;
  date: string;
};

export type AppState = {
  input: TransactionInput;
  type: TransactionType;
  category: string;
  filters: Filters;
  transactions: Transaction[];
};

export type Actions =
  | { type: "SET_INPUT"; payload: Partial<TransactionInput> }
  | { type: "SET_TRANSACTION_TYPE"; payload: TransactionType }
  | { type: "SET_CATEGORY"; payload: Category }
  | { type: "SET_FILTERS"; payload: Partial<Filters> }
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "REMOVE_TRANSACTION"; payload: number }
  | { type: "UPDATE_TRANSACTION"; payload: number }
  | { type: "RESET" };
