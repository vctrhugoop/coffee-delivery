import { Button } from '../../../../components/Button';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import { PriceContainer, PriceContent } from './styles';

export function PriceSection() {
  const { cartQuantity, cartItemsTotal } = useCart();

  const deliveryPrice = 3.5;

  const cartTotal = deliveryPrice + cartItemsTotal;

  const formattedDeliveryPrice = formatMoney(deliveryPrice);
  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);

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
