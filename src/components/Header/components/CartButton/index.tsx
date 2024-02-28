import { ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { BagdeQuantityCart, CartButtonContainer } from './style';

export function CartButton() {
  return (
    <NavLink to='/checkout-order'>
      <CartButtonContainer>
        <ShoppingCart size={22} weight='fill' />
        <BagdeQuantityCart>2</BagdeQuantityCart>
      </CartButtonContainer>
    </NavLink>
  );
}
