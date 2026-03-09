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
  const { select } = state;
  return (
    <Form className="flex gap-50">
      <h2>
        <span>Type : {""}</span>
        <Select
          value={select.filterByType}
          onChange={(e) =>
            dispatch({
              type: "SET_SELECT",
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
          value={select.filterByCategory}
          onChange={(e) =>
            dispatch({
              type: "SET_SELECT",
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
