import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import {
  HeroContainer,
  HeroContent,
  HomeContainer,
  IconHeroContainer,
  UlContainer,
} from './styles';

import HeroImage from '../../assets/HeroImage.png';

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroContent className='container'>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <UlContainer>
              <div>
                <li>
                  <IconHeroContainer $bgiconcolor='yellowDark'>
                    <ShoppingCart size={16} weight='fill' />
                  </IconHeroContainer>
                  Compra simples e segura
                </li>

                <li>
                  <IconHeroContainer $bgiconcolor='yellow'>
                    <Timer size={16} weight='fill' />
                  </IconHeroContainer>
                  Entrega rápida e rastreada
                </li>
              </div>
              <div>
                <li>
                  <IconHeroContainer $bgiconcolor='gray'>
                    <Package size={16} weight='fill' />
                  </IconHeroContainer>
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <IconHeroContainer $bgiconcolor='purple'>
                    <Coffee size={16} weight='fill' />
                  </IconHeroContainer>
                  O café chega fresquinho até você
                </li>
              </div>
            </UlContainer>
          </div>
          <img src={HeroImage} />
        </HeroContent>
      </HeroContainer>
    </HomeContainer>
  );
}
