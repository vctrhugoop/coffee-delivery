import { Button } from '../../../../components/Button';
import { coffees } from '../../../../database/coffee';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import { PriceContainer, PriceContent } from './styles';

export function PriceSection() {
  const { cartQuantity, cartItems } = useCart();

  const coffeesInCart = cartItems.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const deliveryPrice = 3.5;

  const cartTotal = deliveryPrice + totalItemsPrice;

  const formattedDeliveryPrice = formatMoney(deliveryPrice);
  const formattedItemsTotal = formatMoney(totalItemsPrice);
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
