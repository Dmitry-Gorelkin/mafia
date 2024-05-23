import { useStore1 } from '../zustand/useStore';

export const App = () => {
  const { arrMaf, setArrMaf, setClear } = useStore1();

  console.log(arrMaf);

  return (
    <>
      <h1>MAFIA</h1>

      <p>{arrMaf}</p>

      <button onClick={setArrMaf}>Cleak Me</button>
      <button onClick={setClear}>ZERO</button>
    </>
  );
};
