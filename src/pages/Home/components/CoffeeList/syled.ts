import styled from 'styled-components';

export const CoffeeListContainer = styled.main`
  padding: 0 2rem 10rem;
  display: grid;
  place-content: center;
  row-gap: 4rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardCoffee = styled.div`
  width: 25rem;
  height: 31rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors['base-card']};

  border-radius: 6px 36px;
`;
export const CardCoffeeImage = styled.img`
  width: 12rem;
  height: 12rem;
  margin-top: -4rem;
`;

export const CardCoffeeTagContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const CardCoffeeTag = styled.span`
  background-color: ${({ theme }) => theme.colors['yellow-200']};
  border-radius: 10rem;
  padding: 0.4rem 0.8rem;

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['yellow-700']};

  text-transform: uppercase;
`;

export const CardCoffeeInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  text-align: center;
`;

export const CardCoffeeName = styled.h3`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const CardCoffeeDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors['base-label']};
`;

export const CardCoffeeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3rem;
`;

export const CardCoffeePrice = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors['base-text']};

  span {
    font-family: 'Baloo 2';
    font-size: 2.4rem;

    font-weight: 800;
  }
`;

export const CardCoffeeAddCart = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0.8rem;
`;
