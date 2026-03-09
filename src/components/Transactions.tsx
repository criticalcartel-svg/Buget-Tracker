import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";
import Form from "./Form";
import useFormContext from "../context/FormContext/useFormContext";
import type React from "react";
import Select from "./Select";
import Options from "./Options";
// import { getToday, id } from "./CustomDate";
// import type { AddTransactionsProps } from "../lib/types";

const categoryList = [
  "Food",
  "Transport",
  "Entertainment",
  "Bills",
  "Freelance",
  "Salary",
  "Shopping",
  "Others",
];

export default function Transactions() {
  const { state, dispatch } = useFormContext();
  const { input, isOn, select } = state;

  return (
    <Form className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Title"
        value={input.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "SET_INPUT", payload: { title: e.target.value } })
        }
      />
      <Input
        type="number"
        placeholder="Amount"
        value={input.amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "SET_INPUT", payload: { amount: e.target.value } })
        }
      />
      <RadioButton
        lable="Income"
        checked={isOn.income}
        onChange={(e) =>
          dispatch({
            type: "SET_CHECKED",
            payload: { income: e.target.checked },
          })
        }
      />
      <RadioButton
        lable="Expense"
        checked={isOn.expense}
        onChange={(e) =>
          dispatch({
            type: "SET_CHECKED",
            payload: { expense: e.target.checked },
          })
        }
      />

      <Select
        value={select.category}
        onChange={(e) =>
          dispatch({
            type: "SET_SELECT",
            payload: { category: e.target.value },
          })
        }
      >
        {categoryList.map((list) => (
          <Options value={list} key={list} />
        ))}
      </Select>

      {/* <Dropdown /> */}
      <Input
        type="date"
        name="date"
        value={input.date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "SET_INPUT", payload: { date: e.target.value } })
        }
      />
      <Button> Add </Button>
    </Form>
  );
}
