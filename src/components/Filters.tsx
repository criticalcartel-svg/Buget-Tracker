import Form from "./atoms/Form";
import Options from "./atoms/Options";
import Select from "./atoms/Select";
import useFormContext from "../hooks/useFormContext";

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
  const { state, dispatch } = useFormContext();
  const { filters } = state;
  return (
    <Form className="flex gap-50">
      <h2>
        <span>Type : {""}</span>
        <Select
          value={filters.type}
          onChange={(e) =>
            dispatch({
              type: "SET_FILTERS",
              payload: { type: e.target.value },
            })
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
          value={filters.category}
          onChange={(e) =>
            dispatch({
              type: "SET_FILTERS",
              payload: { category: e.target.value },
            })
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
