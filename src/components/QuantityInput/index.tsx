import { Minus, Plus } from '@phosphor-icons/react';
import { IconWrapper, QuantityInputContainer } from './styles';

interface QuantityInputProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
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
