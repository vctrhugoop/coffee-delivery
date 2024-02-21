import { styled } from 'styled-components';

export const CartButtonContainer = styled.button`
  padding: 0.8rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-200']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`;
