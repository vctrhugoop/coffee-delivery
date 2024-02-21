import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 112rem;
  margin: 0 auto;
  padding: 3.2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

    background-color: ${(props) => props.theme['purple-200']};
    border-radius: 6px;

    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-700']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`;
