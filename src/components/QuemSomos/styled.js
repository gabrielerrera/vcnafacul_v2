import styled, {css} from 'styled-components';

export const Recorte = styled.img`
  width: 100%;
  margin: none;
  vertical-align: middle;
  position: relative;

  ${props => props.inverso && css`
    transform: scale(-1);
    bottom: 10px;
  `}
`