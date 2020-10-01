import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Img =  styled.img`
  width: 120px;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 400px){
    justify-content: center;
    flex-direction: column;
  }
`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 400px){
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 400px) and (max-width: 600px){
    justify-content: center;
    flex-direction: column;
  }

`
export const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  margin-left: 20px;
`