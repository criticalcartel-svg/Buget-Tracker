import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import FormProvider from "./context/FormProvider";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import TransactionForm from "./pages/TransactionForm";
import TransactionList from "./pages/Transactions";

export default function App() {
  return (
    <div className="bg-gray-100 center flex-col gap-4">
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<TransactionForm />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}
