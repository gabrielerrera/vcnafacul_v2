import styled from 'styled-components';


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