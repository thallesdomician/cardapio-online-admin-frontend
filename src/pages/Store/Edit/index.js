import React from 'react';

import {
  FaPhone,
  FaStore,
  FaMapMarkerAlt,
  FaRegClock,
  FaFileImage,
} from 'react-icons/fa';

import { Link, Switch, Route } from 'react-router-dom';

import Address from './Address';
import Profile from './Profile';
import Images from './Images';
import Phones from './Phones';
import OpenDays from './OpenDays';

import { Container, Content, Tabs } from './styles';

export default function StoreEdit(props) {
  const { path, url } = props.match;
  const { pathname } = props.location;
  return (
    <Container>
      <Tabs>
        <span className={pathname === `${url}` ? 'active' : null}>
          <Link to={`${url}`}>
            <FaStore /> <strong>Perfil</strong>
          </Link>
        </span>
        <span className={pathname === `${url}/images` ? 'active' : null}>
          <Link to={`${url}/images`}>
            <FaFileImage />
            <strong>Imagens</strong>
          </Link>
        </span>
        <span className={pathname === `${url}/phones` ? 'active' : null}>
          <Link to={`${url}/phones`}>
            <FaPhone />
            <strong>Telefones</strong>
          </Link>
        </span>
        <span className={pathname === `${url}/address` ? 'active' : null}>
          <Link to={`${url}/address`}>
            <FaMapMarkerAlt />
            <strong>Endereço</strong>
          </Link>
        </span>
        <span className={pathname === `${url}/open-days` ? 'active' : null}>
          <Link to={`${url}/open-days`}>
            <FaRegClock />
            <strong>Horários</strong>
          </Link>
        </span>
      </Tabs>
      <Content>
        <Switch>
          <Route path={`${path}`} exact component={Profile} />
          <Route path={`${path}/images`} exact component={Images} />
          <Route path={`${path}/address`} exact component={Address} />
          <Route path={`${path}/phones`} exact component={Phones} />
          <Route path={`${path}/open-days`} exact component={OpenDays} />
        </Switch>
      </Content>
    </Container>
  );
}
