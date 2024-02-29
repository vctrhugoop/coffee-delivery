import {
  CoffeeListContainer,
  HeroContainer,
  HeroContent,
  HeroTextContainer,
  HomeContainer,
  InfoContainer,
  SectionTitle,
} from './styles';

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import HeroImage from '../../assets/HeroImage.png';

import { useEffect } from 'react';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { coffees } from '../../database/coffee';
import { CoffeeCard } from './components/CoffeeList';

export function Home() {
  const { colors } = useTheme();

  useEffect(() => {
    document.title = 'Coffee Delivery';
  }, []);

  return (
    <HomeContainer>
      <HeroContainer>
        <HeroContent className='container'>
          <div>
            <HeroTextContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </HeroTextContainer>

            <InfoContainer>
              <InfoWithIcon
                iconBg={colors['yellow-700']}
                icon={<ShoppingCart weight='fill' size={16} />}
                text='Compra simples e segura'
              />
              <InfoWithIcon
                iconBg={colors['base-text']}
                icon={<Package weight='fill' size={16} />}
                text='Embalagem mantém o café intacto'
              />
              <InfoWithIcon
                iconBg={colors['yellow-500']}
                icon={<Timer weight='fill' size={16} />}
                text='Entrega rápida e rastreada'
              />
              <InfoWithIcon
                iconBg={colors['purple-500']}
                icon={<Coffee weight='fill' size={16} />}
                text='O café chega fresquinho até você'
              />
            </InfoContainer>
          </div>
          <img src={HeroImage} />
        </HeroContent>
      </HeroContainer>
      <SectionTitle className='container'>
        <h2>Nossos Cafés</h2>
      </SectionTitle>
      <CoffeeListContainer className='container'>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListContainer>
    </HomeContainer>
  );
}
