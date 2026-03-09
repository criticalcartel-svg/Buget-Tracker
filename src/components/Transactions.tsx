import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";
import Form from "./Form";
import useFormContext from "../context/FormContext/useFormContext";
import type React from "react";
import Select from "./Select";
import Options from "./Options";
import type { Transaction } from "../lib/types";
import { getToday, id } from "./CustomDate";
// import type { Transaction } from "../lib/types";

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
  const { input, type, category } = state;

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: id(),
      date: getToday(),
      amount: input.amount,
      title: input.title,
      transactionType: type,
      categoryType: category,
    };

    dispatch({ type: "ADD_TRANSACTIONS", payload: newTransaction });
    dispatch({ type: "RESET" });
  }

  return (
    <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        checked={type === "income"}
        onChange={(e) =>
          dispatch({
            type: "SET_TRANSACTION_TYPE",
            payload: e.target.value ? "income" : "expense",
          })
        }
      />
      <RadioButton
        lable="Expense"
        checked={type === "expense"}
        onChange={(e) =>
          dispatch({
            type: "SET_TRANSACTION_TYPE",
            payload: e.target.checked ? "expense" : "income",
          })
        }
      />

      <Select
        value={category}
        onChange={(e) =>
          dispatch({
            type: "SET_CATEGORY",
            payload: e.target.value,
          })
        }
      >
        {categoryList.map((list) => (
          <Options value={list} key={list} />
        ))}
      </Select>

      <Input
        type="date"
        name="date"
        value={input.date}
        onChange={(e) =>
          dispatch({ type: "SET_INPUT", payload: { date: e.target.value } })
        }
      />
      <Button> Add </Button>
    </Form>
  );
}
