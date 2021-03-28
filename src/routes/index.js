import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import RouteWrapper from './Route';

import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';

import Dashboard from './../pages/Dashboard';
import Profile from './../pages/Profile';
import Store from './../pages/Store';
import StoreDetail from './../pages/Store/Detail';
import StoreEdit from './../pages/Store/Edit';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/register" component={SignUp} />

      <RouteWrapper path="/dashboard" isPrivate component={Dashboard} />
      <RouteWrapper path="/profile" exact isPrivate component={Profile} />
      <RouteWrapper path="/store" exact isPrivate component={Store} />
      <RouteWrapper
        path="/store/:slug"
        exact
        isPrivate
        component={StoreDetail}
      />
      <RouteWrapper path="/store/:slug/edit" isPrivate component={StoreEdit} />
    </Switch>
  );
}
