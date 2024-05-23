import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Classical } from '../pages/Classical';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="classical" element={<Classical />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
