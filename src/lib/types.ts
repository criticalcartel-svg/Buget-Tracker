export type InputProps = { title: string; amount: string; date: string };

export type CheckboxProps = { income: boolean; expense: boolean };

export type SelectProps = {
  filterByType: string;
  filterByCategory: string;
  category: string;
};

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
  input: InputProps;
  isOn: CheckboxProps;
  select: SelectProps;
};

export type Actions =
  | { type: "SET_INPUT"; payload: Partial<InputProps> }
  | { type: "SET_CHECKED"; payload: Partial<CheckboxProps> }
  | { type: "addTransaction"; payload: AddTransactionsProps[] }
  | { type: "SET_SELECT"; payload: Partial<SelectProps> };
