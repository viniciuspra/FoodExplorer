import { OrderCount, Container } from './styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import Receipt from '../Receipt';

export default function OrderControl() {
  const { value } = useLocalStorage('order-items')

  return (
    <Container to="edit/1">
      <Receipt />
      {value.length > 0 && <OrderCount>{value.length}</OrderCount>}
    </Container>
  )
}