import React, { FormEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

interface Params {
  id?: string;
}

interface IMessage {
  userMessage: {
    conversationId: string;
    from: string;
    text: string;
    timestamp: string;
  };
  botMessage: {
    conversationId: string;
    from: string;
    text: string;
    timestamp: string;
  };
}

function Chat() {
  const { id: botId } = useParams<Params>();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (message.trim() === '') return;

    try {
      const body = {
        to: botId,
        text: message,
        from: localStorage.getItem('userId')
          ? localStorage.getItem('userId')
          : undefined,
        conversationId: localStorage.getItem('conversationId')
          ? localStorage.getItem('conversationId')
          : undefined,
      };

      const response = await api.post('messages', body);

      if (!body.from && !body.conversationId) {
        localStorage.setItem('userId', response.data.userMessage.from);
        localStorage.setItem(
          'conversationId',
          response.data.userMessage.conversationId
        );
      }

      setMessages([...messages, response.data]);

      setMessage('');
    } catch (error) {}
  }

  useEffect(() => {
    document.querySelector('#chat')?.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  return (
    <Container>
      <div className="chat-container">
        <div className="chat" id="chat">
          {messages.map((message, index) => (
            <div key={index}>
              <div className="user-message">
                <div className="message">{message.userMessage.text}</div>
              </div>

              <div className="bot-message">
                <div className="message">{message.botMessage.text}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage}>
          <div className="input-block">
            <input
              type="text"
              placeholder="Escreva aqui"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Chat;
