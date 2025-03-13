import { InputType } from "@/@types/Input";

const Input = ({ type, placeholder }: InputType) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
