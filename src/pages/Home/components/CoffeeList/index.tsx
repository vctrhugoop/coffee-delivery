import { ShoppingCart } from '@phosphor-icons/react';
import { Button } from '../../../../components/Button';
import { QuantityInput } from '../../../../components/QuantityInput';
import { coffees } from '../../../../database/coffee';
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
  CoffeeListContainer,
} from './syled';

export function CoffeeList() {
  return (
    <CoffeeListContainer className='container'>
      {coffees.map((coffee) => {
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
                    <CardCoffeeTag key={`${coffee.id}${tag}`}>
                      {tag}
                    </CardCoffeeTag>
                  );
                })}
              </CardCoffeeTagContianer>

              <div>
                <CardCoffeeName>{coffee.name}</CardCoffeeName>
                <CardCoffeeDescription>
                  {coffee.description}
                </CardCoffeeDescription>
              </div>
            </CardCoffeeInformations>
            <CardCoffeeFooter>
              <CardCoffeePrice>
                R$ <span>{coffee.price}</span>
              </CardCoffeePrice>
              <CardCoffeeAddCart>
                <QuantityInput />
                <Button variant='icon'>
                  <ShoppingCart size={22} weight='fill' />
                </Button>
              </CardCoffeeAddCart>
            </CardCoffeeFooter>
          </CardCoffee>
        );
      })}
    </CoffeeListContainer>
  );
}
