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

export const AsideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
