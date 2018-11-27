import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Detail from './Detail';
import Movie from './Movie';

export default () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Detail" component={Detail} />
    <Route exact path="/Movie" component={Movie} />
  </Switch>
)