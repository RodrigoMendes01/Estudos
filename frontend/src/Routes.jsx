import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import EditContact from './pages/EditContact/EditContact';
import NewContact from './pages/NewContact/NewContact';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewContact} />
      <Route exact path="/edit/:id" component={EditContact} />
    </Switch>
  );
}

export default Routes;
