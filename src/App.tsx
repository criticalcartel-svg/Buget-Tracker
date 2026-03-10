import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import Transactions from "./components/Transactions";
import FormProvider from "./context/FormContext/FormProvider";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <div className="bg-gray-100 center flex-col gap-4">
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<Transactions />} />
            <Route path="/filters" element={<Filters />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}
