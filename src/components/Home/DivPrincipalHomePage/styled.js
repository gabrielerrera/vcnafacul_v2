import styled, {css} from 'styled-components';

import { Link } from 'react-router-dom';


export const Button = styled(Link)`
  background-color: #00305A;
  color: white;
  border: 1px solid #00305A;
  font-size: 2rem;
  font-family: 'Passion One';
  text-decoration: none;
  padding: 5px;
  text-transform: uppercase;
  width: 175px;
  margin: 5px;
  

  ${props => props.primary && css`
  background-color: white;
  color: #00305A;
  `}

`

export const DivButton = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 400px) and (max-width: 800px) {
    justify-content: center;
  }
`