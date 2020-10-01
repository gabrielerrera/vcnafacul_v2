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
        <Title font="50px">Localiza Cursinho</Title>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Nome Do Curinho
          </Body>
          <Body  font="20px">{marker.click.Name}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Estado
          </Body>
          <Body  font="20px">{marker.click.State}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Cidade
          </Body>
          <Body  font="20px">{marker.click.City}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Bairro
          </Body>
          <Body  font="20px">{marker.click.Neighborhood}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Rua
          </Body>
          <Body  font="20px">{marker.click.Street}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
            Nº
          </Body>
          <Body  font="20px">{marker.click.Number}</Body>
        </Container>
        <Container>
          <Body  font="15px" line="15px" weight="bold">
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
