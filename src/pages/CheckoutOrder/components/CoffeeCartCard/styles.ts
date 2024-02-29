import styled from 'styled-components';

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  line-height: 130%;
  font-size: 1.6rem;

  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 700;
  }

  img {
    display: none;
    height: 6.4rem;
    width: 6.4rem;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 17rem;
  margin-top: 0.8rem;
`;
