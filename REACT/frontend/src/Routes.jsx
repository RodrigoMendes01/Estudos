import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import EditContact from './pages/EditContact/EditContact';
import NewContact from './pages/NewContact/NewContact';

function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/new" element={<NewContact />} />
      <Route exact path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}

export default ApplicationRoutes;
