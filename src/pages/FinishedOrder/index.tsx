import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import illustration from '../../assets/Illustration.png';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import {
  CardText,
  FinishedOrderCard,
  FinishedOrderContainer,
  FinishedOrderContent,
  FinishedOrderContentCard,
  FinishedOrderHeading,
} from './styles';

export function FinishedOrder() {
  const { colors } = useTheme();

  useEffect(() => {
    document.title = 'Pedido Confirmado | Coffee Delivery';
  }, []);

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
                Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos
                - Porto Alegre, RS
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
              <span>Cartão de Crédito</span>
            </CardText>
          </FinishedOrderContentCard>
        </FinishedOrderCard>
        <img src={illustration} />
      </FinishedOrderContent>
    </FinishedOrderContainer>
  );
}
