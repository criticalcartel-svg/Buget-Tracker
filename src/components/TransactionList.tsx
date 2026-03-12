import type { Transaction } from "../lib/types";

export default function TransactionList({ data }: { data: Transaction }) {
  return (
    <>
      <ul className="flex gap-4">
        <li>{data.title}</li>
        <li>{data.amount}</li>
        <li>{data.transactionType}</li>
        <li>{data.categoryType}</li>
        <li>{data.date}</li>
      </ul>
    </>
  );
}
