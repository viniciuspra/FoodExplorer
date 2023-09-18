import { Container } from "./styles";

export function TextButton({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
