import { Button } from '../../../../components/Button';
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
          <EmptyCart>Carrinho vazio</EmptyCart>
        ) : (
          <>
            {cartItems.map((item) => (
              <CoffeeCartCard key={item.id} coffee={item} />
            ))}
          </>
        )}
        <PriceSection />
        <Button>confirmar pedido</Button>
      </SelectedCoffeesContent>
    </SelectedCoffeesContainer>
  );
}
