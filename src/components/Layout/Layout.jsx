import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import { Container, Header, PageContainer } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>
    </Container>
  );
};

export default Layout;
