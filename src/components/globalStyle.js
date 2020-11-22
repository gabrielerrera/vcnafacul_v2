import styled, { css } from 'styled-components';

const taxaYoutube = 0.5625;

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
  display: flex;
  justify-content: space-around;

`;

export const DivPrincipal = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  ${props => props.localiza && css`
  
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  `}

`
export const DivSecundaria = styled.div`
  width: 45vw;
  max-width: 600px;
  margin: 1vw;

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 40vw;
  }

  @media (max-width: 800px) {
    width: 90vw;
  }

`

export const Title = styled.h1`
  font-size: 8rem;
  text-transform: uppercase;
  line-height: 7rem;
  font-family: 'Passion One';
  margin-bottom: 10px;
  margin-top: 10px;
  color: #00305A;
  

  ${props => props.colors && css`
  color: white;
 
  `}

  @media (max-width: 600px) {
    line-height: 6rem;
    font-size: 7rem;
    text-align: center;
  }

  ${props => props.sobre && css`

  @media (max-width: 1000px) {
    font-size: 5rem;
    line-height: 5rem;
  }

  `}

  @media (min-width: 600px) and (max-width: 1200px){
    line-height: 6rem;
    font-size: 7.5rem;
    text-align: center;
}

`

export const Body = styled.p`
  font-size: 2.3rem;
  line-height: 2.3rem;
  font-family: 'pavanam';
  margin-top: 10px;
  margin-bottom: 10px;
  color: #00305A;
  font-weight: ${props => props.weight || "normal"};

  @media (max-width: 800px) {
    text-align: center;
  }

  ${props => props.colors && css`
  color: white;
  `}

  ${props => props.loc && css`
  margin-bottom: 2px;
  margin-top: 5px;
  `}

  ${props => props.sobre && css`

  @media (min-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  `}

  @media (max-width: 800px) {
    line-height: 2rem;
    font-size: 2rem;
  }
`
