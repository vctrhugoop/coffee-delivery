import { ShoppingCart } from '@phosphor-icons/react';
import { useState } from 'react';
import { Button } from '../../../../components/Button';
import { QuantityInput } from '../../../../components/QuantityInput';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import {
  CardCoffee,
  CardCoffeeAddCart,
  CardCoffeeDescription,
  CardCoffeeFooter,
  CardCoffeeImage,
  CardCoffeeInformations,
  CardCoffeeName,
  CardCoffeePrice,
  CardCoffeeTag,
  CardCoffeeTagContianer,
} from './syled';

export interface Coffee {
  id: string;
  tags: string[];
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function haddleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <CardCoffee key={coffee.id}>
      <CardCoffeeInformations>
        <CardCoffeeImage
          src={coffee.imageURL}
          alt={`Xícara com ${coffee.name}`}
        />
        <CardCoffeeTagContianer>
          {coffee.tags.map((tag) => {
            return (
              <CardCoffeeTag key={`${coffee.id}${tag}`}>{tag}</CardCoffeeTag>
            );
          })}
        </CardCoffeeTagContianer>

        <div>
          <CardCoffeeName>{coffee.name}</CardCoffeeName>
          <CardCoffeeDescription>{coffee.description}</CardCoffeeDescription>
        </div>
      </CardCoffeeInformations>
      <CardCoffeeFooter>
        <CardCoffeePrice>
          R$ <span>{formattedPrice}</span>
        </CardCoffeePrice>
        <CardCoffeeAddCart>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <Button variant='icon' onAddCoffeToCart={haddleAddCoffeeToCart}>
            <ShoppingCart size={22} weight='fill' />
          </Button>
        </CardCoffeeAddCart>
      </CardCoffeeFooter>
    </CardCoffee>
  );
}
