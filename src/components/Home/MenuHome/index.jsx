import React from 'react';
import logo from '../../images/logo.png';

import { Div, Img, StyleLink, Nav } from './styled';
import { StyledDiv } from '../../globalStyle';

const MenuNav = () => (
  <StyledDiv>
  <Nav>
    <Img src={logo} alt="Logo você na Facul"/>
    <Div>
      <div>
        <StyleLink to='/' >Quem Somos</StyleLink>
        <StyleLink to='/' >Localiza Cursinho</StyleLink>
      </div>
    </Div>
  </Nav>
  </StyledDiv>
)

export default MenuNav;