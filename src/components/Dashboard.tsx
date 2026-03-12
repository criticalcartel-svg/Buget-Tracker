import { Link } from "react-router";
import useFormContext from "../hooks/useFormContext";
import Button from "./atoms/Button";

export default function Dashboard() {
  const { state } = useFormContext();
  const { transactions } = state;

  if (!transactions) {
    return <p>Loading...</p>;
  }

  const totalTransactions = transactions.reduce(
    (acc, cur) => acc + Number(cur.amount),
    0,
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.transactionType === "income")
    .reduce((acc, cur) => acc + Number(cur.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.transactionType === "expense")
    .reduce((acc, cur) => acc + Number(cur.amount), 0);

  return (
    <div>
      <p>
        <span>Income : </span>
        {totalIncome}
      </p>
      <p>
        <span>Expense : </span>
        {totalExpense}
      </p>
      <p>
        <span>Total : </span>
        {totalTransactions}
      </p>

      <Link to="/transactions">
        <Button types="secondary"> Transactions </Button>
      </Link>
    </div>
  );
}
