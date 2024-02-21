import { ShoppingCart } from '@phosphor-icons/react';
import { CartButtonContainer } from './style';

export function CartButton() {
  return (
    <CartButtonContainer>
      <ShoppingCart size={22} weight='fill' />
    </CartButtonContainer>
  );
}
