import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { SectionTitleContainer } from '../../styles';
import { HeadingText } from '../HeadingText';
import { AddressForm } from './AddressForm';
import { PaymentMethodOptions } from './PaymentMethodOptions';
import { CheckoutOrderFormContainer, SectionFormContainer } from './styles';

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

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

      <SectionFormContainer>
        <HeadingText
          title='Pagamento'
          subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
          icon={<CurrencyDollar size={22} color={colors['purple-700']} />}
        />
        <PaymentMethodOptions />
      </SectionFormContainer>
    </CheckoutOrderFormContainer>
  );
}
