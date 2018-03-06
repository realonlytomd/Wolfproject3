import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chores from "./pages/Chores";
import Chores from "./pages/User";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Chores} />   
        <Route exact path="/chores" component={Chores} />
        <Route exact path="/chores/:id" component={Detail} />
        <Route exact path="/" component={User} />   
        <Route exact path="/user" component={User} />
        <Route exact path="/user/:id" component={Detail} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
