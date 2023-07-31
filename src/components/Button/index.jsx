import { Container } from './styles';

export default function Button({ text, icon: Icon, value, loading = false, ...rest }) {
  return (
    <Container {...rest} disabled={loading}>
      {Icon && <Icon />}
      {text}
      {value && <span>{value}</span>}
    </Container>
  );
}