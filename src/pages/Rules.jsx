import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Section } from '../components/UI/Section/Section.styled';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { RulesList } from '../components/RulesList/RulesList';

export const Rules = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.rules);
  }, []);

  return (
    <>
      <Section>
        <h2>Правиала Игры</h2>
      </Section>
      <Section>
        <RulesList />
      </Section>
      <Link to={backLink.current}>BACK</Link>
    </>
  );
};
