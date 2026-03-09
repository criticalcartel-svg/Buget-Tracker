import type { Actions, InitialStateProps } from "../lib/types";

export const initialState: InitialStateProps = {
  input: {
    title: "",
    amount: "",
    date: "",
  },
  isOn: {
    income: false,
    expense: false,
  },
  select: {
    filterByType: "All",
    filterByCategory: "All",
    category: "",
  },
};

export function reducer(state: InitialStateProps, action: Actions) {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: { ...state.input, ...action.payload },
      };

    case "SET_CHECKED":
      return {
        ...state,
        isOn: {
          ...state.isOn,
          ...action.payload,
        },
      };

    case "addTransaction":
      return {
        ...state,
      };

    case "SET_SELECT":
      return {
        ...state,
        select: {
          ...state.select,
          ...action.payload,
        },
      };

    default:
      throw new Error("Action is undefined");
  }
}
