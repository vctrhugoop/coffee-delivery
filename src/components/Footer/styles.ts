import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem;

  text-align: center;

  p {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  a {
    color: ${({ theme }) => theme.colors['purple-700']};
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-500']};
    }
  }
`;
