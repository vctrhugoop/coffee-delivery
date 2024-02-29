import { Trash } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { Button } from '../../../../components/Button';
import { QuantityInput } from '../../../../components/QuantityInput';
import { CartItem } from '../../../../contexts/CartContext';
import { formatMoney } from '../../../../utils/formatMoney';
import { ActionsWrapper, CoffeeCartCardContainer } from './styles';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { colors } = useTheme();

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.imageURL} />
        <div>
          <p>{coffee.name}</p>
          <ActionsWrapper>
            <QuantityInput quantity={coffee.quantity} size='small' />
            <Button variant='secundary'>
              <Trash size={16} color={colors['purple-500']} />
              remover
            </Button>
          </ActionsWrapper>
        </div>
      </div>
      <span>R$ {formattedPrice}</span>
    </CoffeeCartCardContainer>
  );
}
