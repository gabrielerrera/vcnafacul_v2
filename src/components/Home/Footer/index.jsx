import React from 'react';

import { Body, Colors, StyledDiv } from '../../globalStyle';
import { Recorte } from '../QuemSomos/styled';
import recorte from '../../images/recortepapelrasgado.png';

const Footer = () => (
  <div style={{backgroundColor: Colors.color1,width: '100%', height: '100%'}} >
    <Recorte src={recorte} />
    <StyledDiv style={{paddingBottom: '10px'}}>
      <Body colors > Projeto Social vC na Facul</Body>
    </StyledDiv>
  </div>
)

export default Footer;