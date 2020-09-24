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
`;

export const DivPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivSecundaria = styled.div`
  width: 50vw;
  max-width: 600px;
  min-width: 400px;
  margin: 20px;
`

export const Title = styled.h1`
  font-size: 70px;
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

`

export const Body = styled.p`
  font-size: 25px;
  max-width: 500px;
  line-height: 30px;
  font-family: 'pavanam';
  margin-top: 0px;
  color: #00305A;

  ${props => props.colors && css`
  color: white;
  `}
`
