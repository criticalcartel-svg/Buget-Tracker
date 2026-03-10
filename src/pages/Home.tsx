import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Welcome to react Budget Tracker</h1>
      <Link to="/dashboard">
        <button className="px-4 py-2 bg-blue-500 font-bold text-sm text-gray-50 rounded-md">
          Visit Dashboard
        </button>
      </Link>
    </>
  );
}
