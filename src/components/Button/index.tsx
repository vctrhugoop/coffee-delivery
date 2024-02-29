import { ReactNode } from 'react';
import { ButtonContainer, ButtonVariant } from './styled';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onAddCoffeToCart?: () => void;
}

export function Button({
  variant = 'primary',
  children,
  onAddCoffeToCart,
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={onAddCoffeToCart}>
      {children}
    </ButtonContainer>
  );
}
