import React from 'react';
import logo from '../../images/logofundobranco.png';

import { Div, Img, StyleLink, Nav } from './styled';
import { StyledDiv } from '../../globalStyle';

const MenuNav = () => (
  <StyledDiv>
  <Nav>
    <Img src={logo} alt="Logo você na Facul"/>
    <Div>
        <StyleLink to='/' >Sobre</StyleLink>
        <StyleLink to='/' >Localiza</StyleLink>
    </Div>
  </Nav>
  </StyledDiv>
)

export default MenuNav;