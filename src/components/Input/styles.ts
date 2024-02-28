import styled from 'styled-components';

export const InputContainer = styled.div``;

export const InputStyleContainer = styled.div`
  height: 4.2rem;
  padding: 1.2rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  span {
    font-size: 1.1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  border: 0;
  background: none;
  outline: none;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
