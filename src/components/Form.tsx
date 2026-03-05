import Input from "./Input";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { FormProvider } from "../context/FormContext/FormProvider";

export default function Form() {
  return (
    <form>
      <FormProvider>
        <Input type="text" placeholder="Enter Name Here" name="name" />
        <Input
          type="password"
          placeholder="Enter Password Here"
          name="password"
        />
        <Dropdown />
        <Button> Add </Button>
      </FormProvider>
    </form>
  );
}
