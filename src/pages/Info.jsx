import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { InfoList } from '../components/InfoList/InfoList';
import { Section } from '../components/UI/Section/Section.styled';

export const Info = () => {
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.info);
  }, []);

  return (
    <>
      <Section>
        <h2>Подготовка к Игре</h2>
      </Section>
      <Section>
        <InfoList />
      </Section>
      <Link to="/">BACK</Link>
    </>
  );
};
