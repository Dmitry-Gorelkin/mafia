import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { Container } from '../UI/Container/Container.styled';
import { Section } from '../UI/Section/Section.styled';
import { AppBarBox } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <Section>
        <AppBarBox>
          <Logo />
          <Menu />
        </AppBarBox>
      </Section>
    </Container>
  );
};
