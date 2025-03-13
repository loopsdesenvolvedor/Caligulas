import { ButtonType } from "@/@types/Button";

const Button = ({ type, text, icon, onClick }: ButtonType) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
