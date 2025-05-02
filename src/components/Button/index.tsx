import * as B from "./styles";

export type Props = {
  text: string;
  buttonFor: "restaurant" | "dishe" | "modal" | "formFinish";
};

const Button = ({ text, buttonFor }: Props) => (
  <B.Button buttonFor={buttonFor}>{text}</B.Button>
);

export default Button;
