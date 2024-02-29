import { PriceContainer, PriceContent } from './styles';

export function PriceSection() {
  return (
    <PriceContainer>
      <PriceContent>
        <p>Total de itens</p>
        <span>R$ 29,70</span>
      </PriceContent>
      <PriceContent>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceContent>
      <PriceContent>
        <h3>Total </h3>
        <strong>R$ 29,70</strong>
      </PriceContent>
    </PriceContainer>
  );
}
