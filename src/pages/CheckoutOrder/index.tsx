import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutOrderContainer } from './styles';

export function CheckoutOrder() {
  return (
    <CheckoutOrderContainer className='container'>
      <CheckoutOrderForm />
      <SelectedCoffees />
    </CheckoutOrderContainer>
  );
}
