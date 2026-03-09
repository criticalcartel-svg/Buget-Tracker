import { useReducer } from "react";
import Form from "./Form";
import Options from "./Options";
import Select from "./Select";
import { initialState, reducer } from "../context/Reducer";

const filterByType = ["All", "Income", "Expense"];

const filterByCategory = [
  "All",
  "Food",
  "Transport",
  "Entertainment",
  "Bills",
  "Freelance",
  "Salary",
  "Shopping",
  "Others",
];

export default function Filters() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { type, category } = state;
  return (
    <Form className="flex gap-50">
      <h2>
        <span>Type : {""}</span>
        <Select
          value={type}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({ type: "SET_TYPE", payload: e.target.value })
          }
        >
          {filterByType.map((type) => (
            <Options value={type} key={type} />
          ))}
        </Select>
      </h2>

      <h2>
        <span>Categories : {""}</span>
        <Select
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({ type: "SET_CATEGORY", payload: e.target.value })
          }
        >
          {filterByCategory.map((category) => (
            <Options value={category} key={category} />
          ))}
        </Select>
      </h2>
    </Form>
  );
}
