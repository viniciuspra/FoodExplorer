import { Container } from './styles';

export default function Button({ text, icon: Icon, isBlack, value, loading = false, ...rest }) {
  return (
    <Container {...rest} disabled={loading} isBlack={isBlack}>
      {Icon && <Icon />}
      {text}
      {value && <span>{value}</span>}
    </Container>
  );
}