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
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 800px){
    justify-content: center;
    flex-direction: column;
  }
`
export const Div = styled.div`
  display: flex;
  width: 100%;


  @media (max-width: 800px){
    justify-content: space-evenly;
  }

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