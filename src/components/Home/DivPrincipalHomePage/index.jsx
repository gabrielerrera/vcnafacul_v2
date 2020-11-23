import React from "react";
import { Body, StyledDiv, DivPrincipal, DivSecundaria, Title } from "../../globalStyle";
import { Button, DivButton, Img } from "./styled";
import slide from '../../images/Home/DivPrincipal/5.png';

const Teste = () => {
  console.log("Testando");
  window.scrollBy(0, 1200);
}

const DivPrincipalHomePage = () => (
    <DivPrincipal>
      <DivSecundaria>
        <Title>nossa missão é ver você na facul!</Title>
        <Body>
        Nós queremos proporciopnar a você em a oportunidade de conhecer seus direitos e continuar seus estudos.
        </Body>
        <Body>
          Conheça os cursinho presenciais mais próximos de vocês 
        </Body>
        <DivButton>
          <Button onClick={Teste()} primary >Busque um Cursinho</Button>
        </DivButton>
      </DivSecundaria>
      <DivSecundaria>
        <Img src={slide} alt="Imagem Redes Sociais"/>
        </DivSecundaria>
    </DivPrincipal>
);

export default DivPrincipalHomePage;
