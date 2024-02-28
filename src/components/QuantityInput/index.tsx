import { Minus, Plus } from '@phosphor-icons/react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus />
      </IconWrapper>
      <input type='number' readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
