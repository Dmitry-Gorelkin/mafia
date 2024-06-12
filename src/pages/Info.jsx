import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { InfoList } from '../components/InfoList/InfoList';
import { Section } from '../components/UI/Section/Section.styled';
import { Title } from '../components/UI/Title/Title';

export const Info = () => {
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.info);
  }, []);

  return (
    <>
      <Title>Подготовка к Игре</Title>
      <Section>
        <InfoList />
      </Section>
      <Link to="/">BACK</Link>
    </>
  );
};
