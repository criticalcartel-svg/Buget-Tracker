import Transactions from "./components/Transactions";
import { FormProvider } from "./context/FormContext/FormProvider";

export default function App() {
  return (
    <div className="bg-gray-100 center flex-col gap-4">
      <h1>App</h1>
      <FormProvider>
        <Transactions />
      </FormProvider>
    </div>
  );
}
