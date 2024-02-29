import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const CheckoutOrderFormContainer = styled.div`
  max-width: 64rem;
  margin: 4rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SectionFormContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const AddressesFormContainer = styled.form`
  width: 100%;
  display: grid;
  row-gap: 1.6rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 20rem 1fr 6rem;
    column-gap: 1.2rem;

    grid-auto-flow: dense;

    .zipcode {
      max-width: 20rem;
      grid-column: span 3;
    }

    .street {
      grid-column: span 3;
    }

    .complement {
      grid-column: span 2;
    }
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PaymentMethodInputContainer = styled.div`
  display: flex;

  input {
    visibility: hidden;
    appearance: none;
  }

  label {
    width: 100%;
  }

  input:checked + label div {
    background-color: ${({ theme }) => theme.colors['purple-200']};
    border-color: ${({ theme }) => theme.colors['purple-500']};

    &:hover {
      background: ${({ theme }) => theme.colors['purple-200']};
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  height: 5.1rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  transition: 0.4s;

  span {
    font-size: 1.1rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['base-text']};
  }

  cursor: pointer;

  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`;
