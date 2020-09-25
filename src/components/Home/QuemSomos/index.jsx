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

import recorte from "../../images/recorte.png";

const QuemSomos = () => (
  <div>
    <Recorte src={recorte} alt="divisão" />
    <div
      style={{
        backgroundColor: Colors.color1,
        height: "100%",
        verticalAlign: "bottom",
        paddingBottom: "20px",
        position: 'relative',
      }}
    >
      <StyledDiv>
      <DivPrincipal>
        <DivSecundaria className='youtube' style={{marginTop: '50px'}} ><Youtube/></DivSecundaria>
        <DivSecundaria>
          <Title colors >Quem Somos?</Title>
          <Body colors >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet gravida justo. In elementum venenatis tempor. Sed mattis
            est molestie venenatis volutpat. Maecenas mauris enim, vestibulum
            vitae iaculis sit amet, viverra eget ante. Nam pharetra risus eget
            fringilla posuere. Etiam accumsan lacus nec nisl efficitur viverra.
            Donec semper sodales justo nec congue. Nulla condimentum metus non
            erat varius commodo.{" "}
          </Body>
        </DivSecundaria>
      </DivPrincipal>
      </StyledDiv>
    </div>
    <Recorte inverso src={recorte} alt="divisão" />
  </div>
);

export default QuemSomos;
