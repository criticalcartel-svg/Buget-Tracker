import { Link } from "react-router";
import Filters from "../components/Filters";
import TransactionList from "../components/TransactionList";
import useFormContext from "../hooks/useFormContext";
import Button from "../components/atoms/Button";

export default function Transactions() {
  const { state } = useFormContext();
  return (
    <>
      <Filters />

      {state.transactions.map((list) => (
        <TransactionList data={list} key={list.id} />
      ))}

      <Link to="/add">
        <Button types="secondary"> Form </Button>
      </Link>
    </>
  );
}
