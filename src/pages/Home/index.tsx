import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import {
  HeroContainer,
  HomeContainer,
  IconHeroContainer,
  UlContainer,
} from './styles';

import HeroImage from '../../assets/HeroImage.png';
import { CoffeeList } from './components/CoffeeList';

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <UlContainer>
            <div>
              <li>
                <IconHeroContainer bgIconColor='yellowDark'>
                  <ShoppingCart size={16} weight='fill' />
                </IconHeroContainer>
                Compra simples e segura
              </li>

              <li>
                <IconHeroContainer bgIconColor='yellow'>
                  <Timer size={16} weight='fill' />
                </IconHeroContainer>
                Entrega rápida e rastreada
              </li>
            </div>
            <div>
              <li>
                <IconHeroContainer bgIconColor='gray'>
                  <Package size={16} weight='fill' />
                </IconHeroContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconHeroContainer bgIconColor='purple'>
                  <Coffee size={16} weight='fill' />
                </IconHeroContainer>
                O café chega fresquinho até você
              </li>
            </div>
          </UlContainer>
        </div>
        <img src={HeroImage} />
      </HeroContainer>
      <CoffeeList />
    </HomeContainer>
  );
}
