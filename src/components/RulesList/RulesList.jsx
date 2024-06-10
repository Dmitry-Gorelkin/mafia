import { RULES_GAME } from '../../utils/rulesGame';
import { useStoreGame } from '../../zustand/useStoreGame';

export const RulesList = () => {
  const { nameGame } = useStoreGame();

  return (
    <>
      <ul>
        {RULES_GAME[nameGame].map((e, i) => {
          return (
            <li key={i}>
              <p>{e}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
