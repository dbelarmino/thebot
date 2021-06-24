import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .bot-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .bot-container .bot {
    background-color: #fff;
    width: 20rem;
    margin: 0 1rem;
    border: 0.1rem solid #000;
    padding: 1rem;
    text-decoration-line: none;
    text-align: center;
  }

  .bot-container .bot img {
    width: 100%;
  }
`;
