import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../../containers/App";
import Recipe from "../Recipe/Recipe";

const router = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
);

export default router;
