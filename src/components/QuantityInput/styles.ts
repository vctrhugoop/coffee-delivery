import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  height: 3.8rem;

  padding: 0 0.8rem;

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
