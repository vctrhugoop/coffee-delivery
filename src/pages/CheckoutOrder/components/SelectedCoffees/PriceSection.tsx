import { Button } from '../../../../components/Button';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import { PriceContainer, PriceContent } from './styles';

const DELIVERY_PRICE = 3.5;

export function PriceSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <PriceContainer>
      <PriceContent>
        <p>Total de itens</p>
        <span>R$ {formattedItemsTotal}</span>
      </PriceContent>
      <PriceContent>
        <p>Entrega</p>
        <span>R$ {formattedDeliveryPrice}</span>
      </PriceContent>
      <PriceContent>
        <h3>Total </h3>
        <strong>R$ {formattedCartTotal}</strong>
      </PriceContent>
      <Button disabled={cartQuantity <= 0} type='submit'>
        confirmar pedido
      </Button>
    </PriceContainer>
  );
}
