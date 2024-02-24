import { styled } from 'styled-components';

export const CartButtonContainer = styled.button`
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;

  background-color: ${({ theme }) => theme.colors['yellow-200']};

  svg {
    color: ${({ theme }) => theme.colors['yellow-700']};
  }
`;
