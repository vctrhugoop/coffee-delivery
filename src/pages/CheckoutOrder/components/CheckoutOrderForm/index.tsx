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
import { PaymentMethodInput } from './PaymentMethodInput';
import {
  CheckoutOrderFormContainer,
  PaymentMethodOptionsContainer,
  SectionFormContainer,
} from './styles';

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
        <PaymentMethodOptionsContainer>
          <PaymentMethodInput
            icon={<CreditCard size={16} color={colors['purple-500']} />}
            label='Cartão de Crédito'
            id='creditCard'
          />
          <PaymentMethodInput
            icon={<Bank size={16} color={colors['purple-500']} />}
            label='Cartão de Débito'
            id='debitCard'
          />
          <PaymentMethodInput
            icon={<Money size={16} color={colors['purple-500']} />}
            label='Dinheiro'
            id='money'
          />
        </PaymentMethodOptionsContainer>
      </SectionFormContainer>
    </CheckoutOrderFormContainer>
  );
}
