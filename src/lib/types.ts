export type InputProps = { title: ""; amount: ""; date: "" };

export type CheckboxProps = { income: false; expense: false };

export type AddTransactionsProps = {
  id: number;
  title: string;
  amount: string;
  isOn: {
    income: boolean;
    expense: boolean;
  };
  selected: string;
  date: string;
};

export type InitialStateProps = {
  type: string;
  category: string;
};

export type Actions =
  | { type: "SET_TYPE"; payload: string }
  | { type: "SET_CATEGORY"; payload: string };
