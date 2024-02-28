import { useEffect } from 'react';
import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutOrderContainer } from './styles';

export function CheckoutOrder() {
  useEffect(() => {
    document.title = 'Meu carinho | Coffee Delivery';
  }, []);

  return (
    <CheckoutOrderContainer className='container'>
      <CheckoutOrderForm />
      <SelectedCoffees />
    </CheckoutOrderContainer>
  );
}
