import styled from 'styled-components';

export const SelectedCoffeesContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SelectedCoffeesContent = styled.div`
  border-radius: 6px 44px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-text']};

  p {
    font-size: 1.4rem;
  }

  span {
    font-size: 1.6rem;
  }

  h3,
  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 2rem;
  }
`;
