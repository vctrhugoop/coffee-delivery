import { ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../../../hooks/useCart';
import { BagdeQuantityCart, CartButtonContainer } from './style';

export function CartButton() {
  const { cartQuantity } = useCart();

  return (
    <NavLink to='/checkout-order'>
      <CartButtonContainer>
        <ShoppingCart size={22} weight='fill' />
        {cartQuantity >= 1 && (
          <BagdeQuantityCart>{cartQuantity}</BagdeQuantityCart>
        )}
      </CartButtonContainer>
    </NavLink>
  );
}
