import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import LOL from "./Pages/LOL";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={LOL} />
    </Switch>
  );
}

export default App;
