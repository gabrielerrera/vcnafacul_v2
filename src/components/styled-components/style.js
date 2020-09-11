import styled from 'styled-components';

export const Nome = styled.h1`
  color: ${props => props.iago ? 'white':'red'};
  background-color: ${props => props.iago ? 'blue':'transparent'};
  margin: 30px;
  `
