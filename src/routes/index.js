import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';

import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';

import Dashboard from './../pages/Dashboard';
import Profile from './../pages/Profile';
import Store from './../pages/Store';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/cadastro" component={SignUp} />

      <RouteWrapper path="/dashboard" isPrivate component={Dashboard} />
      <RouteWrapper path="/perfil" isPrivate component={Profile} />
      <RouteWrapper path="/loja" isPrivate component={Store} />
    </Switch>
  );
}
