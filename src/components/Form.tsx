import type { BaseSyntheticEvent } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Options from "./Options";

export type Transactions = {
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: Date;
  id: number;
};

function handleSubmit(event: BaseSyntheticEvent) {
  event.preventDefault();
}

export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="email" />
      <Input type="text" placeholder="category" />
      <Dropdown>
        <Options value="income" />
        <Options value="expense" />
      </Dropdown>
      <Button type="submit">Add</Button>
    </form>
  );
}
