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
`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 20px;
`
export const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  margin-left: 20px;
`