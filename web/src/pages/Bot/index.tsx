import React from 'react';

import { Container } from './styles';

import botImg from '../../assets/bot-img.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface IBot {
  id: string;
  name: string;
}

function Bot() {
  const [bots, setBots] = useState<Array<IBot>>([]);

  useEffect(() => {
    api
      .get('/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div className="bot-container">
        {bots.map((bot) => (
          <Link key={bot.id} to={`chat/${bot.id}`} className="bot">
            <img src={botImg} alt={bot.name} />
            {bot.name}
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Bot;
