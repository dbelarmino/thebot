import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0;

  .chat-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }

  .chat-container .chat {
    background-color: #fff;
    width: 100%;
    max-width: 60rem;
    min-height: 42rem;
    max-height: 42rem;
    overflow-y: auto;
    border: 0.1rem solid #0040fe;
    padding: 1rem;
  }

  .chat-container .chat .user-message {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
  }

  .chat-container .chat .bot-message {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
  }

  .chat .user-message .message {
    width: max-content;
    text-align: right;
    background: #0040fe;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 1rem 0 1rem 1rem;
  }

  .chat .bot-message .message {
    width: max-content;
    text-align: left;
    background: #f5f7fb;
    color: #abb0c0;
    padding: 1rem 2rem;
    border-radius: 0 1rem 1rem 1rem;
  }

  .chat-container form {
    width: 100%;
    max-width: 60rem;
  }

  .chat-container form .input-block {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
  }

  @media (min-width: 500px) {
    .chat-container form .input-block {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  form .input-block input {
    width: 100%;
    padding: 0.8rem;
    color: #000;
    border: 0.1rem solid #0040fe;
  }

  form .input-block input::placeholder {
    color: #abb0c0;
  }

  form .input-block button {
    width: 100%;
    margin-top: 1rem;
    background-color: #0040fe;
    color: #fff;
    border: 0.1rem solid #0040fe;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 300ms;
  }

  form .input-block button:hover {
    background-color: rgba(0, 64, 254, 0.8);
  }

  @media (min-width: 500px) {
    form .input-block input {
      width: 69%;
    }

    form .input-block button {
      width: 29%;
      margin-top: 0;
    }
  }
`;
