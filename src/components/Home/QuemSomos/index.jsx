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
      <StyledDiv>
      <DivPrincipal>
        <DivSecundaria youtube className='youtube' ><Youtube/></DivSecundaria>
        <DivSecundaria>
          <Title colors sobre >Quem Somos?</Title>
          <Body colors sobre >
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
      <Recorte inverso src={recorte} alt="divisão" />
    </div>
);

export default QuemSomos;
