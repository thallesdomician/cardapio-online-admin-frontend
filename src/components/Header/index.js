import React from 'react';

import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

import { Container, Content, ProfileImage, ToggleMenu } from './styles';

import logo from '~/assets/cardapio-black.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <ToggleMenu>
          <FiMenu />
        </ToggleMenu>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Cardapio Online" />
          </Link>
        </nav>
        <aside>
          <Link to="/profile">
            <ProfileImage>
              <img src="https://i.pravatar.cc/300" alt="Thalles Oliveira" />
            </ProfileImage>
            <strong>Thalles Oliveira</strong>
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
