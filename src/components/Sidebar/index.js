import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { toggleSidebar } from '~/store/modules/template/actions';

import { VscChromeClose } from 'react-icons/vsc';

import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/cardapio-black.svg';

import { Container, Content, CloseSidebar, Overlay } from './styles';

export default function SideBar() {
  const dispatch = useDispatch();
  const activeNavbar = useSelector(state => state.template.active_sidebar);
  const location = useLocation();

  function closeSidebar() {
    dispatch(toggleSidebar({ active_sidebar: false }));
  }

  return (
    <Container active={activeNavbar}>
      <Content>
        <CloseSidebar onClick={closeSidebar}>
          <VscChromeClose />
        </CloseSidebar>
        <nav>
          <Link to="/dashboard" onClick={closeSidebar}>
            <img src={logo} alt="Cardapio Online" />
          </Link>
        </nav>
        <aside>
          <ul>
            <li>
              <Link
                onClick={closeSidebar}
                className={location.pathname === '/dashboard' ? 'active' : null}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSidebar}
                className={location.pathname == '/store' ? 'active' : null}
                to="/store"
              >
                Lojas
              </Link>
            </li>
          </ul>
        </aside>
      </Content>
      <Overlay onClick={closeSidebar} active={activeNavbar} />
    </Container>
  );
}
