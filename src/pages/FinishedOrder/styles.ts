import styled from 'styled-components';

export const FinishedOrderContainer = styled.div`
  padding: 8rem 2rem;
`;

export const FinishedOrderHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  line-height: 130%;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['yellow-700']};
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const FinishedOrderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  margin-top: 4rem;
  margin-bottom: 10rem;

  img {
    display: none;

    @media screen and (min-width: 1024px) {
      width: 49rem;
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const FinishedOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 52.6rem;
  width: 100%;
  height: 27rem;
  width: 100%;
  padding: 4rem;

  background: ${({ theme }) => theme.colors['base-background']};

  border-radius: 6px 36px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const FinishedOrderContentCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-text']};
`;

export const CardText = styled.div`
  word-wrap: break-word;

  span {
    font-weight: 700;
  }
`;
