import React from 'react';

import { Body, Colors, StyledDiv } from '../../globalStyle';
import { Recorte } from '../QuemSomos/styled';
import recorte from '../../images/recorte.png';

const Footer = () => (
  <div style={{backgroundColor: Colors.color1,width: '100%', height: '300px'}} >
    <Recorte src={recorte} />
    <StyledDiv>
      <Body colors > Projeto você na Facul</Body>
    </StyledDiv>
  </div>
)

export default Footer;