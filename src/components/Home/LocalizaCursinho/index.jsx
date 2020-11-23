import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import OSM from "./maps/OSM";

import {
  StyledDiv,
  DivPrincipal,
  DivSecundaria,
  Title,
  Body
} from "../../globalStyle";

import { AllFields, Field, ValueField, TitleField, Button } from "./styled";
import { marker } from "leaflet";

const complement = (marker) => {
  if (marker.click.Compements) {
    return (
      <Field>
        <TitleField>Compl.</TitleField>
        <ValueField>{marker.click.Compements}</ValueField>
      </Field>
    );
  } else {
    return <></>;
  }
};

const Localiza = ({ marker }) => (
  <StyledDiv>
    <DivPrincipal className="LocalizaCursinho" localiza>
      <DivSecundaria>
        <Title>Localiza Cursinho</Title>
        <AllFields>
          <Field>
            <TitleField>Nome do Cursinho</TitleField>
            <ValueField>{marker.click.Name}</ValueField>
          </Field>
          <Field>
            <TitleField>Rua</TitleField>
            <ValueField>{marker.click.Street}</ValueField>
          </Field>
          <Field>
            <TitleField>Numero</TitleField>
            <ValueField>{marker.click.Number}</ValueField>
          </Field>
          {complement(marker)}
          <Field>
            <TitleField>Bairro</TitleField>
            <ValueField>{marker.click.Neighborhood}</ValueField>
          </Field>
          <Field>
            <TitleField>Cidade</TitleField>
            <ValueField>{marker.click.City}</ValueField>
          </Field>
          <Field>
            <TitleField>Estado</TitleField>
            <ValueField>{marker.click.State}</ValueField>
          </Field>
          <Field>
            <TitleField>Site</TitleField>
            <div style={{maxWidth: '250px'}} >
            <ValueField><a href={marker.click.Site}>{marker.click.Site}</a></ValueField>
            </div>
          </Field>
        </AllFields>
        <Body>Conhece um cursinho popular?</Body>
        <Button href="https://forms.gle/Ty3cCAeF7Skirwre7">Cadastre um cursinho</Button>
      </DivSecundaria>
      <DivSecundaria localiza>
        <OSM />
      </DivSecundaria>
    </DivPrincipal>
  </StyledDiv>
);

const mapStateToProps = (state) => ({ marker: state.MarkerReducer });

export default connect(mapStateToProps)(Localiza);
