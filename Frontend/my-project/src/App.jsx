import React from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import MenuBar from "./Menu/MenuBar";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Route exact path="/" render={() => <Redirect to="/signup" />} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/menubar" component={MenuBar} />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
