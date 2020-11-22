import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Img =  styled.img`
  width: 20rem;
  position: relative;
  margin-top: 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  margin-left: 20px;
  margin-right: 20px;
  justify-content: flex-start;

  @media (max-width: 800px){
    align-items: center;

  }
`
export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: 600px) and (max-width: 800px){

  }

`
export const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.7rem;
`