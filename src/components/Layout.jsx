import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from './UI/Container/Container.styled';
import { useStorePage } from '../zustand/useStorePage';
import { AppBar } from './AppBar/AppBar';
import { Section } from './UI/Section/Section.styled';

export const Layout = () => {
  const { page } = useStorePage();

  return (
    <>
      <Helmet>
        <title>{page}</title>
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
