import { css, styled } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'icon' | 'ghost';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: css`
    background-color: ${({ theme }) => theme.colors['yellow-500']};
    padding: 1.2rem 0.8rem;

    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors['yellow-700']};
    }
  `,
  secundary: css`
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};

    padding: 0 0.8rem;
    height: 3.2rem;

    gap: 4px;

    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  `,
  icon: css`
    background-color: ${({ theme }) => theme.colors['purple-700']};
    padding: 0.8rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors['purple-500']};
    }
  `,

  ghost: css`
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};

    padding: 1.6rem;

    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    &:focus {
      outline: ${({ theme }) => theme.colors['purple-500']};
    }
  `,
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${({ theme }) => theme.colors['base-white']};

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;

  font-size: 1.2rem;

  transition: background-color 0.2s;
  ${({ variant }) => buttonVariant[variant]}
`;
