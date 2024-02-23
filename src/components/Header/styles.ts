import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 2rem;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem;

    background-color: ${({ theme }) => theme['purple-200']};
    border-radius: 6px;

    font-size: 1.4rem;
    color: ${({ theme }) => theme['purple-700']};

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`;
