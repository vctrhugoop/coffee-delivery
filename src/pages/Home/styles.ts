import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const HeroContainer = styled.section`
  padding: 9.4rem 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1.6rem 0 5rem;
  }

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

    p {
      font-size: 2rem;
    }

    img {
      display: block;
    }
  }
`;

export const UlContainer = styled.ul`
  li {
    color: ${(props) => props.theme['base-text']};

    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 4rem;
  }
`;

const BG_ICON_COLOR = {
  yellow: 'yellow-500',
  yellowDark: 'yellow-700',
  gray: 'base-text',
  purple: 'purple-500',
} as const;

interface BgIconColorProps {
  bgIconColor: keyof typeof BG_ICON_COLOR;
}

export const IconHeroContainer = styled.div<BgIconColorProps>`
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme[BG_ICON_COLOR[props.bgIconColor]]};
  border-radius: 50%;

  padding: 0.8rem;

  display: flex;
  align-items: center;
`;
