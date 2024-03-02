import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import illustration from '../../assets/Illustration.png';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { OrderData } from '../CheckoutOrder';
import { paymentMethods } from '../CheckoutOrder/components/CheckoutOrderForm';
import {
  CardText,
  FinishedOrderCard,
  FinishedOrderContainer,
  FinishedOrderContent,
  FinishedOrderContentCard,
  FinishedOrderHeading,
} from './styles';

interface LocationType {
  state: OrderData;
}

export function FinishedOrder() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Pedido Confirmado | Coffee Delivery';
  }, []);

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <FinishedOrderContainer className='container'>
      <FinishedOrderHeading>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </FinishedOrderHeading>
      <FinishedOrderContent>
        <FinishedOrderCard>
          <FinishedOrderContentCard>
            <InfoWithIcon
              icon={<MapPin size={16} weight='fill' />}
              iconBg={colors['purple-500']}
            />
            <CardText>
              <p>
                Entrega em{' '}
                <span>
                  {state.street}, {state.number}
                </span>
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
              </p>
            </CardText>
          </FinishedOrderContentCard>
          <FinishedOrderContentCard>
            <InfoWithIcon
              icon={<Clock size={16} weight='fill' />}
              iconBg={colors['yellow-500']}
            />
            <CardText>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </CardText>
          </FinishedOrderContentCard>
          <FinishedOrderContentCard>
            <InfoWithIcon
              icon={<CurrencyDollar size={16} weight='fill' />}
              iconBg={colors['yellow-700']}
            />
            <CardText>
              <p>Pagamento na entrega</p>
              <span>{paymentMethods[state.paymentMethod].label}</span>
            </CardText>
          </FinishedOrderContentCard>
        </FinishedOrderCard>
        <img src={illustration} />
      </FinishedOrderContent>
    </FinishedOrderContainer>
  );
}
