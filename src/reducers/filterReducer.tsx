import type { Actions, Filters } from "../lib/types";

const filterBy = {
  type: "All",
  category: "All",
};

export default function filterReducer(
  state: Filters,
  action: Actions,
): Filters {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        ...state,
        ...action.payload,
      };

    case "RESET":
      return { ...filterBy };

    default:
      return state;
  }
}
