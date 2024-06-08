import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Classical } from '../pages/Classical';
import { NotFound } from '../pages/NotFound';
import { Menu } from '../pages/Menu';
import { GameOfThrones } from '../pages/GameOfThrones';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="classical" element={<Classical />} />
        <Route path="game-of-thrones" element={<GameOfThrones />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
