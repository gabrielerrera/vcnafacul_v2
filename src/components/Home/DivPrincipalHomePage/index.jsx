import React from "react";
import { Body, StyledDiv, DivPrincipal, DivSecundaria, Title  } from "../../globalStyle";
import { Button, DivButton } from "./styled";

const DivPrincipalHomePage = () => (
  <StyledDiv>
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
          <Button primary >Busque um Cursinho</Button>
        </DivButton>
      </DivSecundaria>
      <DivSecundaria><Body>Slide Show</Body></DivSecundaria>
    </DivPrincipal>
  </StyledDiv>
);

export default DivPrincipalHomePage;
