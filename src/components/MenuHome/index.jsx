import React from 'react';
import logo from '../images/logo.png';

import { Div, Img, StyleLink, Nav } from './styled';

const MenuNav = () => (
  <Nav>
    <Img src={logo} alt="Logo você na Facul"/>
    <Div>
      <div>
        <StyleLink>Quem Somos</StyleLink>
        <StyleLink>Localiza Cursinho</StyleLink>
      </div>
      <div>
        <StyleLink>Entrar</StyleLink>
        <StyleLink>Cadastro</StyleLink>
      </div>
    </Div>
  </Nav>
)

export default MenuNav;