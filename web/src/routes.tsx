import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Bot from './pages/Bot';
import Chat from './pages/Chat';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Bot} />
        <Route path="/chat/:id" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
