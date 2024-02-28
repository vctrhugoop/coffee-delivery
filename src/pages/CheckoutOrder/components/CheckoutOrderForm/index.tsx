import { MapPinLine } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { SectionTitleContainer } from '../../styles';
import { HeadingText } from '../HeadingText';
import { AddressForm } from './AddressForm';
import { CheckoutOrderFormContainer, SectionFormContainer } from './styles';

export function CheckoutOrderForm() {
  const { colors } = useTheme();

  return (
    <CheckoutOrderFormContainer>
      <SectionTitleContainer>Complete seu pedido</SectionTitleContainer>
      <SectionFormContainer>
        <HeadingText
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
          icon={<MapPinLine size={22} color={colors['yellow-700']} />}
        />
        <AddressForm />
      </SectionFormContainer>
    </CheckoutOrderFormContainer>
  );
}
