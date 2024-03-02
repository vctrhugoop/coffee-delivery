import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors['base-error']};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 4.2rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  transition: 0.4s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}

  span {
    font-size: 1.1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
    margin-right: 1.2rem;
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  padding: 1.2rem;
  border: 0;
  background: none;
  outline: none;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
