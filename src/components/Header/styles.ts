import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: ${({ theme }) => theme.colors['base-background']};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
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

    background-color: ${({ theme }) => theme.colors['purple-200']};
    border-radius: 6px;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors['purple-700']};

    svg {
      color: ${({ theme }) => theme.colors['purple-500']};
    }
  }
`;
