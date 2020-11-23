import React from 'react';
import {Link} from 'react-router-dom';

import { Body, Colors, StyledDiv } from '../../globalStyle';
import { Recorte } from '../QuemSomos/styled';
import recorte from '../../images/recortepapelrasgado.png';
import { Parg, StyleLink, Img } from '../Footer/styled'
import logoHostinger from '../../images/Home/patrocinadores/HostingerWhite.png'

const Footer = () => (
  <div style={{backgroundColor: Colors.color1,width: '100%', height: '100%', paddingBottom: '30px'}} >
    <Recorte src={recorte} />
    
    <Parg > Fale conosco: <StyleLink>contato@vcnafacul.com.br</StyleLink> </Parg>
    
  </div>
)

export default Footer;