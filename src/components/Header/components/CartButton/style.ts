import { styled } from 'styled-components';

export const CartButtonContainer = styled.button`
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;

  background-color: ${({ theme }) => theme['yellow-200']};

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }
`;
