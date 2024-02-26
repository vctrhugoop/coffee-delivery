import { MapPin } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import { CartButton } from './components/CartButton';
import { HeaderContainer, HeaderContent, SideMenuContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className='container'>
        <NavLink to='/'>
          <img src={Logo} />
        </NavLink>
        <SideMenuContainer>
          <span>
            <MapPin size={22} weight='fill' />
            Diadema, SP
          </span>
          <CartButton />
        </SideMenuContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
