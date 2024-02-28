import { Button } from '../../../../components/Button';
import { SectionTitleContainer } from '../../styles';
import { PriceSection } from './PriceSection';
import { SelectedCoffeesContainer, SelectedCoffeesContent } from './styles';

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <SectionTitleContainer>Cafés selecionados</SectionTitleContainer>
      <SelectedCoffeesContent>
        <PriceSection />
        <Button>confirmar pedido</Button>
      </SelectedCoffeesContent>
    </SelectedCoffeesContainer>
  );
}
