import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import OSM from "./maps/OSM";

import {
  Body,
  StyledDiv,
  DivPrincipal,
  DivSecundaria,
  Title,
} from "../../globalStyle";

import { Container } from "./styled";

const Localiza = ({ marker }) => (
  <StyledDiv>
    <DivPrincipal>
      <DivSecundaria>
        <Title font="5.5rem" >Localiza Cursinho</Title>
        <Container>
          <Body loc >
            Nome Do Curinho
          </Body>
          <Body  font="20px">{marker.click.Name}</Body>
        </Container>
        <Container>
          <Body loc >
            Estado
          </Body>
          <Body  font="20px">{marker.click.State}</Body>
        </Container>
        <Container>
          <Body loc >
            Cidade
          </Body>
          <Body  font="20px">{marker.click.City}</Body>
        </Container>
        <Container>
          <Body loc >
            Bairro
          </Body>
          <Body  font="20px">{marker.click.Neighborhood}</Body>
        </Container>
        <Container>
          <Body loc >
            Rua
          </Body>
          <Body  font="20px">{marker.click.Street}</Body>
        </Container>
        <Container>
          <Body loc >
            Nº
          </Body>
          <Body  font="20px">{marker.click.Number}</Body>
        </Container>
        <Container>
          <Body loc >
            Complemento
          </Body>
          <Body font="20px">{marker.click.Compements}</Body>
        </Container>
      </DivSecundaria>
      <DivSecundaria width="50vw">
        <OSM />
      </DivSecundaria>
    </DivPrincipal>
  </StyledDiv>
);

const mapStateToProps = (state) => ({ marker: state.MarkerReducer });

export default connect(mapStateToProps)(Localiza);
