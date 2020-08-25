import React from 'react';
import Header from '../Header';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <Main />
        <Header />
        
      </Wrapper>
    </Container>
  );
}

export default Layout;