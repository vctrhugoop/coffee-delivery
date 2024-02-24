import styled from 'styled-components';

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

interface IconsContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconsContainerProps>`
  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors['base-white']};

  padding: 0.8rem;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
  }
`;
