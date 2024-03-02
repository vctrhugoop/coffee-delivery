import { useCart } from '../../../../hooks/useCart';
import { SectionTitleContainer } from '../../styles';
import { CoffeeCartCard } from '../CoffeeCartCard';
import { PriceSection } from './PriceSection';
import {
  EmptyCart,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles';

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <SectionTitleContainer>Cafés selecionados</SectionTitleContainer>
      <SelectedCoffeesContent>
        {cartItems.length <= 0 ? (
          <EmptyCart>
            <h3>SEU CARRINHO ESTÁ VAZIO!</h3>
            <p>
              Para adicionar produtos no seu carrinho, procure pelo produto em
              nosso site e clique no botão “COMPRAR” ou “ADICIONAR”.
            </p>
          </EmptyCart>
        ) : (
          <>
            {cartItems.map((item) => (
              <CoffeeCartCard key={item.id} coffee={item} />
            ))}
          </>
        )}
        <PriceSection />
      </SelectedCoffeesContent>
    </SelectedCoffeesContainer>
  );
}
