import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleSidebar } from '~/store/modules/template/actions';

import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

import { Container, Content, ProfileImage, ToggleMenu } from './styles';

import logo from '~/assets/cardapio-black.svg';

export default function Header() {
  const dispatch = useDispatch();
  const activeNavbar = useSelector(state => state.template.active_sidebar);

  function updateSidebar() {
    dispatch(toggleSidebar({ active_sidebar: !activeNavbar }));
  }

  return (
    <Container>
      <Content>
        <ToggleMenu onClick={updateSidebar}>
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
