import { ReactNode } from 'react';
import { ButtonContainer, ButtonVariant } from './styled';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
