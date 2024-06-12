import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Container } from '../UI/Container/Container.styled';
import { Section } from '../UI/Section/Section.styled';
import { AppBarBox, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarContainer>
      <Container>
        <Section>
          <AppBarBox>
            <Logo />
            <Nav />
          </AppBarBox>
        </Section>
      </Container>
    </AppBarContainer>
  );
};
