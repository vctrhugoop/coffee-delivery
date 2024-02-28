import styled from 'styled-components';

export const HeadingTextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  line-height: 130%;

  h3 {
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
