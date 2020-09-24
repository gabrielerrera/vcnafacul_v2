import React from "react";
import { Body, StyledDiv, DivPrincipal, DivSecundaria, Title  } from "../globalStyle";
import { Button } from "./styled";

const DivPrincipalHomePage = () => (
  <StyledDiv>
    <DivPrincipal>
      <DivSecundaria>
        <Title>nossa missão é <br/> ver você na <br/> facul!</Title>
        <Body>
          O conhecimento é a única coisa que ninguém tira de você. O Projeto
          Você na Facul é uma plataforma exclusiva para alunos em
          vulnerabilidade socioecoômica. Aqui você pode tanto estudar com a
          gente quanto buscar um cursinho popular mais próximo de você. E ai,
          vamos nessa?
        </Body>
        <div>
          <Button primary >Busque um Cursinho</Button>
          <Button>Estude com a Gente</Button>
        </div>
      </DivSecundaria>
      <DivSecundaria>Imagem</DivSecundaria>
    </DivPrincipal>
  </StyledDiv>
);

export default DivPrincipalHomePage;
