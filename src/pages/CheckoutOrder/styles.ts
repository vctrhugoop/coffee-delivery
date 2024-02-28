import styled from 'styled-components';

export const CheckoutOrderContainer = styled.div`
  width: 100;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2rem;
`;
