import styled, { css } from 'styled-components';

export interface QuantityInputContainerProps {
  size: 'medium' | 'small';
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      height: 3.8rem;
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      height: 3.2rem;
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({ type: 'button' })`
  cursor: pointer;

  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['purple-500']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['purple-700']};
  }
`;
