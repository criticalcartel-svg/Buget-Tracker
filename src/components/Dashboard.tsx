import useFormContext from "../context/FormContext/useFormContext";

export default function Dashboard() {
  const { state, dispatch } = useFormContext();
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
      {transactions.map((list) => (
        <div className="flex">
          <p>{list.title}</p>
          <p>{list.amount}</p>
          <p>{list.transactionType}</p>
          <p>{list.categoryType}</p>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_TRANSACTION", payload: list.id })
            }
          >
            &times;
          </button>
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
        </div>
      ))}
    </div>
  );
}
