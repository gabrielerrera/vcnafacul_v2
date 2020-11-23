import React from "react";
import Youtube from './youtube';

import {
  Body,
  Colors,
  DivPrincipal,
  DivSecundaria,
  StyledDiv,
  Title,
} from "../../globalStyle";
import { Recorte } from "./styled";

import recorte from "../../images/recortepapelrasgado.png";

const QuemSomos = () => (
    
    <div
      style={{
        backgroundColor: Colors.color1,
        height: "100%",
        verticalAlign: "bottom",
        paddingBottom: "20px",
        position: 'relative',
      }}
    >
      <Recorte normal src={recorte} alt="divisão" />
      <DivPrincipal>
        <DivSecundaria youtube className='youtube' ><Youtube/></DivSecundaria>
        <DivSecundaria>
          <Title colors sobre >Quem Somos?</Title>
          <Body colors sobre >
            Somos um grupo de voluntários com um propósito maior: fazer a diferença.
          </Body>
          <Body colors sobre >
          Trabalhamos para que o ambiente universitário seja um ambiente de equidade e oportunidade.
          </Body>
          <Body colors sobre >
          Com isso, nossa missão é apresentar para nosso público todos os direitos que lhes dizem respeito, 
          como cotas, isenções e bolsas, além de construir uma plataforma totalmente exclusiva para pessoas 
          em vulnerabilidade socioeconômica com conteúdos pré-vestibular.
          </Body>
        </DivSecundaria>
      </DivPrincipal>
      <Recorte inverso src={recorte} alt="divisão" />
    </div>
);

export default QuemSomos;
