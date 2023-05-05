import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Section from 'components/Section/Section';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <Section>
      <div>
        <Navigation />
      </div>

      <div>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </div>
    </Section>
  );
};

export default Layout;
