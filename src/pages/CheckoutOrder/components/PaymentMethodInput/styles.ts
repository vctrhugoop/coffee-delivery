import { styled } from 'styled-components';

export const PaymentMethodInputContainer = styled.div`
  display: flex;

  input {
    visibility: hidden;
    appearance: none;
  }

  label {
    width: 100%;
  }

  input:checked + label div {
    background-color: ${({ theme }) => theme.colors['purple-200']};
    border-color: ${({ theme }) => theme.colors['purple-500']};

    &:hover {
      background: ${({ theme }) => theme.colors['purple-200']};
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  height: 5.1rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  transition: 0.4s;

  span {
    font-size: 1.1rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['base-text']};
  }

  cursor: pointer;

  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }
`;
