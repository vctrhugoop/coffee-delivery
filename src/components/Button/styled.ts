import { css, styled } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'icon';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: css`
    background-color: ${({ theme }) => theme['yellow-500']};
    padding: 1.2rem 0.8rem;

    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-700']};
    }
  `,
  secundary: css`
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    font-size: 1.2rem;

    padding: 0 0.8rem;
    height: 3.2rem;

    gap: 4px;

    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
      color: ${({ theme }) => theme['base-subtitle']};
    }
  `,
  icon: css`
    background-color: ${({ theme }) => theme['purple-700']};
    padding: 0.8rem;

    &:hover {
      background-color: ${({ theme }) => theme['purple-500']};
    }
  `,
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${({ theme }) => theme.white};

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s;
  ${({ variant }) => buttonVariant[variant]}
`;
