import React from "react";
import { connect } from 'react-redux';

import OSM from "./maps/OSM";

import { StyledDiv, DivPrincipal, DivSecundaria, Title } from "../globalStyle";

const Localiza = ({marker}) => (
  <StyledDiv>
    <DivPrincipal>
      <DivSecundaria>
        <Title>Localiza Cursinho</Title>
        {marker.click.id}
        {marker.click.name}
      </DivSecundaria>
      <DivSecundaria>
        <OSM />
      </DivSecundaria>
    </DivPrincipal>
  </StyledDiv>
);

const mapStateToProps = (state) => ({ marker: state.MarkerReducer });

export default connect(mapStateToProps)(Localiza);
