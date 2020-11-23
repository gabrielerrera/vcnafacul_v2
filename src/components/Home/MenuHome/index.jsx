import React from 'react';
import logo from '../../images/logo.png';

import { Img, Nav } from './styled';
import { DivPrincipal } from '../../globalStyle';

const MenuNav = () => (
  <DivPrincipal>
  <Nav>
  <Img src={logo} alt="Logo você na Facul"/>
  {/* <Div>
      <StyleLink to='/' >Quem<br/>Somos</StyleLink>
      <StyleLink to='/' >Localiza<br/>Cursinho</StyleLink>
  </Div> */}
</Nav>
</DivPrincipal>
  

)

export default MenuNav;