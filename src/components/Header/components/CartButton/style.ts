import { styled } from 'styled-components';

export const CartButtonContainer = styled.button`
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;

  background-color: ${({ theme }) => theme.colors['yellow-200']};

  svg {
    color: ${({ theme }) => theme.colors['yellow-700']};
  }

  position: relative;
`;

export const BagdeQuantityCart = styled.div`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  width: 2rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors['yellow-700']};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-white']};
`;
