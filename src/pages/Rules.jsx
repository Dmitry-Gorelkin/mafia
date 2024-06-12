import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Section } from '../components/UI/Section/Section.styled';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { RulesList } from '../components/RulesList/RulesList';
import { Title } from '../components/UI/Title/Title';

export const Rules = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.rules);
  }, []);

  return (
    <>
      <Title>Правиала Игры</Title>
      <Section>
        <RulesList />
      </Section>
      <Link to={backLink.current}>BACK</Link>
    </>
  );
};
