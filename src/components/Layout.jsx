import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Container/Container.styled';
import { useStoreGame } from '../zustand/useStoreGame';
import { AppBar } from './AppBar/AppBar';
import { Section } from './UI/Section/Section.styled';

export const Layout = () => {
  const { game } = useStoreGame();

  return (
    <>
      <Helmet>
        <title>{game}</title>
      </Helmet>
      <AppBar />
      <Container>
        <Section>
          <Suspense>
            <Outlet />
          </Suspense>
        </Section>
      </Container>
    </>
  );
};
