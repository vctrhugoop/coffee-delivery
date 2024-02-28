import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { CheckoutOrderContainer } from './styles';

export function CheckoutOrder() {
  return (
    <CheckoutOrderContainer className='container'>
      <CheckoutOrderForm />
    </CheckoutOrderContainer>
  );
}
