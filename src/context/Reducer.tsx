import type { Actions, InitialStateProps } from "../lib/types";

export const initialState: InitialStateProps = {
  type: "All",
  category: "All",
};

export function reducer(state: InitialStateProps, action: Actions) {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    default:
      throw new Error("Action is undefined");
  }
}
