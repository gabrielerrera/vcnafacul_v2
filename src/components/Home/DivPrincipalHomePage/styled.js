import styled, {css} from 'styled-components';

import { Link } from 'react-router-dom';


export const Button = styled(Link)`
  background-color: #00305A;
  color: white;
  border: 1px solid #00305A;
  margin-right: 20px;
  font-size: 2.7rem;
  font-family: 'Passion One';
  text-decoration: none;
  padding: 5px;
  text-transform: uppercase;
  width: 230px;
  margin-bottom: 10px;
  

  ${props => props.primary && css`
  background-color: white;
  color: #00305A;
  `}

`