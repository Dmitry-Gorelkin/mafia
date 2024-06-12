import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_PAGE } from '../utils/constants';
import { useStorePage } from '../zustand/useStorePage';
import { useStoreGame } from '../zustand/useStoreGame';
import { Title } from '../components/UI/Title/Title';
import { Section } from '../components/UI/Section/Section.styled';

export const Home = () => {
  const { setPage } = useStorePage();
  const { setNameGame } = useStoreGame();

  useEffect(() => {
    setPage(CURRENT_PAGE.home);
    setNameGame('');
  }, []);

  return (
    <>
      <Title>PAGE HOME</Title>

      <Section>
        <Link to="/classical">Classical Mafia</Link>

        <h3>Game 2</h3>
        <Link to="/game-of-thrones">Game Of Thrones</Link>

        <p>тест17</p>
      </Section>
    </>
  );
};
