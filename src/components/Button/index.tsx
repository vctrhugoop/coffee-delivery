import { ReactNode } from 'react';
import { ButtonContainer, ButtonVariant } from './styled';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onAddCoffeToCart?: () => void;
  onRemoveCartItem?: () => void;
}

export function Button({
  variant = 'primary',
  children,
  onAddCoffeToCart,
  onRemoveCartItem,
}: ButtonProps) {
  const handleClick = () => {
    if (onAddCoffeToCart) {
      onAddCoffeToCart();
    } else if (onRemoveCartItem) {
      onRemoveCartItem();
    }
  };
  return (
    <ButtonContainer variant={variant} onClick={handleClick}>
      {children}
    </ButtonContainer>
  );
}
