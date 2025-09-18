import React from "react";
import { IonApp } from "@ionic/react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import MenuBar from "./Menu/MenuBar";

function App() {
  return (
    <IonApp>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/signup" />} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/menubar" component={MenuBar} />
        </Switch>
      </Router>
    </IonApp>
  );
}

export default App;
