import styled, {css} from 'styled-components';

export const Colors = {
  color1: '#00305A',
  color2: '#95A7BF',
  color3: '#F2AF5C',
  color4: '#6CC9FF',
  color5: '#F49E6C',
  color6: '#5679A6',
  color7: '#F8591F',
}

export const StyledDiv = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    margin-left: 10px;
    margin-right: 10px;
  }

`;

export const DivPrincipal = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }

`
export const DivSecundaria = styled.div`
  width: ${props => props.width || "50vw"};
  min-width: 400px;
  margin: 20px;

  @media (max-width: 400px) {
    min-width: 300px;
  }

`

export const Title = styled.h1`
  font-size: ${props => props.font || "70px"};
  text-transform: uppercase;
  line-height: 80px;
  font-family: 'Passion One';
  margin-bottom: 10px;
  margin-top: 10px;
  color: #00305A;

  ${props => props.colors && css`
  color: white;
  font-size: 60px;
  `}

  @media (max-width: 400px) {
    line-height: 40px;
    font-size: 50px;
  }

`

export const Body = styled.p`
  font-size: ${props => props.font || "25px"};
  max-width: 500px;
  line-height: ${props => props.line || "30px"};
  font-family: 'pavanam';
  margin-top: 0px;
  color: #00305A;
  font-weight: ${props => props.weight || "normal"};

  ${props => props.colors && css`
  color: white;
  `}

  @media (max-width: 400px) {
    line-height: 20px;
    font-size: 15px;
  }
`
