import styled from 'styled-components';

export const CheckoutOrderContainer = styled.form`
  padding: 0 2rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2rem;
`;

export const SectionTitleContainer = styled.h2`
  font-family: 'Baloo 2';
  font-size: 1.8;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-subtitle']};

  margin-bottom: 1.5rem;
`;
