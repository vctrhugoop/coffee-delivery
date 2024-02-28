import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const CheckoutOrderFormContainer = styled.div`
  max-width: 64rem;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SectionFormContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const AddressesFormContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PaymentMethodInputContainer = styled.div`
  display: flex;
  align-items: center;

  height: 5rem;
  width: 18rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  input {
    visibility: hidden;
    appearance: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;

  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  span {
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors['base-text']};
  }

  cursor: pointer;
`;
