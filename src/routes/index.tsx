import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

import SeguroAuto from '../pages/Seguros/Auto';
import SeguroResidencial from '../pages/Seguros/Residencial';
import SeguroViagem from '../pages/Seguros/Viagem';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/seguro-auto" component={SeguroAuto} />
      <Route path="/seguro-residencial" component={SeguroResidencial} />
      <Route path="/seguro-viagem" component={SeguroViagem} />
      <Route path="/sobre" component={About} />
    </Switch>
  );
};

export default routes;
