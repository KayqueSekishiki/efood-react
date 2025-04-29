import * as B from "./styles";

type Props = {
  text: string;
  buttonFor: "restaurant" | "recipe" | "modal" | "formFinish";
};

const Button = ({ text, buttonFor }: Props) => (
  <B.Button buttonFor={buttonFor}>{text}</B.Button>
);

export default Button;
