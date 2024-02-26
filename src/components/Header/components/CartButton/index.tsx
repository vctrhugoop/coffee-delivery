import { ShoppingCart } from '@phosphor-icons/react';
import { BagdeQuantityCart, CartButtonContainer } from './style';

export function CartButton() {
  return (
    <CartButtonContainer>
      <ShoppingCart size={22} weight='fill' />
      <BagdeQuantityCart>2</BagdeQuantityCart>
    </CartButtonContainer>
  );
}
