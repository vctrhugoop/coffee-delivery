import styled from 'styled-components';

export const LocaleContainer = styled.div`
  display: flex;
  gap: 4px;
  height: 3.8rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['purple-700']};
  background: ${({ theme }) => theme.colors['purple-200']};

  padding: 0.8rem;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors['purple-500']};
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-700']};
  }
`;
