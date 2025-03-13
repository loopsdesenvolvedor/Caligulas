import { ButtonType } from "@/@types/Button";

const Button = ({ type, text, icon }: ButtonType) => {
  return (
    <>
      <button type={type}>
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
