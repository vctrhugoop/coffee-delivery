import { Minus, Plus } from '@phosphor-icons/react';
import { useState } from 'react';
import { IconWrapper, QuantityInputContainer } from './styles';

export function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  function handleDecrementQuantity() {
    setQuantity(quantity - 1);
  }

  function handleIncrementQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <QuantityInputContainer>
      <IconWrapper onClick={handleDecrementQuantity} disabled={quantity <= 1}>
        <Minus />
      </IconWrapper>
      <input type='number' readOnly value={quantity} />
      <IconWrapper onClick={handleIncrementQuantity}>
        <Plus />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
