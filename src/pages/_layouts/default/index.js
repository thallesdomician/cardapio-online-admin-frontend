import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Content, Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
