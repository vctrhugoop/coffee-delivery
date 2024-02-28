import styled, { css } from 'styled-components';

import { rgba } from 'polished';
import background from '../../assets/Background.png';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HeroContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => css`url(${background}) no-repeat center,
  linear-gradient(
        0deg,
        ${theme.colors['base-background']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 0%
      )`};

  background-size: cover;

  padding: 9.4rem 0;
`;

export const HeroContent = styled.div`
  padding: 0 2rem;

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    h1 {
      font-size: 4.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    h1 {
      font-size: 4.8rem;
    }

    img {
      display: block;
    }
  }
`;

export const HeroTextContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-top: 1.6rem;
  }
`;

export const InfoContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    columns: 4rem;
  }
`;

export const SectionTitle = styled.div`
  h2 {
    margin-bottom: 5.4rem;
    padding: 5rem 2rem;
    font-family: 'Baloo 2';
    font-size: 3.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const CoffeeListContainer = styled.main`
  padding: 0 2rem 10rem;
  display: grid;
  place-content: center;
  row-gap: 5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1268px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
