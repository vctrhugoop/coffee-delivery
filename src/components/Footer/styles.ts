import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;

  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;

  p {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  a {
    color: ${({ theme }) => theme.colors['purple-500']};
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-700']};
    }
  }
`;
