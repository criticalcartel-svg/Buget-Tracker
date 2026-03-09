import Form from "./Form";
import Options from "./Options";
import Select from "./Select";
import useFormContext from "../context/FormContext/useFormContext";

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
          value={filters.filterByType}
          onChange={(e) =>
            dispatch({
              type: "SET_FILTERS",
              payload: { filterByType: e.target.value },
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
          value={filters.filterByCategory}
          onChange={(e) =>
            dispatch({
              type: "SET_FILTERS",
              payload: { filterByCategory: e.target.value },
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
