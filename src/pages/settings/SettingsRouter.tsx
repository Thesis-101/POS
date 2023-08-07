import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import SettingsIndex from './SettingsIndex';

function SettingsRouter () {
  return (
    <Routes>
      <Route path="/" element={<SettingsIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default SettingsRouter;
