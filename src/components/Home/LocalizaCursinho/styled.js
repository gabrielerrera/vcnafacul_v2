import styled, { css } from 'styled-components';


export const Field = styled.div`
  margin: 15px;

  @media (max-width: 600px) {
    width: 300px;
    margin-top: 5px;
  }
`

export const TitleField = styled.p`
  font-size: 2.5rem;
`

export const ValueField = styled.p`
  font-size: 1.8rem;
`

export const AllFields = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.a`
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