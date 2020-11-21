import React from 'react';
import logo from '../../images/logofundobranco.png';

import { Div, Img, StyleLink, Nav } from './styled';
import { StyledDiv } from '../../globalStyle';

const MenuNav = () => (

  <Nav>
    <Img src={logo} alt="Logo você na Facul"/>
    {/* <Div>
        <StyleLink to='/' >Quem<br/>Somos</StyleLink>
        <StyleLink to='/' >Localiza<br/>Cursinho</StyleLink>
    </Div> */}
  </Nav>

)

export default MenuNav;