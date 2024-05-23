import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './UI/Container/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <div>
        <h1>MAFIA</h1>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
