import { NavLink } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import { CartButton } from './components/CartButton';
import { LocaleMap } from './components/Locale';
import { AsideContainer, HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className='container'>
        <NavLink to='/'>
          <img src={Logo} />
        </NavLink>
        <AsideContainer>
          <LocaleMap />
          <CartButton />
        </AsideContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
