import { HeaderContainer, SideMenuContainer } from './styles';

import { MapPin } from '@phosphor-icons/react';
import Logo from '../../assets/Logo.svg';
import { CartButton } from './components/CartButton';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <SideMenuContainer>
        <span>
          <MapPin size={22} weight='fill' />
          Diadema, SP
        </span>
        <CartButton />
      </SideMenuContainer>
    </HeaderContainer>
  );
}
