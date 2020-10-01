import styled from 'styled-components';


export const Container = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  padding: 4px;
  margin-top: 10px;

  @media (max-width: 400px) {
    width: 300px;
    margin-top: 5px;
  }
`