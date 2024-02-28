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
