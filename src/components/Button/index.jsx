import { Container } from './styles';

export default function Button({ text, icon: Icon, $isblack, value, loading = false, ...rest }) {
  return (
    <Container {...rest} disabled={loading} $isblack={$isblack}>
      {Icon && <Icon />}
      {text}
      {value && <span>{value}</span>}
    </Container>
  );
}