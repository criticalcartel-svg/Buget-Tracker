import type { Actions, Category } from "../lib/types";

export default function categoryTypeReducer(
  state: Category,
  action: Actions,
): Category {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;

    case "RESET":
      return state;

    default:
      return state;
  }
}
