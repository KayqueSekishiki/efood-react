import * as B from "./styles";

export type Props = {
  text: string;
  buttonFor: "restaurant" | "dish" | "modal" | "formFinish";
  onClick?: () => void;
};

const Button = ({ text, buttonFor, onClick }: Props) => (
  <B.Button buttonFor={buttonFor} onClick={onClick}>
    {text}
  </B.Button>
);

export default Button;
