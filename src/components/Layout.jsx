import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Container/Container.styled';
import { useStoreGame } from '../zustand/useStore';

export const Layout = () => {
  const { game } = useStoreGame();

  return (
    <Container>
      <Helmet>
        <title>{game}</title>
      </Helmet>
      <div>
        <h1>MAFIA</h1>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
