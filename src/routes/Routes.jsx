import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../pages/Search";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/movies">
        <Search />
      </Route>
      <Route exact path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
