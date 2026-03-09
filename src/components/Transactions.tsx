import Input from "./Input";
import Button from "./Button";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import Form from "./Form";
import useFormContext from "../context/FormContext/useFormContext";
import { getToday, id } from "./CustomDate";
import type { AddTransactionsProps } from "../lib/types";

export default function Transactions() {
  const {
    input,
    setInput,
    isOn,
    setIsOn,
    selected,
    setSelected,
    setTransaction,
  } = useFormContext();

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTransaction: AddTransactionsProps = {
      id: id(),
      title: input.title,
      amount: input.amount,
      isOn,
      selected,
      date: input.date || getToday(),
    };

    setTransaction((prev) => [...prev, newTransaction]);

    setInput({ title: "", amount: "", date: "" });
    setIsOn({ income: false, expense: false });
    setSelected("");

    console.log(newTransaction);
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input type="text" placeholder="Title" name="title" />
      <Input type="number" placeholder="Amount" name="amount" />
      <RadioButton lable="Income" />
      <RadioButton lable="Expense" />
      <Dropdown />
      <Input type="date" name="date" />
      <Button> Add </Button>
    </Form>
  );
}
